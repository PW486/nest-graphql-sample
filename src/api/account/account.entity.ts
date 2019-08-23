import { Field, ID, ObjectType } from 'type-graphql';
import { ArticleEntity } from 'src/api/article/article.entity';
// import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
// @Entity('account')
export class AccountEntity {
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
  // @Column({ type: 'text', unique: true })
  public email: string;

  @Field()
  // @Column('text')
  public password: string;

  @Field(type => [ArticleEntity])
  public articles: ArticleEntity[];
}
