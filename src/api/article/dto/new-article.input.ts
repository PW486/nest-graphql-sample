import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewArticleInput {
  @Field()
  @MaxLength(50)
  title: string;

  @Field()
  @MaxLength(50)
  text: string;
}
