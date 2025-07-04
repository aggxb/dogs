import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [total, setTotal] = React.useState(0);
  const [graph, setGraph] = React.useState([]);

  React.useEffect(() => {
    const graphData = data.map(({ title, acessos }) => {
      return {
        x: title,
        y: +acessos,
      };
    });

    setTotal(
      data
        .map(({ acessos }) => +acessos)
        .reduce((anterior, atual) => anterior + atual, 0),
    );

    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graphs} animeLeft`}>
      <div className={`${styles.graphItem} ${styles.total}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={[...graph]}
          innerRadius={50}
          padding={{
            top: 20,
            bottom: 20,
            left: 80,
            right: 80,
          }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar data={graph} alignment="start"></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
