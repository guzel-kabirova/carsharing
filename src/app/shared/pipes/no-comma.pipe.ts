import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'noComma',
})
export class NoCommaPipe implements PipeTransform {

  transform(value: string | null): string {
    if (value !== undefined && value !== null) {
      return value.toString().replace(/,/g, ' ');
    }
    return '';
  }
}
