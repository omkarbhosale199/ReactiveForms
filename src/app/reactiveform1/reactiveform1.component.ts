import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform1',
  templateUrl: './reactiveform1.component.html',
  styleUrls: ['./reactiveform1.component.css']
})
export class Reactiveform1Component implements OnInit {

 myReactiveForm!:FormGroup; // Step 1 declaration

   //myReactiveForm:FormGroup; // in constructor(){ this.myReactiveForm=''}; in Angular 17
   // this is bad practice so in constructor --->> this.myReactiveForm="";



  constructor() {

    // step 4 call this method in constructor
    this.RevisionOfReactiveForm()
   }

  ngOnInit(): void {
  }
// step 2 write method  (we can say model also)
RevisionOfReactiveForm(){
this.myReactiveForm = new FormGroup({"email": new FormControl(),"password": new FormControl()});
// create instance of Form group as we as formControl instance
}
onSubmit(){
  console.log(this.myReactiveForm);
}
}
