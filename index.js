import {render} from 'react-dom'
import Todos from './components/Todos'
import store from './redux/store/config'
import React from 'react'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <Todos/>
  </Provider>,
  document.getElementById('root')
)