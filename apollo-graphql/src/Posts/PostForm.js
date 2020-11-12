import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import PropTypes from 'prop-types';

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  post: PropTypes.object,
};

PostForm.defaultProps = {
  post: {},
};

export default function PostForm(props) {
  //   propTypes = {
  //     onSubmit: PropTypes.func.isRequired,
  //   };
  const [formData, setFormData] = useState({
    id: props.post.id || '',
    title: props.post.title || '',
    body: props.post.body || '',
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
    props.onSubmit(formData);
    setFormData({
      title: '',
      body: '',
    });
  };

  return (
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
      <button className="button">Submit</button>
    </form>
  );
}
