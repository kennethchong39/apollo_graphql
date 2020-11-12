import React from 'react';

export default function PostForm() {
  return (
    <form>
      <input type="text" placeholder="title" />
      <textarea type="text" placeholder="body" />
      <button>Submit</button>
    </form>
  );
}
