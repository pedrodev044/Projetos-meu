import { Component } from '@angular/core';
import{ CalculadoraComponent} from "./calculadora/calculadora.component"
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basicos';
}
