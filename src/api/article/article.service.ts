import { Injectable } from '@nestjs/common';
import { AddArticleInput } from './dto/add-article.input';
import { GetArticlesArgs } from './dto/get-articles.args';
import { ArticleEntity } from './article.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ArticleService {
  private readonly articles: Partial<ArticleEntity>[] = [{ id: '1', title: 'password', content: '486', accountId: '1' }];

  async create(data: AddArticleInput): Promise<ArticleEntity> {
    let newArticle: Partial<ArticleEntity> = {};
    Object.assign(newArticle, data, { id: uuid() });
    this.articles.push(newArticle);
    return newArticle as ArticleEntity;
  }

  async findOneById(id: string): Promise<ArticleEntity> {
    return this.articles.find(article => article.id === id) as ArticleEntity;
  }

  async findAll(articleArgs: GetArticlesArgs): Promise<ArticleEntity[]> {
    return this.articles as ArticleEntity[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
