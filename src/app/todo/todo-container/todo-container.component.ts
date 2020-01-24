import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ManageTodoDialogComponent } from '../manage-todo-dialog/manage-todo-dialog.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {
  @ViewChild(TodoListComponent, { static: false }) todoListComponent: TodoListComponent;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ManageTodoDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.todoListComponent.fetchTodos();
    });
  }

}
