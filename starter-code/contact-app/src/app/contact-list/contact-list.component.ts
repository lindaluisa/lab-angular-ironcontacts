import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};
  feedbackEnabled = false;

  constructor() {
    this.feedbackEnabled;
  }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(form){
    if (form.valid) {
      this.contacts.push(this.newContact)
      this.feedbackEnabled = false;
      console.log("Add contact has been called");
    } else {
      this.feedbackEnabled = true;
    }
    // add contact to contacts list
    // clear inputs
  }
      _keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
      
        if (!pattern.test(inputChar)) {
          // invalid character, prevent input
          event.preventDefault();
        }
      }
}

