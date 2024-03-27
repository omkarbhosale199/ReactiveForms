import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform7formbilder',
  templateUrl: './reactiveform7formbilder.component.html',
  styleUrls: ['./reactiveform7formbilder.component.css']
})
export class Reactiveform7formbilderComponent implements OnInit {

  myReactiveForm!:FormGroup;

  // inject
  constructor( private fb:FormBuilder) {
// fb is instance/obj of FormBuilder class
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
  // Getter for easier access to hobbies from array.
  get hobbiesFormArray() {
    return this.myReactiveForm.get('hobbies') as FormArray;
   }

 RevisionOfReactiveForm(){
 this.myReactiveForm = this.fb.group({
 "email": new FormControl('',[Validators.required,Validators.email,Validators.minLength(8),Validators.maxLength(30),this.emailNotAllow]),// multiple validation apply on in it so we take array
 "password": new FormControl(),
'Address':this.fb.group({
  'state':new FormControl(),
  'District':new FormControl(),
  'Taluka':new FormControl(),
  'village':new FormControl(),

}),
'hobbies': this.fb.array([])
});

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

 addHobby(){
  this.hobbiesFormArray.push(new FormControl(''));
}


}
