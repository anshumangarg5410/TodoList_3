import {createSlice, nanoid} from '@redusjs./toolkit';

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        editTodo: (state, action) => {
            hello 1 
            hello 2
            okk 
        }

    }

}) 

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

