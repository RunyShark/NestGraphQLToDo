import { Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver()
export class HelloWordResolver {
  @Query(() => String)
  helloWord(): string {
    return 'hello word';
  }
}
