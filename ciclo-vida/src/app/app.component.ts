import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, CheckSampleComponent, NgIf]
})
export class AppComponent {
  title = 'ciclo-vida';
  isAliveCheckSample:boolean = true

  destruir():void{
    this.isAliveCheckSample = !this.isAliveCheckSample
  }
}
