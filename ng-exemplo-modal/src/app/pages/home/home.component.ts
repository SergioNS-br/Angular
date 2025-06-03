import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { InfoUsuarioComponent } from '../../modal/info-usuario/info-usuario.component';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bsModalRef?: BsModalRef;
  nome: string = '';
  temperatura: string = '22º';

  constructor(
    private modalService: BsModalService){}

  abrirModal(){
    const initialState = {
      nomeUsuario: this.nome,
      temperatura: this.temperatura
    } 
    this.bsModalRef = this.modalService.show(InfoUsuarioComponent, { initialState });
  }

}
