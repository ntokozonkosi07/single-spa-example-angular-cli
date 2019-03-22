import { Component } from '@angular/core';

declare const location: any;

@Component({
  selector: 'menu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toogleHelpUrl: string;

  constructor() {

  }

  getHelpUrl(): string {
    let helpUrl;
    const match = location.href.match(/help=(open|close)/);
    const isOpen = match && match[1] === 'open';
    if (isOpen) {
      helpUrl = location.href.replace('help=open', 'help=close');
    } else {
      if (match) {
        helpUrl = location.href.replace('help=close', 'help=open');
      } else if (location.href.match(/\?/)) {
        helpUrl = `${location.href}&help=open`;
      } else {
        helpUrl = `${location.href}?help=open`;
      }
    }
    return helpUrl;
  }
}
