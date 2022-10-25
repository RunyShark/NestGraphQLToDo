import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWordModule } from './hello-word/hello-word.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TodosModule } from './todos/todos.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // debug: false,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
    HelloWordModule,
    TodosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
