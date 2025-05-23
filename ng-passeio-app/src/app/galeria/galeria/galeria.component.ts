import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; 
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{

  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[]=[];
  nomeFiltro: string = ''
  categoriaFiltro: string = ''

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ){}


  ngOnInit(): void {
    
    this.categoriaService.obterTodas()
    .subscribe(categorias => this.categoriasFiltro = categorias);

    this.lugarService.obterTodas()
    .subscribe(lugaresResposta => this.lugares = lugaresResposta);

  }

  getTotalEstrelas (lugar: Lugar): string{
    return '&#9733;' .repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao ||0));
  }

  filtrar(){
    console.log('Entrou em filtrar');
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
    .subscribe(resultado => this.lugares =resultado);

  }
}
