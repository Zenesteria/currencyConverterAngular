import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxSemanticModule} from 'ngx-semantic'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSemanticModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'currency-converter';
}
