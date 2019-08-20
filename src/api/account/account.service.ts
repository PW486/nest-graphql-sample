import { Injectable } from '@nestjs/common';
import { NewAccountInput } from './dto/new-account.input';
import { AccountsArgs } from './dto/accounts.args';
import { AccountEntity } from './account.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AccountService {
  private readonly accounts: Partial<AccountEntity>[] = [{ id: '1', email: 'qwe@qwe.qwe', password: '486' }];

  async create(data: NewAccountInput): Promise<AccountEntity> {
    let newAccount: Partial<AccountEntity> = {};
    Object.assign(newAccount, data, { id: uuid() });
    this.accounts.push(newAccount);
    return newAccount as AccountEntity;
  }

  async findOneById(id: string): Promise<AccountEntity> {
    return this.accounts.find(account => account.id === id) as AccountEntity;
  }

  async findAll(accountArgs: AccountsArgs): Promise<AccountEntity[]> {
    return this.accounts as AccountEntity[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
