import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categoriaCamposForm: FormGroup;

  constructor(){
    this.categoriaCamposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })

  }

  salvar(){
    this.categoriaCamposForm.markAllAsTouched();

    if (this.categoriaCamposForm.valid){
      console.log('Valores Digitados', this.categoriaCamposForm.value);
      
    }

  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.categoriaCamposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];

  }

}
