import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private product;
  // 产品详情页,依赖于‘当前路由(ActivatedRoute)’服务对象 & (‘ProductService’商品服务)服务对象
  constructor(private router: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    // 初始化钩子函数:当前组件正在初始化
    // 从当前激活的路由对象中读取路由参数
    // 路由参数是一个“可被关注/订阅”的对象
    this.router.params.subscribe(data => {
      this.product = this.service.getProductDetail(data.lid);
    });
  }
}
