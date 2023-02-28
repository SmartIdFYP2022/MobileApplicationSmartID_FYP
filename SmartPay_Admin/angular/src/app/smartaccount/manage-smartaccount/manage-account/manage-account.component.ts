import { Component, OnInit } from '@angular/core';
import { SmartAccountDto, SmartAccountServiceServiceProxy, UserDto, UserServiceProxy } from '@shared/service-proxies/service-proxies';
import { result } from 'lodash-es';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
dto:SmartAccountDto
UserDto : UserDto
isAddAmountButtonDisplay : boolean
  constructor(private abc:SmartAccountServiceServiceProxy,private userclaims : UserServiceProxy) {
   }

  ngOnInit(): void {
this.userclaims.getCurrentLoginUserClaimsAsyns().subscribe((result :UserDto ) =>{
this.UserDto = result
if(this.UserDto.emailAddress == "admin@defaulttenant.com")
{
  this.isAddAmountButtonDisplay=true;
}
});
  }

}
