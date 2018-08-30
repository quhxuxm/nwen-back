import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppUiModule} from './app-ui.module';
import {AppComponent} from './app.component';
import {CardColumnContainerComponent} from './component/card-column-container/card-column-container.component';
import {CardJumbotronContainerComponent} from './component/card-jumbotron-container/card-jumbotron-container.component';
import {CardComponent} from './component/card/card.component';
import {HomeComponent} from './component/home/home.component';
import {LogoComponent} from './component/logo/logo.component';
import {NavigatorComponent} from './component/navigator/navigator.component';
import {SeparatorComponent} from './component/separator/separator.component';
import {JumbotronComponent} from './component/jumbotron/jumbotron.component';
import {ArticleDetailComponent} from './component/article-detail/article-detail.component';
import {FooterComponent} from './component/footer/footer.component';
import {ArticleCoverComponent} from './component/article-detail/article-cover/article-cover.component';
import {ArticleContentComponent} from './component/article-detail/article-content/article-content.component';
import {CommentListContainerComponent} from './component/comment-list-container/comment-list-container.component';
import {CommentViewerComponent} from './component/comment-list-container/comment-viewer/comment-viewer.component';
import {CommentEditorComponent} from './component/comment-list-container/comment-editor/comment-editor.component';
import {AnthologyDetailComponent} from './component/anthology-detail/anthology-detail.component';
import {AnthologyCoverComponent} from './component/anthology-detail/anthology-cover/anthology-cover.component';
import {AuthorDetailComponent} from './component/author-detail/author-detail.component';
import {AuthorCoverComponent} from './component/author-detail/author-cover/author-cover.component';
import {RichTextEditorComponent} from './component/rich-text-editor/rich-text-editor.component';
import {ArticleCreateComponent} from './component/article-create/article-create.component';
import {RichTextEditorToolbarComponent} from './component/rich-text-editor/rich-text-editor-toolbar/rich-text-editor-toolbar.component';
import {RichTextEditorContentComponent} from './component/rich-text-editor/rich-text-editor-content/rich-text-editor-content.component';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {AnthologyCreateComponent} from './component/anthology-create/anthology-create.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LogoComponent,
    CardComponent,
    CardColumnContainerComponent,
    HomeComponent,
    CardJumbotronContainerComponent,
    SeparatorComponent,
    JumbotronComponent,
    ArticleDetailComponent,
    FooterComponent,
    ArticleCoverComponent,
    ArticleContentComponent,
    CommentListContainerComponent,
    CommentViewerComponent,
    CommentEditorComponent,
    AnthologyDetailComponent,
    AnthologyCoverComponent,
    AuthorDetailComponent,
    AuthorCoverComponent,
    RichTextEditorComponent,
    ArticleCreateComponent,
    RichTextEditorToolbarComponent,
    RichTextEditorContentComponent,
    RegisterComponent,
    LoginComponent,
    AnthologyCreateComponent,
    ProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}