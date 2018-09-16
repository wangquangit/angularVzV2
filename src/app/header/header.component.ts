import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private kw = ''; // 搜索

  constructor(private router: Router) { }

  ngOnInit() {
  }

  doSearch() {
    // 搜索按钮监听函数
    // if (this.kw) {
      // 如果输入框有值,则跳转到产品列表,并携带参数
      this.router.navigateByUrl('/plist/' + this.kw);
  }
}
