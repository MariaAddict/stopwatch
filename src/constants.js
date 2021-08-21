import React from "react";
import PropTypes from 'prop-types';


const createStore = (reducer, initialState) => {
  let currentState = initialState
  const listeners = []

  const getState = () => currentState

  const dispatch = action => {
      currentState = reducer(currentState, action)
      listeners.forEach(listener => listener())
}

  const subscribe = listener => listeners.push(listener)

  return { getState, dispatch, subscribe }
}



const connect = (mapStateToProps, mapDispatchToProps) =>
  Component => {
      class WrappedComponent extends React.Component {
          render() {
              return (
                  <Component
                      {...this.props}
                      {...mapStateToProps(this.context.store.getState(), this.props)}
                      {...mapDispatchToProps(this.context.store.dispatch)}
                  />
              )
          }

          //подписка должна происходить при монтировании, а не при обновлении
          componentDidMount() {
              this.context.store.subscribe(this.handleChange)
          }

          handleChange = () => {
              this.forceUpdate()
          }
      }

      WrappedComponent.contextTypes = {
          store: PropTypes.object,
      }

      return WrappedComponent
  }

export {createStore, connect};