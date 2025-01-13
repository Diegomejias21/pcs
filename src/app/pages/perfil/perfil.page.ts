import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarroService } from'src/app/core/services/carro.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage{

    registroForm: FormGroup;

    password: string = '';
    confirmPassword: string = '';
    avatarUrl: string = '';

    constructor(private carroService: CarroService, private router: Router, private fb: FormBuilder, private navCtrl: NavController) {
      this.registroForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmarPassword: ['', Validators.required],
      }, { validator: this.passwordMatchValidator });
    }
    ngOnInit() {
      this.generateRandomAvatar();
    }

    generateRandomAvatar() {
      this.avatarUrl = `https://avatars.dicebear.com/api/initials/${Math.random().toString(36).substring(7)}.svg`;
    }

   passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmarPassword = group.get('confirmarPassword')?.value;
    return password === confirmarPassword ? null : { notMatching: true };
  }

  irRegistro(){
    if(this.registroForm.valid){
      const {firstName, lastName, email, password} = this.registroForm.value;
      console.log('Registro: ',{ firstName, lastName, email, password});
      //llamar al servicio de registro (AuthService)
      //Redirreccionara a la pagina principal
      this.navCtrl.navigateForward('/pag');
    }
  }


    saveChanges() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      alert('Cambios guardados');
      // Lógica para guardar los cambios
    }

    onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => (this.avatarUrl = e.target?.result as string);
        reader.readAsDataURL(file);
      }
    }

    irModificar(){
      this.router.navigate(['/carro']);
    }

}