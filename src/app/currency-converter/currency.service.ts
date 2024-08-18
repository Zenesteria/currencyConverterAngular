import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class CurrencyService {
  constructor(private http: HttpClient) {}
  private readonly api_key = process.env['EX_API_KEY'];
  currencyCodeDict = {
    'United States Dollar': 'USD',
    'European Euro': 'EUR',
    'British Pound': 'GBP',
    'Japanese Yen': 'JPY',
    'Nigerian Naira': 'NGN',
  };

  currencyHistory(
    baseCode: string,
    targetCode: string,
    day: number
  ): Observable<any> {
    let today = new Date();
    let aYearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
    const endpoint = `https://v6.exchangerate-api.com/v6/${
      this.api_key
    }/history/${baseCode}/${aYearAgo.getFullYear()}/${aYearAgo.getMonth()}/${day}`;
    return this.http.get(endpoint);

    // subscribe((res) => {
    //       let data: any = res;
    //       dataset.push(data['conversion_rates'][targetCode]);
    //     });
  }

  convert(
    base_code: string,
    target_code: string,
    amount: number
  ): Observable<any> {
    return this.http.get(
      `https://v6.exchangerate-api.com/v6/${this.api_key}/pair/${base_code}/${target_code}/${amount}`
    );
  }
}
