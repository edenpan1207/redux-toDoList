import React, { PropTypes } from 'react'
import { setTodoFilter } from '../../redux/actions/todos'
import { connect } from 'react-redux'

const Filter = ({ active, children, onFilter }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onFilter()
       }}
    >
      {children}
    </a>
  )
}

Filter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onFilter: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  active: state.todos.todosFilter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFilter: () => dispatch(setTodoFilter(ownProps.filter))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter) 
