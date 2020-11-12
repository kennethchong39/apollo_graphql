import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { ApolloProvider } from '@apollo/react-hooks';

// import Display from './Display';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';

const defaultState = {
  isEditMode: false,
};

//  Connect our site to the GraphQL API
const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckhdk0tmls7ie01xte6jhcaa0/master',
  cache: new InMemoryCache(),
  clientState: {
    defaults: defaultState,
  },
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
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p> */}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <Link to={'/'}>
              <h1>GraphQL</h1>
            </Link>
          </header>

          <main>
            {/* <Link to={'/post/new'}>New Post</Link> */}
            {/* <NewPost /> */}

            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </main>
          {/* <Display /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
