import { createSlice,nanoid } from "@reduxjs/toolkit"; //nanoid generates nothing but an id
//reducer is nothing but functionality,slice reducer ka bada version hai
export const orangeSlice = createSlice({
    name:'sonam',//name is an actual key in redux
    initialState:{ todos:[{
        id:1,
        text:"first todo"
    }]},
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload// ye actually action.payload.text hai but dono same name hai isliye .text nhi lagaya
            }
            state.todos.push(todo); //yaha pe state preserve rehti hai unlike contextapi isliye hame yaha spread operator ki zaroorat nhi hai 
        }, //ham reference bhi de sakte hai
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
        }
    }
})
export const{addTodo,removeTodo} = orangeSlice.actions
export default orangeSlice.reducer
//state se milta hai jo bhi current state hai
//action se milta hai jo bhi data hai