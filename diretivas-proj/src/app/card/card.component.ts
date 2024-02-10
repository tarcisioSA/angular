import { Component } from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgClass, NgStyle} from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgClass, NgStyle, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  item:string = ''
  listaCompras:string[] = []
  estilo:string = 'azul'
  menuType:string = 'superuser';
  corFundo:string = 'blue'
  corFonte:string = 'yellow'

  produtos:string[] = []



  constructor(){
    this.produtos = [
      'Mouse',
      'Teclado',
      'Mousepad',
      'cabo'
    ]
  }
        esconder:boolean = true

        ocultar(){
          this.esconder = !this.esconder
        }

        adicionar(){
          this.produtos.push('Tarcisio')
        }

        remover(index:number ){
          this.produtos.splice(index, 1)
        }

        trocarCor(){
          if(this.estilo === 'azul'){
            this.estilo = 'vermelho'
          }else{
            this.estilo = 'azul'
          }


        }

        adicionarLista(){
          this.listaCompras.push(this.item)
        }
}
