import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
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

  create(toDo: Todo): Todo {
    this.toDo.push(toDo);
    return toDo;
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
