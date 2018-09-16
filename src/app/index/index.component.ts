import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

// 声明前面的全局js文件已经声明过的全局变量
declare var $;
declare var jQuery;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private indexData; // 试图中需要呈现的数据

  // 注入RouterModule提供了Router服务对象
  // 注入ProductService提供商品数据
  constructor(private router: Router, private service: ProductService) { }

  ngOnInit() {
    // 这是一个组件声明周期钩子:初始化完成
    this.service.getIndexData().subscribe(
    data => {
      console.log('成功', data);
      this.indexData = data; // 组件从服务获取数据
      // 模型数据修改,NG监视到了改变,修改了DOM后启用轮播广告

      // 在下一次事件循环队列开始执行时,才启用轮播
      setTimeout(() => {
        $('.ck-slide').ckSlide({
          autoPlay: true, // 默认为不自动播放，需要时请以此设置
          dir: 'x', // 默认效果淡隐淡出，x为水平移动，y 为垂直滚动
          interval: 3000 // 默认间隔2000毫秒
        });
      }, 0);
      // 重点,难点:事件循环队列

    }, err => {
      console.log('失败', err);
    });
  }
}
