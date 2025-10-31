import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';//all the basic imports are imported here first



@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [FormsModule,CommonModule], //always import common modules for the *ngif and *ngfor directives
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact={
    fullName:'',
    email:'',
    message:'',
    phone:'',
  };

  isLoading:boolean=false; 
  submitted =false; // add this to tract form submission status
  isSucess:boolean =false; 
serverMessage ='';// these properties are used to tract server responses
  constructor(private http: HttpClient) {}
  onSubmit(contactForm:any){
    this.submitted=true;  //accepts the form parameter and sets submitted to true

    //check if form is valid before submitting it
    if(contactForm.invalid){
      alert('❌ Please fill out all the required fields correctly!.');
      return;
    }
    this.isLoading =true;
    this.serverMessage ='';
    this.isSucess =false;
    this.http.post('',this.contact).subscribe({
      next:(res) => {
        //success -use the custom messages instead of the javascript alert  
        this.serverMessage ='✅ Message sent successfully!';
        this.isSucess =true;
        this.contact = {fullName:'',email:'',phone:'',message:''};
        this.isLoading = false;
        this.submitted =false; //reset form submission status
        contactForm.reset(); // this will clear the form validation states
      },
      error:(err) => {
        //Error - use the custom message instead of the javascript alert
        this.serverMessage = '❌ Something went wrong. Please try again.';
        this.isSucess =false;
        console.error('Error sending message:',err);
        this.isLoading =false;
      }
      
    });
  }
}