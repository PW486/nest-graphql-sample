import { IsOptional, IsString } from 'class-validator';
import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
export class GetArticlesArgs {
  @Field(type => ID)
  @IsOptional()
  @IsString()
  public accountId?: string;
}
