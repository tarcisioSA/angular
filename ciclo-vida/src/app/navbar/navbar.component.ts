import { Component, OnChanges, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() nome:string = ''
  constructor () {

    console.log('Construtor')

    }
  ngOnChanges(): void {
    console.log('OnChanges');
  }
    ngOnInit(): void{
      console.log('OnInit')

  }

}
