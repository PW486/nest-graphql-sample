import { Module } from '@nestjs/common';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  providers: [ArticleService, ArticleResolver, DateScalar],
  exports: [ArticleService],
})
export class ArticleModule {}
