import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })

export class ConversorPipe implements PipeTransform {

  transform(value: string, por: string) {

    let value1 = parseInt(value);
    let value2 = parseInt(por);

    let result = "La multiplicacion: " + value1 + " x " + value2 + " = " + (value1 * value2);

    return result;

  }

}
