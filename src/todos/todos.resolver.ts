import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodosResolver {
  private todo = '';
  @Query(() => String)
  addToDo(
    @Args('toDo', { type: () => String })
    toDo: string,
  ): string {
    return toDo;
  }

  @Query(() => String)
  getToDo(): string {
    return this.todo;
  }

  @Query(() => String)
  getByIdToDo(
    @Args('id', { type: () => Int })
    id: number,
  ): string {
    return this.todo;
  }
  @Query(() => String)
  deleteToDo(): string {
    return this.todo;
  }
  @Query(() => String)
  updateToDo(
    @Args('id', { type: () => Int })
    id: number,
  ): string {
    return this.todo;
  }
}
