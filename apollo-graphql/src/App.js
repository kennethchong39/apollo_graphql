import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckhdk0tmls7ie01xte6jhcaa0/master',
  cache: new InMemoryCache(),
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

// to take data out
client
  .query({
    query: testQuery,
  })
  .then((res) => console.log(res));

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
      </div>
    </ApolloProvider>
  );
}

export default App;
