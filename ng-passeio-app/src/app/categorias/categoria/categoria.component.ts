import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  categoriaCamposForm: FormGroup;

  constructor(
    private service: CategoriaService
  ){
    this.categoriaCamposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })

  }

  salvar(){
    this.categoriaCamposForm.markAllAsTouched();

    if (this.categoriaCamposForm.valid){
      this.service
        .salvar(this.categoriaCamposForm.value)
        .subscribe({
          next: categoria => {
            console.log('Salva com sucesso! ', categoria);
            this.categoriaCamposForm.reset();
          },
          error: erro => console.error('Ocorreu erro: ', erro)
        });
    }

  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.categoriaCamposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];

  }

}
