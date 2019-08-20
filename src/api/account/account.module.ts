import { Module } from '@nestjs/common';
import { ArticleModule } from '../article/article.module';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  imports: [ArticleModule],
  providers: [AccountService, AccountResolver, DateScalar],
})
export class AccountModule {}
