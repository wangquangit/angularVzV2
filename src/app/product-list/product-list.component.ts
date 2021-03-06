import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

// 声明index.html中引入的全局js中定义的全局变量
declare var $;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private kw = '';     // 搜索关键字
  private pager: any = {};  // 商品分页:any为定义任意类型

  // 引入服务对象
  constructor(private router: ActivatedRoute, private service: ProductService) {}

  // 初始化生命周期
  ngOnInit() {
    // subscribe:订阅
    this.router.params.subscribe(data => {
      this.kw = data.kw ? data.kw : ''; // (三目运算)判断用户是否有输入,如果有则搜索用户输入的关键字,否则搜索全部
      this.loadPager(1); // 初始化完成,加载第一页数据
    });
  }

  loadPager(pno) {
    // 按指定页号加载数据
    this.service.getProductList(pno, this.kw).subscribe(data => {
      this.pager = data; // 组件从服务获取到数据
      // 创建分页条

      $('.pager').createPage({
        pageCount: this.pager.pageCount,
        current: this.pager.pno,
        backFn: (p) => {
          this.loadPager(p);
        }
      });
    }, err => {
      console.log('失败', err);
    }); // 调用服务对象的数据
  }
}
