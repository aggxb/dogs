import React from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef();
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul className={`${styles.comments} ${props.single ? styles.single : ''}`} ref={commentsSection}>
        {comments.map(({ comment_ID, comment_author, comment_content }) => (
          <li key={comment_ID}>
            <b>{comment_author}: </b>
            <span>{comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single} />}
    </>
  );
};

export default PhotoComments;
