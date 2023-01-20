import { Component, Input } from '@angular/core';
import { HeaderTab } from '../../class/header-tab';

@Component({
  selector: 'header-tab',
  templateUrl: './header-tab.component.html',
  styleUrls: ['./header-tab.component.scss']
})
export class HeaderTabComponent {
  @Input()
  tabs!:HeaderTab[]
}
