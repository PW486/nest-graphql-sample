import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AccountModule } from './api/account/account.module';
// import { ConfigModule } from './config/config.module';
import { ArticleModule } from './api/article/article.module';

@Module({
  imports: [
    // ConfigModule,
    AccountModule,
    ArticleModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
