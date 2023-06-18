import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BookmarksComponent } from './bookmarks.component';
import { CreateBookmarkModule } from './create-bookmark/create-bookmark.module';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    CreateBookmarkModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule],
  exports: [BookmarksComponent]
})
export class BookmarksModule { }
