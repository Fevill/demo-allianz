import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Header } from 'src/app/shared-module/class/header';
import { ICONS, TOP_BAR_ACTION } from 'src/app/shared-module/constant/top-bar';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {

  @Input()
  header!:Header;
  iconItems = ICONS;
  @Output()
  onClick = new EventEmitter<TOP_BAR_ACTION>();


  constructor(){
    this.header = this.header??{
      title: "Title",
      iconItems: []
   }
  }

  ngOnInit():void{

  }

  hasIconItem(action:TOP_BAR_ACTION):boolean{
     return this.header.iconItems?.includes(action);
  }

  onButtonClick(action:TOP_BAR_ACTION):void{
    console.log(action)
    console.log(TOP_BAR_ACTION)
    this.onClick.emit(action)
  }

}
