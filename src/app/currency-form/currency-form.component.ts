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
  @Input({ required: true }) isLoading!: boolean;
  @Output() formChanged = new EventEmitter();
  convert() {}
  ngOnInit(): void {
    // this.CurrencyData.fetchCurrenyData().subscribe((res) => console.log(res));
    this.currencyForm = new FormGroup({
      baseCode: new FormControl('', [Validators.required]),
      targetCode: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
  }

  emitLabel(value: { targetLabel: string; baseLabel: string; amount: number }) {
    this.formChanged.emit(value);
  }

  getErrorMessage(controlName: string, errorType: string) {
    if (
      this.currencyForm.get(controlName)?.invalid &&
      this.currencyForm.get(controlName)?.touched
    ) {
      if (this.currencyForm.get(controlName)?.errors?.[errorType]) {
        switch (errorType) {
          case 'required':
            return `Please Enter your ${controlName
              .charAt(0)
              .toUpperCase()}${controlName.slice(1)}`;
          default:
            return '';
        }
      }
    }
    return '';
  }

  onSubmit() {
    if (this.currencyForm.valid) {
      console.log(this.currencyForm.value);
      this.emitLabel({
        baseLabel: this.currencies.filter(
          (currency) => currency.value == this.currencyForm.value.baseCode
        )[0].text,
        targetLabel: this.currencies.filter(
          (currency) => currency.value == this.currencyForm.value.targetCode
        )[0].text,
        amount: this.currencyForm.value.amount,
      });
    }
  }
}
