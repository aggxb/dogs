import Image from '../Helper/Image';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
