import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int, ID } from 'type-graphql';

@ArgsType()
export class ArticlesArgs {
  @Field(type => ID)
  accountId: string;
}
