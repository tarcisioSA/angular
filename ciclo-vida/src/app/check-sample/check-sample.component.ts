import {
    Component,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy {

  quantidade:number = 0
  constructor(){ }


  adicionar(){
    this.quantidade++
  }

  subtrair(){
    this.quantidade--
  }
  ngAfterViewChecked(): void {
      console.log('ViewChecked')
  }
  ngAfterContentInit(): void {
      console.log('AfterContentInit')
  }
  ngAfterContentChecked(): void {
      console.log('AfterContentChecked');

  }
  ngDoCheck(): void {
    console.log('DoCheck');

  }

  ngOnInit(): void {
    console.log('OnInit');


  }

  ngOnDestroy(): void {
    console.log('Destruido')
  }





}
