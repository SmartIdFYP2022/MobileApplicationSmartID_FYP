import { Component, Injector, OnInit } from '@angular/core';
import { TransferAmountComponent } from '@app/smartaccount/transfer-amount/transfer-amount/transfer-amount.component';
import { AppComponentBase } from '@shared/app-component-base';
import { SmartAccountDto, SmartAccountServiceServiceProxy, UserDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {PagedListingComponentBase} from 'shared/paged-listing-component-base';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent extends AppComponentBase {
dto:SmartAccountDto
UserDto : UserDto
isAddAmountButtonDisplay : boolean

  constructor(    injector: Injector,
    private abc:SmartAccountServiceServiceProxy,
    private userclaims : UserServiceProxy,
    private _modalService: BsModalService
) {
  super(injector);
   }

  ngOnInit(): void {
this.userclaims.getCurrentLoginUserClaimsAsyns().subscribe((result :UserDto ) =>{
this.UserDto = result
if(this.UserDto.emailAddress == "admin@defaulttenant.com")
{
  this.isAddAmountButtonDisplay=true;
}
});}


AddAmount(): void {
  this.showAddAmountDialog();
}

private showAddAmountDialog(): void {
  let addAmountDialog: BsModalRef;
    addAmountDialog = this._modalService.show(
      TransferAmountComponent,
      {
        class: 'modal-lg',
      }
    );
    addAmountDialog.content.onSave.subscribe(() => {
    addAmountDialog.content.refresh();
  });
}
  
}
