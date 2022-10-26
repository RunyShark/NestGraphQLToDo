import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTodoInput } from './dto/input/CreateTodoInput';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodosService {
  private toDo: Todo[] = [
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

  finAll(): Todo[] {
    return this.toDo;
  }

  finById(id: number): Todo {
    const toDoById = this.toDo.find(({ id: idTodo }: Todo) => idTodo === id);
    if (!toDoById) throw new NotFoundException(`ToDo with id ${id} not found`);
    return toDoById;
  }

  create({ description }: CreateTodoInput): Todo {
    const todo = new Todo();
    todo.description = description;
    todo.done = false;
    todo.id = Math.max(...this.toDo.map(({ id }: Todo) => id), 0) + 1;
    this.toDo.push(todo);
    return todo;
  }

  update(id: number): Todo[] {
    const toDoById = this.finById(id);
    return this.toDo.map((to) => {
      if (to.id === toDoById.id) {
        to = toDoById;
      }
      return to;
    });
  }

  delete(id: number): void {
    this.finById(id);
    this.toDo = this.toDo.filter(({ id: idTodo }: Todo) => idTodo !== id);
  }
}
