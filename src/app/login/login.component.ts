import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {
message:String =' Vous etes decconnecté'
name : string
password:string
auth: AuthService
constructor (private authService: AuthService, private route : Router){
}
  ngOnInit(){
    this.auth=this.authService
  }

setMessage(){
  if (this.auth.isLoggedIn){
    this.message="Vous etes connectés"
  }else{
    this.message ='Identifiant ou mot de passe incorrect'
  }
}
login(){
  this.message='Tentative de connexion en cours...';
  this.auth.login(this.name, this.password).subscribe((isLoggedIn : boolean)=>{
    this.setMessage()
    if(isLoggedIn){
      this.route.navigate(['/pokemon'])
    }else{
      this.password =''
      this.route.navigate(['/login'])
    }
    
  })
}

logout(){
  this.auth.logout;
  this.message='Vous etes déconnecté'
}
}
