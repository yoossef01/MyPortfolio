import { Component, Output } from '@angular/core';
import { AbstractControl, FormBuilder, isFormControl } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Output() showGithubLink: boolean = false;

  constructor(private fb:FormBuilder) {
    // Object.values(this.formGroup.controls).forEach(control => {
    //   this.watchFormControlValue(control);
    // })
  }

  watchFormControlValue(control: AbstractControl) {
    control.valueChanges.subscribe((controlValue) => {
      if (control.dirty && controlValue === '') {
        control.markAsPristine();
      }
    })
  }


  // mailSent: boolean = false;
  // value: string = '';

  // formGroup = new FormGroup({
  //   name: new FormControl('', {
  //     validators: [
  //       Validators.required,
  //       Validators.minLength(3)
  //     ]
  //   }
  //   ),
  //   email: new FormControl('', {
  //     validators: [
  //       Validators.required,
  //       Validators.email
  //     ]
  //   })
  //   ,
  //   company: new FormControl(''),
  //   website: new FormControl(''),
  //   message: new FormControl('', Validators.required),
  // })

  // submitForm() {
  //   this.formGroup.disable()
  //   this.sendMail()
  // }


  // async sendMail() {
  //   let formData = new FormData();
  //   formData.append('company', this.formGroup.value.company || '');
  //   formData.append('website', this.formGroup.value.website || '');
  //   formData.append('name', this.formGroup.value.name || '');
  //   formData.append('message', this.formGroup.value.message || '');
  //   formData.append('email', this.formGroup.value.email || '');

  //   fetch('https://www.ingo-hermsen.de/_sendphp/send_mail.php',
  //     {
  //       method: 'POST',
  //       body: formData
  //     }
  //   ).then((response) => {
  //     this.formGroup.reset()
  //     this.showMailSentMessage()

  //   })

  // }

  // showMailSentMessage() {
  //   this.mailSent = true;
  //   let mailSentTimeout = setTimeout(() => {
  //     this.formGroup.enable();
  //     this.mailSent = false;
  //     clearTimeout(mailSentTimeout);
  //   }, 3000)
  // }
form: FormGroup=this.fb.group({
from_name:'',
from_company:'',
to_name:'Admin',
from_email:'',
message:'',
})
  async send(){
    emailjs.init('gq3ruXRNcO0J7Lr6y');
 let response= await emailjs.send
    ('service_258hymq','template_905vlsu',{

    
      from_name: this.form.value.from_name,
      from_company: this.form.value.from_company,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });
    alert('Thank you very much!\nMessage has been sent.\nI will respond as soon as possible.');
    this.form.reset();
}
  
}