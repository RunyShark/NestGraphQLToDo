import { Args, Float, Int, Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class HelloWordResolver {
  @Query(() => String, { description: 'Hello word', name: 'Hello' })
  helloWord(): string {
    return 'hello word';
  }

  @Query(() => Float)
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomFromZeroTo' })
  getRandomForZeroTo(
    @Args('n', {
      type: () => Int,
      nullable: true,
    })
    n: number,
  ): number {
    return Math.floor(Math.random() * n);
  }
}
