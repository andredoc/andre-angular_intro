import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  template: `
    <a [href]="url" target="_blank" [title]="title || caption" alt="">{{ caption }}</a> 
  `,
  styles: [
  ]
})
export class LinkComponent {
  @Input() url= "";
  @Input() caption= "";
  @Input() title="";
}