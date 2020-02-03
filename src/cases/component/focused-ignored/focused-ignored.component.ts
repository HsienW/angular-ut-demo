import {Component} from '@angular/core';

@Component({
  selector: 'app-focused-ignored',
  templateUrl: './focused-ignored.component.html',
  styleUrls: ['./focused-ignored.component.css']
})

export class FocusedIgnoredComponent {

  public callFocusedFunction() {
    return 'Current testing only show focused';
  }

  public callIgnoredFunction() {
    return 'Current testing have been Ignored';
  }

}
