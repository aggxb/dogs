import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../Api';
import Error from '../Helper/Error';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    const { url, options } = COMMENT_POST(id, { comment }, token);
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        className={styles.textarea}
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
