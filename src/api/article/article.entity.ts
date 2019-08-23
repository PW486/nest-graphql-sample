import { Field, ID, ObjectType } from 'type-graphql';
// import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { AccountEntity } from '../account/account.entity';

@ObjectType()
// @Entity('article')
export class ArticleEntity {
  @Field(type => ID)
  // @PrimaryGeneratedColumn()
  public id: string;

  @Field()
  // @CreateDateColumn({ type: 'timestamptz' })
  public createdAt: Date;

  @Field()
  // @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt: Date;

  @Field()
  // @Column()
  public title: string;

  @Field()
  // @Column('text')
  public content: string;

  @Field()
  public accountId: string;

  @Field(type => AccountEntity)
  public account: AccountEntity;
}
