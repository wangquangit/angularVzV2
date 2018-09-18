import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static urlRegister = 'http://127.0.0.1:8080/xz_v1/data/user/register.php';
  static urlLogin = 'http://127.0.0.1:8080/xz_v1/data/user/login.php';
  static urlLogout = 'http://127.0.0.1:8080/xz_v1/data/user/logout.php';
  static urlSessionData = 'http://127.0.0.1:8080/xz_v1/data/user/session_data.php';

  // 声明依赖于HttpClient服务-用于发起异步请求
  constructor(private http: HttpClient) { }

  register(uname, upwd, email, phone) {
    return this.http.post(
      UserService.urlRegister,
      // {uname, upwd, email, phone}, // 请求主体默认是JSON格式,php服务器不会把其中的数据解析到$_REQUEST数组
      `uname=${uname}&upwd=${upwd}&email=${email}&phone=${phone}`,
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
      // 取消客户端发起预取请求,直接发起正式请求,并告诉服务器请求主题的内容类型
      );
  }

  Login(uname, upwd) {
    return this.http.get(
      UserService.urlLogin + `?uname=${uname}&upwd=${upwd}`,
      // {headers: {'Content-Type': 'application/x-www-form-urlencoded'}},
      {withCredentials: true}
    );
  }

  LogOut() {}

  getSessionData() {
    return this.http.get(UserService.urlSessionData, {withCredentials: true});
    // withCredentials: true // 此次请求头部中携带当前客户端的头部信息(跨域请求时));
  }
}
