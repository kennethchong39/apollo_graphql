import React, { useState } from 'react';
import PostForm from './PostForm';

import { gql, useMutation } from '@apollo/client';

export default function NewPost() {
  //   const [title, setTitle] = useState('');
  //   const [body, setBody] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      variables: { title: formData.title, body: formData.body },
    });
    setFormData({
      title: '',
      body: '',
    });
  };

  const [addPost, { data }] = useMutation(NEW_POST);

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          onChange={handleInput}
          value={formData.title}
          placeholder="title"
        />
        <textarea
          name="body"
          type="text"
          onChange={handleInput}
          value={formData.body}
          placeholder="body"
        />
        <button>Submit</button>
      </form>
      {/* <PostForm /> */}
    </div>
  );
}

const NEW_POST = gql`
  mutation addPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;
