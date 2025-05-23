import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service'; 
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit{
  lugarCamposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor( 
    private categoriaService: CategoriaService,
    private lugarService: LugarService){
    this.lugarCamposForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      categoria: new FormControl('',Validators.required),
      localizacao: new FormControl('',Validators.required),
      urlFoto: new FormControl('',Validators.required),
      avaliacao: new FormControl('',Validators.required)
    })
  }

  salvar(){
    this.lugarCamposForm.markAllAsTouched();

     if (this.lugarCamposForm.valid){
      console.log("valores: ", this.lugarCamposForm.value)
      this.lugarService
        .salvar(this.lugarCamposForm.value)
        .subscribe({
          next: lugar => {
            console.log('Salva com sucesso! ', lugar);
            this.lugarCamposForm.reset();
          },
          error: erro => console.error('Ocorreu erro: ', erro)
        });
    }

  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => {
        console.log('Categorias: ', listaCategorias)
        this.categorias = listaCategorias
      }
    })
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.lugarCamposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];

  }
}
