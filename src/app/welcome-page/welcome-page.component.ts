import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  
  public userNameForm: FormGroup;
  userName:string;
  constructor(public formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName');
    if(this.userName){
      this.goToBooksPage();
    }
    this.buildFormControl();
  }
  
  private buildFormControl() {
    this.userNameForm = this.formBuilder.group({
      userName:[this.userName ? this.userName : null, [Validators.required, Validators.maxLength(30)] ]   //[null, [Validators.required, Validators.maxLength(30)]]
    });
  }
  
  goToBooksPage() {
    if(this.userNameForm && this.userName !== this.userNameForm.get('userName').value) {
      this.userName = this.userNameForm.get('userName').value;
      localStorage.setItem('userName', this.userName);
    }
    
    this.router.navigate(['/books'])
  }
}
