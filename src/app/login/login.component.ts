import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private uname = '';
  private upwd = '';
  private loginUname;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }
  doLogin() {
    this.service.Login(this.uname, this.upwd).subscribe((data: any) => {
      if (data.code === 200) {
        this.router.navigateByUrl('/');
        // this.loginUname = data.uname;
      } else {
        console.log('登陆失败' + data.msg);
        alert('用户名或密码错误');
      }
    }, err => {
      console.log('登陆失败:', err);
    });
  }
}
