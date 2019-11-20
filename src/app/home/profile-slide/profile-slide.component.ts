import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ImageService} from '../../services/image.service';

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
    @ViewChild('initialPasswordInput', {static: false}) initialPassRef: ElementRef;
    @ViewChild('confirmPassInput', {static: false}) confirmPassRef: ElementRef;
    @ViewChild('profileImage', {static: false}) profileImage: ElementRef;

    private nameForm: FormGroup;
    private statusForm: FormGroup;
    private changePasswordForm: FormGroup;

    private destroyed$ = new ReplaySubject(1);
    public userNameTracker$ = new BehaviorSubject<string>('');
    public statusTracker$ = new BehaviorSubject<string>('');
    public imageSource$ = new Subject();

    public userNameSubmitted = false;
    public statusSubmitted = false;
    public editUserNameClicked = false;
    public editStatusClicked = false;
    public showUpdatedName = false;
    public showUpdatedStatus = false;
    public bringInPassChange = false;
    public showPassChanged = false;
    public profileImageResize = false;

    public hideError = true;
    public hideUsernameCheck = true;
    public hideStatusCheck = true;

    public presentUsername: string;
    public presentStatus: string;

    constructor(private formBuilder: FormBuilder,
                private imageService: ImageService) {
    }

    get status() {
        return this.statusForm.get('status');
    }

    get initPassword() {
        return this.changePasswordForm.get('initPassword');
    }

    get confirmedPas() {
        return this.changePasswordForm.get('confirmedPass');
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

        this.changePasswordForm = this.formBuilder.group({
            initPassword: ['', [
                Validators.minLength(9)
            ]],
            confirmedPass: ['', [
                Validators.minLength(9)
            ]]
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

    slideOut() {
        this.slideOutEmitter.emit(false);
        this.resetUserInputState();
        this.resetStatusInputState();
        this.bringInPassChange = false;
        this.changePasswordForm.reset();
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

    // executed when clicking the 'edit' icon
    activateStatusInput() {
        this.statusInput.nativeElement.focus();
        this.showUpdatedStatus = false;
        this.editStatusClicked = true;
        this.presentStatus = this.statusInput.nativeElement.value;
        this.hideStatusCheck = true;
    }

    processImageFile(imageInput: HTMLInputElement) {
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
                    this.profileImageResize = imageReference.width > 1100 && imageReference.width < 1300 ;
                };
                this.imageSource$.next(fileReader.result);

                // pass encoded image data to the service
                this.imageService.uploadProfilePic(fileReader.result);
            };
        }
    }

    showChangePass() {
        this.bringInPassChange = !this.bringInPassChange;
        this.initialPassRef.nativeElement.focus();
    }

    // methods where the calls to the server will be made
    onSubmitChangePass() {
        // send email with password reset
        this.changePasswordForm.reset();
        this.showPassChanged = true;
        this.initialPassRef.nativeElement.blur();
        this.confirmPassRef.nativeElement.blur();


        setTimeout(() => {
            this.showPassChanged = false;
            this.bringInPassChange = false;
        }, 1000);
    }

    onSubmitUserName() {
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

    ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
