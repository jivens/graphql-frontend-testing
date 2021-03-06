import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList.js';
import AddBook from './components/AddBook.js';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
  	<ApolloProvider client={client}>
	    <div id="main">
	    	<h1>I love Roxie, Dash and Dot</h1>
			<BookList />
			<AddBook />
	    </div>
    </ApolloProvider>
  );
}

export default App;
