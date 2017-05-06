import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import App from './App'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface(
    { uri: 'https://api.graph.cool/simple/v1/cj227dcizzdoo0164hyn8cef7'}
  ),
})

const store = createStore(
  combineReducers({
    apollo: client.reducer(),
    form: formReducer,
  }),
  {}, // initial state
  compose(
      applyMiddleware(client.middleware()),
      // If you are using the devToolsExtension, you can add it here also
      (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
)

//for material-ui
injectTapEventPlugin()

ReactDOM.render((
  <ApolloProvider store={store} client={client}>
      <App />
  </ApolloProvider>
),
  document.getElementById('root')
)
