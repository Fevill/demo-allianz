import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NxIconRegistry } from '@aposin/ng-aquila/icon';
import { BUSINESS_UNIT } from '../constant/business-unit';
import { ICON_NAME } from '../constant/icon-name';
import { NAVIGATION_LINK } from '../constant/navigation-link';
import { SERVICES } from '../constant/services';

@Component({
  selector: 'ps-header',
  templateUrl: './ps-header.component.html',
  styleUrls: ['./ps-header.component.scss']
})
export class PsHeaderComponent {
  
  bu!:string;
  iconName!:string;
  isMenuOpen!:boolean;
  service!:string;
  navigationLink = NAVIGATION_LINK

  ngOnInit():void{
    this.service = SERVICES.AVALIS;
    this.iconName = ICON_NAME.ELLIPSIS
    this.bu = BUSINESS_UNIT.FRANCE
  }

  onMenuClicked():void{
    this.isMenuOpen = !this.isMenuOpen;
    this.iconName = this.isMenuOpen?ICON_NAME.ClOSE:ICON_NAME.ELLIPSIS;
  }

}
