import { Module, forwardRef } from '@nestjs/common';
import { ArticleModule } from '../article/article.module';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';
import { DateScalar } from '../../common/scalars/date.scalar';

@Module({
  imports: [forwardRef(() => ArticleModule)],
  providers: [AccountService, AccountResolver, DateScalar],
  exports: [AccountService],
})
export class AccountModule {}
