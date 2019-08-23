import { Module, forwardRef } from '@nestjs/common';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { DateScalar } from '../../common/scalars/date.scalar';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [forwardRef(()=> AccountModule)],
  providers: [ArticleService, ArticleResolver, DateScalar],
  exports: [ArticleService],
})
export class ArticleModule {}
