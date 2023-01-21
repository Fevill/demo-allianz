import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Crud } from 'src/app/accounting-module/model/crud';
import { Theader } from './models/Theader';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

  @Input()
  headers!: Theader

  @Input()
  data!: any[]
  @Input()
  hasAction!: boolean;


  enumCtx = Crud;

  constructor(private router: Router) {

  }

  navigate(ctxMenu: Crud, data: any): void {
    console.log(data)
    switch (ctxMenu) {
      case Crud.COPY:
        this.router.navigate([this.router.url, 'create'], { state: { data: data, action: Crud.COPY } });
        break;
      case Crud.DELETE:
        this.router.navigate([this.router.url, 'delete'], { state: { data: data, action: Crud.DELETE } });
        break;
      case Crud.DISPLAY:
        this.router.navigate([this.router.url, 'display'], { state: { data: data, action: Crud.DISPLAY } });
        break;
      case Crud.UPDATE:
        this.router.navigate([this.router.url, 'update'], { state: { data: data, action: Crud.UPDATE } });
        break;
    }
  }

}
