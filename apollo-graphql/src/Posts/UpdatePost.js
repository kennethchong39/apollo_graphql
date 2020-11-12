import React from 'react';
import PostForm from './PostForm';

import { gql, useMutation } from '@apollo/client';

export default function UpdatePost(props) {
  const [updatePost] = useMutation(UPDATE_POST);
  const handleUpdate = (input) => {
    updatePost({
      variables: { id: input.id, title: input.title, body: input.body },
    });
  };
  return <PostForm post={props.post} onSubmit={handleUpdate} />;
}

const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $title: String!, $body: String!) {
    updatePost(where: { id: $id }, data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;
