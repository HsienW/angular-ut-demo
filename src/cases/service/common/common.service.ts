import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public getCommonServiceValue() {
    return 'get common value success';
  }
}
