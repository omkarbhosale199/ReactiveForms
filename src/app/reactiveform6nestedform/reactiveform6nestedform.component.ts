import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform6nestedform',
  templateUrl: './reactiveform6nestedform.component.html',
  styleUrls: ['./reactiveform6nestedform.component.css']
})
export class Reactiveform6nestedformComponent implements OnInit {

  myReactiveForm!:FormGroup;

  constructor() {

    this.RevisionOfReactiveForm()
   }

  ngOnInit(): void {

   // We use the setValue() function when we want to update all the controls of the form.

 // this.myReactiveForm.setValue({
 //   'email':'abcxyz@gmail.com',
 //   'password':'123edrftg'
 // })

 // We use the patchValue() function when we do not want to update all the controls of the reactive form
 this.myReactiveForm.patchValue({
   'email':'abcxyz@gmail.com',

 })
  }

 RevisionOfReactiveForm(){
 this.myReactiveForm = new FormGroup({
 // "email": new FormControl('........@.......mail.com',Validators.required), // single validation with default value
 "email": new FormControl('',[Validators.required,Validators.email,Validators.minLength(8),Validators.maxLength(30),this.emailNotAllow]),// multiple validation apply on in it so we take array
 //                              don't forget to give no to max or min length ex- minLength(8),maxLength(30)
 // To call custom validation using this.functionName (no need of  argument to  function)
 "password": new FormControl(),
 // nested form making.......
'Address':new FormGroup({
  'state':new FormControl(),
  'District':new FormControl(),
  'Taluka':new FormControl(),
  'village':new FormControl()

})});

 }
 onSubmit(){
  console.log(this.myReactiveForm);
 }

 // Custom validation
 // return type of --- >>>  ValidationErrors| null  --->>   is union
 // Argument --->>> FormControl
 emailNotAllow(control:FormControl) : ValidationErrors| null{

   const emailNotAllowedIs =['random1@example.com','random2@example.com','random3@example.com','random4@example.com'];
   const values = control.value as string;
   // Type casting ---->>>>> control.value as string

   if (emailNotAllowedIs.indexOf(values) !== -1) {
     return {'emailNotAllowedIs':true}

   }

   return null
 }



}
