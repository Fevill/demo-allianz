import { Pipe, PipeTransform } from '@angular/core';
import { EnumType } from './models/enum-type';
import moment from 'moment';
import { Account } from 'src/app/accounting-module/model/account';
import { Tcolumn } from './models/Tcolumn';

@Pipe({
  name: 'cellFormatter'
})
export class CellFormatterPipe implements PipeTransform {

  transform(value: any, head: Tcolumn): any {
    switch (head.dataType) {

      case EnumType.DATE:
        return moment(value).format(head.dataFormater)
      case EnumType.ACCOUNT:
        let acc = value[head.label] as Account
        return `${acc.number} - ${acc.name}`
      case EnumType.ACCOUNT_SOLD:
        let [n0, n1] = head.label.split('.')
        let text = value?.[n0]?.[n1] as string
        if (text) {
          return `${text}`
        }
        return ``
      default:
        let defultText = value[head.label]
        if (defultText) {
          return `${defultText}`
        }
        return ``
    }
  }
}
