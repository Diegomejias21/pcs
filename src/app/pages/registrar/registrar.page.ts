import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: false,
})
export class RegistrarPage implements OnInit {
  
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {
    //crear el formulario de registro
    this.registroForm = this.fb.group({
      firstName: ['',  Validators.required],
      lastName: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
   }


   //validador para cofirmar contraseña

   passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmarPassword = group.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { notMatching: true };
  }

  //metodo para registrar al usuario

  irRegistro(){
    if(this.registroForm.valid){
      const {firstName, lastName, email, password} = this.registroForm.value;
      console.log('Registro: ',{ firstName, lastName, email, password});
      //llamar al servicio de registro (AuthService)
    }
  }

  //navegar a login

  irLogin(){
    this.navCtrl.navigateBack('/inicio');
  }
  ngOnInit() {
  }
}
