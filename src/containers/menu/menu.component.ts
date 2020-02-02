import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  @Output() changePageKey = new EventEmitter<string>();

  changePage(pageKey) {
    this.changePageKey.emit(pageKey);
  }

}
