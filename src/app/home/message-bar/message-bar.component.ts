import { Component, OnInit } from '@angular/core';
import {CrossComponentService} from '../../services/cross-component.service';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class MessageBarComponent implements OnInit {

  showMessageBar = this.crossComponentService.showMessageBar$;
  constructor(private crossComponentService: CrossComponentService) { }

  ngOnInit() {
  }

  // post messages
  sendMessage(theMessage) {
    console.log(theMessage.value);
  }

}
