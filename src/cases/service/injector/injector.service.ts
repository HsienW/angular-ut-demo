import {Injectable, Injector} from '@angular/core';
import {CommonService} from '../common/common.service';

@Injectable({
  providedIn: 'root'
})
export class InjectorService {

  private commonService: CommonService;

  constructor(private injector: Injector) {
    this.commonService = this.injector.get(CommonService);
  }

  public getInjectorServiceValue() {
    return 'get injector value success';
  }

  public callCommonServiceGetValue() {
    return this.commonService.getCommonServiceValue();
  }

}
