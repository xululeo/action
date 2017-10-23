import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';

// 路由配置表：路由定义（route definitions）的数组
const appRoutes: Routes = [

  {path: 'one',component: ProductComponent ,children:[
    {path:'seller', component: CategoryComponent}
  ]},
  {path: 'two',component: CategoryComponent},
  {path: 'chat',component: CategoryComponent, outlet:'extra'}
];

// 路由模块：负责管理视图的切换
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
