import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './component/about/about.component';
import {AnthologyCreateComponent} from './component/anthology-create/anthology-create.component';
import {AnthologyDetailComponent} from './component/anthology-detail/anthology-detail.component';
import {ArticleCreateComponent} from './component/article-create/article-create.component';
import {ArticleDetailComponent} from './component/article-detail/article-detail.component';
import {AuthorDetailComponent} from './component/author-detail/author-detail.component';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {ProfileComponent} from './component/profile/profile.component';
import {RegisterComponent} from './component/register/register.component';
import {SecurityGuard} from './security/security.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'article/detail/:id',
    component: ArticleDetailComponent
  },
  {
    path: 'article/create',
    component: ArticleCreateComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: 'anthology/detail/:id',
    component: AnthologyDetailComponent
  },
  {
    path: 'anthology/create',
    component: AnthologyCreateComponent
  },
  {
    path: 'author/detail/:id',
    component: AuthorDetailComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
