import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodosService } from './todos.service';
import { CreateTodoDTO } from './dto';

@Resolver()
export class TodosResolver {
  constructor(private readonly TodosService: TodosService) {}
  private todo = '';

  @Mutation(() => Todo, { name: 'CreateTodo' })
  addToDo(
    @Args('toDo', { type: () => CreateTodoDTO })
    toDo: CreateTodoDTO,
  ): Todo {
    return this.TodosService.create(Todo);
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
