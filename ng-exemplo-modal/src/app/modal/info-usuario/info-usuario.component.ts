/* 
NECESSÁRIO: 
npm install bootstrap
npm install ngx-bootstrap --save

Incluir o bootstrap em styles no arquivo angular.json
 "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],

Incluir no arquivo app.config.ts o provider BsModalService
*/
import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'; 

@Component({
  selector: 'app-info-usuario',
  imports: [],
  templateUrl: './info-usuario.component.html',
  styleUrl: './info-usuario.component.css'
})
export class InfoUsuarioComponent {
  nomeUsuario?: string;
  temperatura?: string;

  constructor(public bsModalRef: BsModalRef){}

  fecharModal(){
    this.bsModalRef.hide();
  }

}
