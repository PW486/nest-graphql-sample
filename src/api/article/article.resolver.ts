import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';
import { ArticlesArgs } from './dto/articles.args';
import { NewArticleInput } from './dto/new-article.input';

@Resolver(of => ArticleEntity)
export class ArticleResolver {
  constructor(
    private readonly articleService: ArticleService
  ) {}

  @Query(returns => ArticleEntity, { name: 'article' })
  async getArticle(@Args('id') id: string): Promise<ArticleEntity> {
    const article = await this.articleService.findOneById(id);
    if (!article) {
      throw new NotFoundException(id);
    }
    return article;
  }

  @Query(returns => [ArticleEntity], { name: 'articles' })
  async getArticles(@Args() articlesArgs: ArticlesArgs): Promise<ArticleEntity[]> {
    return await this.articleService.findAll(articlesArgs);
  }

  @Mutation(returns => ArticleEntity)
  async addArticle(@Args('newArticleData') newArticleData: NewArticleInput): Promise<ArticleEntity> {
    const article = await this.articleService.create(newArticleData);
    return article;
  }

  @Mutation(returns => Boolean)
  async removeArticle(@Args('id') id: string) {
    return await this.articleService.remove(id);
  }
}
