import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxSemanticModule} from 'ngx-semantic'
import { environment } from '../environments/environment.prod';
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
