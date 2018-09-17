import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  static urlIndexData = 'http://127.0.0.1:8080/xz_v1/data/product/index.php';
  static urlProductList = 'http://127.0.0.1:8080/xz_v1/data/product/list.php';
  static urlProductDetail = 'http://127.0.0.1:8080/xz_v1/data/product/details.php';

  constructor(private http: HttpClient) { }

  // 获取首页商品数据
  getIndexData() {
    // 返回一个Observable对象--服务器端请求是异步的
    return this.http.get(ProductService.urlIndexData);
  }

  // 获取商品列表
  getProductList(pno, kw) {
    return this.http.get(ProductService.urlProductList + `?pno=${pno}&kw=${kw}`);
    // 返回商品数据
  }

  // 得到商品详情
  getProductDetail(lid) {
    return this.http.get(ProductService.urlProductDetail + `?lid=${lid}`);
  }
}
