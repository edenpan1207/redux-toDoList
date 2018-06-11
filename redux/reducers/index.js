import todosList from './todos/todosList'
import todosFilter from './todos/todosFilter'

import { combineReducers } from 'redux'

export default combineReducers({
    todos: combineReducers({
        todosList,
        todosFilter
    })
})