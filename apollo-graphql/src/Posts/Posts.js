import React from 'react';

import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const POSTS_QUERY = gql`
  query allPosts {
    posts(stage: DRAFT) {
      id
      title
      body
    }
    # stagedPosts: posts(stage: DRAFT) {
    #   id
    #   title
    #   body
    # }
  }
`;

export default function Posts() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  return (
    <div>
      <ul>
        {data.posts.map((posts) => (
          <li key={posts.id}>
            <Link to={`/post/${posts.id}`}>{posts.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
