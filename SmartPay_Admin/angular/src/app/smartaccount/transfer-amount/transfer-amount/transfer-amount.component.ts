import { Component, EventEmitter, Injector, OnInit, Output } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { SmartAccountServiceServiceProxy, TransferPointDto, UserDto, UserDtoPagedResultDto, UserInfoDto, UserInfoDtoPagedResultDto, UserInfoServiceServiceProxy, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css']
})
export class TransferAmountComponent extends AppComponentBase 
implements OnInit {
  saving = false;
  Users : UserDto[];
  currentLoggedInUser : UserDto
  UsersInfo : UserInfoDto[];
  transfer = new TransferPointDto();
  isStudent = false;
  @Output() onSave = new EventEmitter<any>();

  constructor(injector: Injector,
    public bsModalRef: BsModalRef,
    private user : UserServiceProxy,
    private userinfo : UserInfoServiceServiceProxy,
    private smartAccount: SmartAccountServiceServiceProxy

    ) { 
      super(injector);
    }

  ngOnInit(): void {
    this.user.getAll("",true,0,1000).subscribe((result :UserDtoPagedResultDto ) =>{
      this.Users = result.items});
    this.userinfo.getAll("",0,1000).subscribe((result : UserInfoDtoPagedResultDto)=>{
      this.UsersInfo = result.items
    });

    this.user.getCurrentLoginUserClaimsAsyns().subscribe((result :UserDto ) =>{
      this.currentLoggedInUser = result
      });
  }

  OnValueChnage(event){
    if(event)
    {
      this.isStudent = true;
      this.bsModalRef.content.refresh();
    }
    else{
      this.isStudent = false;
      this.bsModalRef.content.refresh();
    }
    }

  save(): void {
    this.saving =true;
    this.transfer.soucrseAccId = this.currentLoggedInUser.id
  this.smartAccount.pointTransferToUserByAccountant(this.transfer).subscribe(()=>
  {
    this.notify.info(this.l('TransferSuccessfully'));
    this.bsModalRef.hide();
    this.onSave.emit();
  },
  ()=>{
    this.saving = false;
  });
  }
}
