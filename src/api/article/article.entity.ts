import { Field, ID, ObjectType } from 'type-graphql';
// import { Column, Entity, ManyToOne, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
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
  public text: string;

  @Field()
  // @Column({ nullable: true })
  public photo?: string;

  // @ManyToOne(type => AccountEntity, { nullable: false })
  public account: AccountEntity;
}
