import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private navCtrl: NavController) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
   }

   //metodo para iniciar sesion

  onLogin(){
    if(this.loginForm.valid){
      const {email, password} = this.loginForm.value;
      console.log('Login: ', email, password);
      //aqui se llama al Authservice para manejar la autenticacion
      //Redirreccionara a la pagina principal
      this.navCtrl.navigateForward('/pag');

    }
  }

  //navegar a la pagina de registro

  irRegistro(){
    this.navCtrl.navigateForward('/registrar');
  }

  //navegar a la pagina de recuperacion de contraseña
  irOlvido(){
    this.navCtrl.navigateForward('/olvido');
  }

  ngOnInit() {
  }

}
