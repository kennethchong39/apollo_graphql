import React from 'react';

import { gql, useQuery } from '@apollo/client';

const POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      title
      body
    }
  }
`;

function Display() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  return (
    <div>
      {data.posts.map((posts, index) => (
        <h1 key={index}>{posts.title}</h1>
      ))}
    </div>
  );
}

export default Display;
