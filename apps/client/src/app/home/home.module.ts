import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookmarksModule } from '../bookmarks/bookmarks.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, BookmarksModule],
})
export class HomeModule {}
