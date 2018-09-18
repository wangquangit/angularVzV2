import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _uname = '';
  private unameMsg = '用户名在6-12位之间';
  private upwd = '';
  private upwdconfirm = '';
  private email = '';
  private phone = '';

  private unameMsgClass = 'msg-default';

  get uname() {
    return this._uname;
  }
  set uname(val) {
    if (val.length < 3) {
      this.unameMsg = '用户名长度太短了!';
      this.unameMsgClass = 'msg-error';
    } else if (val.length > 6) {
      this.unameMsg = '用户名合法';
      this.unameMsgClass = 'msg-success';
    } else if (val.length > 12) {
      this.unameMsg = '用户名长度太长了!';
      this.unameMsgClass = 'msg-error';
    }
  }

  // 依赖于UserService服务对象
  // 依赖于Router服务对象
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }
  doRegister() {
    // 执行用户注册
    this.service.register(this._uname, this.upwd, this.email, this.phone).subscribe((data: any) => {
      if (data.code === 200) {
        alert('注册成功!点击确定开始登陆');
        this.router.navigateByUrl('/login');
      } else {
        alert('注册失败,原因:' + data.msg);
      }
    }, err => {
      console.log('失败', err);
    });
  }
}
