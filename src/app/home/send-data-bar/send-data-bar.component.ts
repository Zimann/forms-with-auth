import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data-bar',
  templateUrl: './send-data-bar.component.html',
  styleUrls: ['./send-data-bar.component.scss']
})
export class SendDataBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // post messages
  sendMessage(theMessage) {
    console.log(theMessage.value);
  }

}
