import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CrossComponentService} from '../../services/cross-component.service';

@Component({
    selector: 'app-profile-slide',
    templateUrl: './profile-slide.component.html',
    styleUrls: ['./profile-slide.component.scss']
})
export class ProfileSlideComponent  {

    @Input() slideIn: boolean;
    @Output() slideOutEmitter = new EventEmitter<boolean>();

    constructor(private crossComponentService: CrossComponentService) {
    }

    slideOut() {
        this.slideOutEmitter.emit(false);
        this.crossComponentService.slideOutToggle$.next(true);
    }
}
