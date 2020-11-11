import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { ApolloProvider } from '@apollo/react-hooks';

import Display from './Display';

//  Connect our site to the GraphQL API
const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckhdk0tmls7ie01xte6jhcaa0/master',
  cache: new InMemoryCache(),
});

// Writing out query
// const POSTS_QUERY = gql`
//   {
//     posts {
//       id
//       title
//       body
//     }
//   }
// `;

// to take data out
// client
//   .query({
//     query: POSTS_QUERY,
//   })
//   .then((res) => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Display />
      </div>
    </ApolloProvider>
  );
}

export default App;
