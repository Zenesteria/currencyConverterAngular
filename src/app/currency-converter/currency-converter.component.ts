import { Component, OnInit } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { LineChartComponent } from '../line-chart/line-chart.component';
import CurrencyService from './currency.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CurrencyFormComponent } from '../currency-form/currency-form.component';
import { DatePipe } from '@angular/common';
import { currencyCodeDict } from '../conf/data';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [NgxSemanticModule, LineChartComponent, CurrencyFormComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss',
})
export class CurrencyConverterComponent implements OnInit {
  constructor(private CurrencyData: CurrencyService) {}

  datePipe = new DatePipe('UTC');
  targetLabel = '';
  baseLabel = '';
  formattedDate!: string;
  convertedAmount = 0;
  conversionRate!: number;
  isLoading = false;

  currencyForm!: FormGroup;
  updateForm({
    targetLabel,
    baseLabel,
    amount,
  }: {
    targetLabel: keyof typeof currencyCodeDict;
    baseLabel: keyof typeof currencyCodeDict;
    amount: number;
  }) {
    this.isLoading = true;

    const baseCode = currencyCodeDict[baseLabel];
    const targetCode = currencyCodeDict[targetLabel];
    console.log(targetCode, baseCode);
    this.CurrencyData.convert(baseCode, targetCode, amount).subscribe(
      (res: { conversion_rate: number; conversion_result: number }) => {
        this.isLoading = false;
        this.baseLabel = baseLabel;
        this.targetLabel = targetLabel;
        this.conversionRate = res.conversion_rate;
        this.convertedAmount = res.conversion_result;
        console.log(res);
      }
    );
  }
  convert() {}
  ngOnInit(): void {
    const today = new Date();
    this.currencyForm = new FormGroup({
      targetCode: new FormControl('NGN', [Validators.required]),
      baseCode: new FormControl('EUR', [Validators.required]),
      amout: new FormControl(1, [Validators.required]),
    });
    this.formattedDate = `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`;
  }
}
