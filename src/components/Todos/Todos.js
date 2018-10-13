import React, { Component } from 'react';
import { Card, IconButton, Icon, InputBase } from '@material-ui/core';
import './Todos.scss';
import Title from './Title/Title';
import TodoList from './TodoList/TodoList';
import Filter from './Filter/Filter';

export default class Todos extends Component{

    constructor() {
        super();

        this.state = {
            selectedFilter: "all",
            todoList: [
            ],
            todo: ""
        }
    }

    handleInputChange(e) {
        this.setState({ todo: e.target.value }); // E = evento de onChange. Target = Elemento afectado por ese evento, Value = Valor cambiado de dicho elemento
    }

    handleAddTodo() {
        if (!this.state.todo.length) return;
        this.setState({ // Se utiliza setState, porque no se puede mutar state directamente
            todoList: this.state.todoList.concat({ // Se usa una concatenación, para tener un nuevo arreglo (valores pasados + valor nuevo)
                tarea: this.state.todo,
                finalizado: false 
            }),
            todo: ""
        });
    }

    handleStatusChange = (e, index) => {
        let arregloFinal = this.state.todoList; // Extraigo todo el arreglo de todoList
        arregloFinal[index].finalizado = e.target.checked; // Cambiar el status de finalizado en la posicion deseada

        this.setState({ todoList: arregloFinal }); // Cambio mi estado de TodoList con la nueva referencia
    }

    handleFilterChange = (filter) => {
        this.setState({selectedFilter: filter})
    }

    render() {
        let faltan = this.state.todoList.filter(todo => {
            return todo.finalizado === false;
        }).length;

        let filteredTodoList = [];

        switch (this.state.selectedFilter) {
            case 'pending':
                filteredTodoList = this.state.todoList.filter(todo => !todo.finalizado);
                break;
            case 'completed':
                filteredTodoList = this.state.todoList.filter(todo => todo.finalizado);
                break;
            default: {
                filteredTodoList = this.state.todoList;
            }
        }
        return (
            <div className="todos-container">
                <Title text="Lista de tareas"></Title> {/* Componente funcional (stateless) con propiedad 'text' */}

                <Card className="todos-card">
                    <div className="input-container">
                        <IconButton>
                            <Icon>arrow_drop_down</Icon>
                        </IconButton>
                        <InputBase value={this.state.todo} onChange={(e) => this.handleInputChange(e)} className="todo-input" fullWidth={true} placeholder="¿Qué tarea vas a realizar?"></InputBase>

                        <IconButton onClick={()=>this.handleAddTodo()}>
                            <Icon>add</Icon>
                        </IconButton>
                    </div>

                    <TodoList statusChange={this.handleStatusChange} list={filteredTodoList}></TodoList>  {/* Se manda como propiedad, el arreglo de tareas dentro de el estado de este componente */}

                    <Filter filterChange={this.handleFilterChange} missing={faltan}></Filter>
                </Card>
            </div>
        )
    }
}