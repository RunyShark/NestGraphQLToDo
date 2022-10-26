import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodosService } from './todos.service';
import { CreateTodoInput } from './dto/input/CreateTodoInput';

@Resolver()
export class TodosResolver {
  constructor(private readonly TodosService: TodosService) {}

  @Mutation(() => Todo, { name: 'CreateTodoInputs' })
  addToDo(
    @Args('CreateTodoInput')
    createTodoInput: CreateTodoInput,
  ): Todo {
    return this.TodosService.create(createTodoInput);
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
  deleteToDo() {
    // return this.todo;
  }
  @Query(() => String)
  updateToDo(
    @Args('id', { type: () => Int })
    id: number,
  ) {
    // return this.todo;
  }
}
