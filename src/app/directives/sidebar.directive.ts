import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '.sidebar-toggler'
})
export class SidebarDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    document.querySelector('body').classList.toggle('sidebar-hidden');
    document.querySelector('body').classList.toggle('sidebar-mobile-show');
  }
  

}