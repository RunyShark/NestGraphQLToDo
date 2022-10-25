import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodosService } from './todos.service';

@Resolver()
export class TodosResolver {
  constructor(private readonly TodosService: TodosService) {}
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
    return this.TodosService.finAll();
  }

  @Query(() => Todo)
  getByIdToDo(
    @Args('id', { type: () => Int })
    id: number,
  ): Todo {
    return this.TodosService.finById(id);
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
