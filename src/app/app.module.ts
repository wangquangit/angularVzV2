import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { UserCenterComponent } from './user-center/user-center.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { SecurityManagementComponent } from './security-management/security-management.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SlicesStrPipe } from './slices-str.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const router: Routes = [
  {path: '', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'plist', component: ProductListComponent},
  {path: 'plist/:kw', component: ProductListComponent},
  {path: 'pdetail/:lid', component: ProductDetailComponent},
  {path: 'ucenter', component: UserCenterComponent, children: [
    {path: '', component: MyInfoComponent},
    {path: 'myinfo', component: MyInfoComponent},
    {path: 'securitymanagement', component: SecurityManagementComponent},
  ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    NotFoundComponent,
    UserCenterComponent,
    MyInfoComponent,
    SecurityManagementComponent,
    HeaderComponent,
    FooterComponent,
    SlicesStrPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
