import React from 'react'
import ReactDOM from 'react-dom'
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

//for material-ui
injectTapEventPlugin()

ReactDOM.render((
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>
),
  document.getElementById('root')
)
