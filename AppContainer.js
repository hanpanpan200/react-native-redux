import { createStore } from 'redux';
import { connect } from 'react-redux';
import App from './App'

function mapStateToProps(state, ownProps) {
  return { state: state }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    incrementAction: () => {
      dispatch({type: "INCREMENT"})
    },
    decrementAction: () => {
      dispatch({type: "DECREMENT"})
    }
  }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
