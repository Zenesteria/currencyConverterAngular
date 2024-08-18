import { Component } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { LineChartComponent } from '../line-chart/line-chart.component';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [NgxSemanticModule, LineChartComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent {
  currencies = [
    {
      text: 'United States Dollar',
      value: 'USD',
    },
    {
      text: 'European Euro',
      value: 'EUR',
    },
    {
      text: 'British Pound',
      value: 'GBP',
    },
    {
      text: 'Japanese Yen',
      value: 'JPY',
    },
    {
      text: 'Chinese Renminbi',
      value: 'RMB',
    },
    {
      text: 'Canadian Dollar',
      value: 'CAD',
    },
    {
      text: 'Australian Dollar',
      value: 'AUD',
    },
    {
      text: 'Swiss Franc',
      value: 'CHF',
    },
    {
      text: 'Indian Rupee',
      value: 'INR',
    },
    {
      text: 'Singapore Dollar',
      value: 'SGD',
    },
  ];
}
