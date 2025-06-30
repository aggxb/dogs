import React from 'react';
import styles from './FeedPhotos.module.css';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../Helper/Error';
import { PHOTOS_GET } from '../../Api';
import Loading from '../Helper/Loading';

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedPhotos;
