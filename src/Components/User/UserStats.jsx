import React from 'react';
import { STATS_GET } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    };
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<></>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
