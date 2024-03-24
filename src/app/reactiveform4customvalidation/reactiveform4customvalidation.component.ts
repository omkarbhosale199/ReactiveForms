import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform4customvalidation',
  templateUrl: './reactiveform4customvalidation.component.html',
  styleUrls: ['./reactiveform4customvalidation.component.css']
})
export class Reactiveform4customvalidationComponent implements OnInit {

  myReactiveForm!:FormGroup;

 constructor() {

   this.RevisionOfReactiveForm()
  }

 ngOnInit(): void {
 }

RevisionOfReactiveForm(){
this.myReactiveForm = new FormGroup({
// "email": new FormControl('........@.......mail.com',Validators.required), // single validation with default value
"email": new FormControl('',[Validators.required,Validators.email,Validators.minLength(8),Validators.maxLength(30)]),// multiple validation apply on in it so we take array
//                              don't forget to give no to max or min length ex- minLength(8),maxLength(30)
"password": new FormControl()});

}
onSubmit(){
 console.log(this.myReactiveForm);
}

emailNotAllow(control:FormControl) : ValidationErrors| null{
  return somethink.......

}
}
