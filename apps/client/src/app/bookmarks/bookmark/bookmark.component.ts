import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Bookmark, BookmarkGQL } from '../../../generated-types';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmark!: Bookmark;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookmarkGql: BookmarkGQL,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap(params => {
      return this.bookmarkGql.watch({ _id: params['id'] }).valueChanges;
    })
    ).subscribe(result => {
      this.bookmark = result.data.bookmark;
    });
  }

  onAdd() {
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark }
    });
  }
}
