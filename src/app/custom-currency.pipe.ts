import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'customcurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

transform(
        value: number,
        currencyCode: string = 'EUR',
        display:
            | 'code'
            | 'symbol'
            | 'symbol-narrow'
            | string
            | boolean = 'symbol',
        digitsInfo: string = '1.2-2',
        locale: string = 'en-US',
    ): string {
      if (value == null) value = 0;
      var unformatedResult =      
        formatCurrency(
          value,
          locale,
          getCurrencySymbol(currencyCode, 'wide'),
          currencyCode,
          digitsInfo,
        );

        return [unformatedResult.slice(0, 1), " ", unformatedResult.slice(1)].join('');
    }
}