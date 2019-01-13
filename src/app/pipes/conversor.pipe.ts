import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })

export class ConversorPipe implements PipeTransform {

  transform(value: string, por: string) {

    const value1 = parseInt(value);
    const value2 = parseInt(por);

    const result = 'La multiplicacion: ' + value1 + ' x ' + value2 + ' = ' + (value1 * value2);

    return result;

  }

}
