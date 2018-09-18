import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private details;  // 商品的详情
  private family;   // 商品所属型号信息
  // 产品详情页'/pdetail/lid',依赖于‘当前路由(ActivatedRoute)’服务对象 & (‘ProductService’商品服务)服务对象
  constructor(private router: ActivatedRoute, private service: ProductService) { }

  ngOnInit() {
    // 初始化钩子函数:当前组件正在初始化
    // 从当前激活的路由对象中读取路由参数并订阅:this.router.params.subscribe
    // 路由参数是一个“可被关注/订阅”的对象
    this.router.params.subscribe(data => {
      const lid = data.lid;
      this.service.getProductDetail(lid).subscribe((products: any) => {
        this.details = products.details;
        this.family = products.family;
      }, err => {
        console.log('失败', err);
      });
    });
  }
}
