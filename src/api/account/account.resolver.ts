import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { NewAccountInput } from './dto/new-account.input';
import { AccountsArgs } from './dto/accounts.args';
import { AccountEntity } from './account.entity';
import { AccountService } from './account.service';
import { ArticleService } from '../article/article.service';
import { ArticleEntity } from '../article/article.entity';

@Resolver(of => AccountEntity)
export class AccountResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly articleService: ArticleService,
  ) {}

  @Query(returns => AccountEntity, { name: 'account' })
  async getAccount(@Args('id') id: string): Promise<AccountEntity> {
    const account = await this.accountService.findOneById(id);
    if (!account) {
      throw new NotFoundException(id);
    }
    return account;
  }

  @Query(returns => [AccountEntity], { name: 'accounts' })
  async getAccounts(@Args() accountsArgs: AccountsArgs): Promise<AccountEntity[]> {
    return await this.accountService.findAll(accountsArgs);
  }

  @Mutation(returns => AccountEntity)
  async addAccount(@Args('newAccountData') newAccountData: NewAccountInput): Promise<AccountEntity> {
    const account = await this.accountService.create(newAccountData);
    return account;
  }

  @Mutation(returns => Boolean)
  async removeAccount(@Args('id') id: string) {
    return await this.accountService.remove(id);
  }

  @ResolveProperty('articles', () => [ArticleEntity])
  async getArticles(@Parent() account: AccountEntity): Promise<ArticleEntity[]> {
    const { id } = account;
    return await this.articleService.findAll({ accountId: id });
  }
}
