import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ImageService} from '../../image.service';

@Component({
    selector: 'app-profile-slide',
    templateUrl: './profile-slide.component.html',
    styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent implements OnInit, OnDestroy {

    @Input() slideIn: boolean;
    @Output() slideOutEmitter = new EventEmitter<boolean>();
    @ViewChild('userInput', {static: false}) userInput: ElementRef;
    @ViewChild('statusInput', {static: false}) statusInput: ElementRef;
    @ViewChild('profPic', {static: false}) profPic: ElementRef;
    @ViewChild('profileImage', {static: false}) profileImage: ElementRef;

    private destroyed$ = new ReplaySubject(1);
    private nameForm: FormGroup;
    private statusForm: FormGroup;

    public userNameTracker$ = new BehaviorSubject<string>('');
    public statusTracker$ = new BehaviorSubject<string>('');
    public hideError = true;
    public userNameSubmitted = false;
    public statusSubmitted = false;
    public editUserNameClicked = false;
    public editStatusClicked = false;
    public showUpdatedName = false;
    public showUpdatedStatus = false;
    public presentUsername: string;
    public presentStatus: string;
    public hideUsernameCheck = true;
    public hideStatusCheck = true;
    public profileImageResize = false;
    public imageSource$ = new Subject();

    constructor(private formBuilder: FormBuilder,
                private imageService: ImageService) {
    }

    get userName() {
        return this.nameForm.get('user_name');
    }

    get status() {
        return this.statusForm.get('status');
    }

    ngOnInit() {
        this.nameForm = this.formBuilder.group({
            user_name: ['', [
                Validators.maxLength(35)
            ]]
        });
        this.statusForm = this.formBuilder.group({
            status: ['']
        });

        // this is where we get data for our two user related inputs
        this.nameForm.valueChanges
            .pipe(takeUntil(this.destroyed$))
            .subscribe(value => {
                this.userNameTracker$.next(value.user_name);
            });

        this.statusForm.valueChanges
            .pipe(takeUntil(this.destroyed$))
            .subscribe(value => {
                this.statusTracker$.next(value.status);
            });
    }


    // send the updated user name to the server
    onSubmitUserName() {

        if (this.userName.invalid) {
            this.hideError = false;
        } else {
            // detect if the same username is used after editing
            // prevent unnecessary server calls
            if (this.userInput.nativeElement.value === this.presentUsername) {
                this.editUserNameClicked = true;
                return;
            }
            // the call to the server should be placed here
            // the below actions should take place if the request was successful
            this.showUpdatedName = true;
            this.resetUserInputState();

            // hide the confirmation for less UI clutter
            setTimeout(() => {
                this.showUpdatedName = false;
            }, 1500);
        }
    }

    onSubmitStatus() {
        if (this.statusInput.nativeElement.value === this.presentStatus) {
            this.editStatusClicked = true;
            return;
        }
        // the call to the server should be placed here
        // the below actions should take place if the request was successful
        this.showUpdatedStatus = true;
        this.resetStatusInputState();

        // hide the confirmation for less UI clutter
        setTimeout(() => {
            this.showUpdatedStatus = false;
        }, 1500);
    }

    slideOut() {
        this.slideOutEmitter.emit(false);
        this.resetUserInputState();
        this.resetStatusInputState();
        this.hideUsernameCheck = false;
        this.hideStatusCheck = false;

    }

    resetUserInputState() {
        this.hideError = true;
        this.userNameSubmitted = !this.userNameSubmitted;
        this.editUserNameClicked = false;
        this.userInput.nativeElement.blur();
    }

    resetStatusInputState() {
        this.statusSubmitted = !this.statusSubmitted;
        this.editStatusClicked = false;
        this.statusInput.nativeElement.blur();
    }

    // executed when clicking the 'edit' icon
    activateUserInput() {
        this.userInput.nativeElement.focus();
        this.showUpdatedName = false;
        this.editUserNameClicked = true;
        this.presentUsername = this.userInput.nativeElement.value;
        this.hideUsernameCheck = true;
    }

    activateStatusInput() {
        this.statusInput.nativeElement.focus();
        this.showUpdatedStatus = false;
        this.editStatusClicked = true;
        this.presentStatus = this.statusInput.nativeElement.value;
        this.hideStatusCheck = true;
    }

    processFile(imageInput: HTMLInputElement) {
        let selectedImage: File;
        selectedImage = imageInput.files[0];

        const fileReader: FileReader = new FileReader();
        if (selectedImage) {
            fileReader.readAsDataURL(selectedImage);
            fileReader.onloadend = () => {
            // resize images based on width
            const imageReference = new Image();
            imageReference.src = String(fileReader.result);
            imageReference.onload = () => {
                this.profileImageResize = imageReference.width < 1300;
            };
            this.imageSource$.next(fileReader.result);

            // pass encoded image data to the service
            this.imageService.uploadProfilePic(fileReader.result);
        };
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
