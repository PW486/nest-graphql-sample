import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewAccountInput {
  @Field()
  @MaxLength(50)
  email: string;

  @Field()
  @MaxLength(50)
  password: string;
}
