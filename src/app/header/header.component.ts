import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private kw = ''; // 搜索
  private loginUname; // 意已经登陆了的用户名

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    // 加载当前用户的登陆信息
    this.service.getSessionData().subscribe(
      (data: any) => {
        this.loginUname = data.uname;
      },
      err => {
        console.log('获取会话数据失败:', err);
      },
    );
  }

  doSearch() {
    // 搜索按钮监听函数
      this.router.navigateByUrl('/plist/' + this.kw);
  }
}
