import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {User} from '../model/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  myForm: FormGroup;
  oneUser: User;
  editableFields = [ 'name', 'username', 'email', 'phone', 'website', 'zipcode'];
  @ViewChild('name', {static: true}) name: ElementRef;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) data,
              public dialogRef: MatDialogRef<UserFormComponent>) {
    this.oneUser = data;
    this.myForm = this.formBuilder.group({
      name: [data.user.name, [Validators.required, Validators.pattern('[a-zA-z ]*')]],
      username: [data.user.username, [Validators.required, Validators.pattern('[a-zA-z ]*')]],
      email: [data.user.email, [Validators.required, Validators.email]],
      phone: [data.user.phone, [Validators.required, Validators.pattern('[0-9]*')]],
      website: [data.user.website, [Validators.required, Validators.pattern('[a-zA-Z0-9 .]*')]],
      zipcode: [data.user.address.zipcode, [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  onSave(): void {
    this.dialogRef.close(this.myForm.value);
  }
}
