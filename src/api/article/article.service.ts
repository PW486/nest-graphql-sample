import { Injectable } from '@nestjs/common';
import { NewArticleInput } from './dto/new-article.input';
import { ArticlesArgs } from './dto/articles.args';
import { ArticleEntity } from './article.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ArticleService {
  private readonly articles: Partial<ArticleEntity>[] = [{ id: '1', title: 'ttte', text: '4444' }];

  async create(data: NewArticleInput): Promise<ArticleEntity> {
    let newArticle: Partial<ArticleEntity> = {};
    Object.assign(newArticle, data, { id: uuid() });
    this.articles.push(newArticle);
    return newArticle as ArticleEntity;
  }

  async findOneById(id: string): Promise<ArticleEntity> {
    return this.articles.find(article => article.id === id) as ArticleEntity;
  }

  async findAll(articleArgs: ArticlesArgs): Promise<ArticleEntity[]> {
    return this.articles as ArticleEntity[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
