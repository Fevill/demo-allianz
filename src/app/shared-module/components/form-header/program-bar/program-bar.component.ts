import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'program-bar',
  templateUrl: './program-bar.component.html',
  styleUrls: ['./program-bar.component.scss']
})
export class ProgramBarComponent {

  constructor(private el: ElementRef){
    
  }

  ngAfterViewInit() {
    let btnElement = (<HTMLElement>this.el.nativeElement)
      .querySelector('.nx-expansion-panel__header-content');
    btnElement?.classList.add('ps-expansion-panel-header-content')

    // btnElement?.attributes.
    console.log(btnElement)
    btnElement?.setAttribute('_ngv6',"v6")
    
    console.log(btnElement?.attributes)

    let btnElement1 = (<HTMLElement>this.el.nativeElement)
    .querySelector('.ab');
  btnElement1?.classList.add('x')
  // btnElement?.attributes.
  console.log(btnElement1)
  btnElement1?.setAttribute('_ngv6',"v6")
  
  console.log(btnElement1?.attributes)

    // btnElement.addEventListener('click', () => {
    //   alert('Buton was clicked');
    // });
  }

}
