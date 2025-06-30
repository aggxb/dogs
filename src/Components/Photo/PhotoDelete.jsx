import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../Api';

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const token = localStorage.getItem('token');

      console.log(token);

      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);

      if (response.ok) location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
