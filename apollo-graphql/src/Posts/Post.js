import React from 'react';
import { gql, useQuery } from '@apollo/client';
import UpdatePost from './UpdatePost';

export default function Post(props) {
  const { match } = props;
  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: {
      id: match.params.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <section>
        <h1>{data.post.title}</h1>
      </section>
      <section>
        <h1>Edit Post</h1>
        <UpdatePost post={data.post} />
      </section>
    </div>
  );
}

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
