import { MaxLength, IsString } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class AddAccountInput {
  @Field()
  @IsString()
  @MaxLength(50)
  public email: string;

  @Field()
  @IsString()
  @MaxLength(50)
  public password: string;
}
