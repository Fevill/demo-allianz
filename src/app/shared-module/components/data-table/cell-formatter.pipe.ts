import { Pipe, PipeTransform } from '@angular/core';
import { EnumType } from './models/enum-type';
import { Theader } from './models/Theader';
import moment from 'moment';
import { Account } from 'src/app/accounting-module/model/account';

@Pipe({
  name: 'cellFormatter'
})
export class CellFormatterPipe implements PipeTransform {

  transform(value: any, head: Theader): any {
    switch (head.dataType) {
      
      case EnumType.DATE:
        return moment(value).format(head.dataFormater)
      case EnumType.ACCOUNT:
        let acc = value as Account
        return `${acc.number} - ${acc.name}`
      default:
        return value;
    }
  }
}
