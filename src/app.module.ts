import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as GraphQLJSON from 'graphql-type-json';
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
      // resolvers: { JSON: GraphQLJSON },
    }),
  ],
})
export class AppModule {}
