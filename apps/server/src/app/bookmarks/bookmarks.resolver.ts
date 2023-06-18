import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../auth/current-user.decorator';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { User } from '../users/models/user.model';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkInput } from './dto/input/create-bookmark-input.dto';
import { Bookmark } from './models/bookmark.model';

@Resolver(() => Bookmark)
export class BookmarksResolver {
    constructor(private readonly bookmarksService: BookmarksService) { }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Bookmark)
    async createBookmark(
        @Args('createBookmarkData') createBookmarkData: CreateBookmarkInput,
        @CurrentUser() user: User
    ) {
        return this.bookmarksService.createBookmark(createBookmarkData, user._id);
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [Bookmark], { name: 'bookmarks' })
    async getBookmarks(
        @CurrentUser() user: User
    ) {
        return this.bookmarksService.getBookmarks(user._id);
    }
}
