import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSemanticModule } from 'ngx-semantic';

@Component({
  selector: 'app-currency-form',
  standalone: true,
  imports: [NgxSemanticModule, ReactiveFormsModule],
  templateUrl: './currency-form.component.html',
  styleUrl: './currency-form.component.scss',
})
export class CurrencyFormComponent {
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
      text: 'Nigerian Naira',
      value: 'NGN',
    },
  ];
  currencyForm!: FormGroup;
  @Input({ required: true }) convertedAmount!: number;
  @Input({required:true}) isLoading!:boolean;
  @Output() formChanged = new EventEmitter();
  convert() {}
  ngOnInit(): void {
    // this.CurrencyData.fetchCurrenyData().subscribe((res) => console.log(res));
    this.currencyForm = new FormGroup({
      baseCode: new FormControl('', [Validators.required]),
      targetCode: new FormControl('', [Validators.required]),
      amount: new FormControl(1, [Validators.required]),
    });
  }

  emitLabel(value: { targetLabel: string; baseLabel: string, amount:number }) {
    this.formChanged.emit(value);
  }

  onSubmit() {
    console.log(this.currencyForm.value);
    this.emitLabel({
      baseLabel: this.currencies.filter(
        (currency) => currency.value == this.currencyForm.value.baseCode
      )[0].text,
      targetLabel: this.currencies.filter(
        (currency) => currency.value == this.currencyForm.value.targetCode
      )[0].text,
      amount:this.currencyForm.value.amount
    });
  }
}
