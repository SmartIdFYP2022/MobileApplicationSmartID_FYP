import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { UserDto, UserDtoPagedResultDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css']
})
export class TransferAmountComponent extends AppComponentBase 
implements OnInit {
  saving = false;
  Users : UserDtoPagedResultDto
  userDto : UserDto
  @Output() onSave = new EventEmitter<any>();

  constructor(injector: Injector,
    public bsModalRef: BsModalRef,
    private user : UserServiceProxy
    ) { 
      super(injector);
    }

  ngOnInit(): void {
    // this.user.getAll(null,true,null,null).subscribe((result :UserDtoPagedResultDto ) =>{
    //   this.Users.items = result.items});
  }

  save(): void {}

}
