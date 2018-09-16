import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // 初始化钩子函数:当前组件正在初始化
    // 从当前激活的路由对象中读取路由参数
    // 路由参数是一个“可被关注/订阅”的对象
    this.router.params.subscribe((data) => {
      console.log('订阅的目标给出了新数据:', data);
    });
  }
}
