import { Injectable } from '@nestjs/common';
import { AddAccountInput } from './dto/add-account.input';
import { GetAccountsArgs } from './dto/get-accounts.args';
import { AccountEntity } from './account.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AccountService {
  private readonly accounts: Partial<AccountEntity>[] = [{ id: '1', email: 'qwe@qwe.qwe', password: '486' }];

  async create(data: AddAccountInput): Promise<AccountEntity> {
    let newAccount: Partial<AccountEntity> = {};
    Object.assign(newAccount, data, { id: uuid() });
    this.accounts.push(newAccount);
    return newAccount as AccountEntity;
  }

  async findOneById(id: string): Promise<AccountEntity> {
    return this.accounts.find(account => account.id === id) as AccountEntity;
  }

  async findAll(args: GetAccountsArgs): Promise<AccountEntity[]> {
    return this.accounts as AccountEntity[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
