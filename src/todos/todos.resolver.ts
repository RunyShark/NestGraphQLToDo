import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';

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

  @Query(() => [Todo])
  getAllToDo(): Todo[] {
    return [
      {
        id: 1,
        description: 'sleep1',
        done: false,
      },
      {
        id: 2,
        description: 'sleep2',
        done: false,
      },
    ];
  }

  @Query(() => String, { name: 'todos' })
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
