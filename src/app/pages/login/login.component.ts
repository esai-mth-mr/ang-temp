import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatDividerModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  async onSubmit() {
    this.isLoading = true;
    
    try {
      const response = await this.login(this.email, this.password);
      console.log(response)
    } catch (error) {
      console.log("----------", error)    
    } finally {
      this.isLoading = false;
    }
    // this.login(this.email, this.password).then(response => {
    //   console.log("------------", response);
    // }).catch(error => {
    //   console.log("--------", error);
    // }).finally(() => {
    //   this.isLoading = false;
    // })
  }

  login = async (email: string, password: string) : Promise<any> => {
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    if(email == "ericsassano@gmail.com" && password == "123456") {
      return Promise.resolve({"message" : "Login successfully!"});
    } else {
      return Promise.reject({"message" : "Invalid credentials!"});
    }
  }

  // login(email: string, password: string) : Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(email == "ericsassano@gmail.com" && password == "123456") {
  //         resolve({"message" : "Login successfully!"})
  //       } else {
  //         reject({"message" : "Invalid credentials!"});
  //       }
  //     }, 2000);
  //   }); 
  // }
}
