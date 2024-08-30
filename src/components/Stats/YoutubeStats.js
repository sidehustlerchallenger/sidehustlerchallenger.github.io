import React from 'react';
import Table from './Table';
import data from '../../data/stats/youtubeStats';

const YoutubeStats = () => (
  <>
    <h3>Stats about the channel</h3>
    <Table data={data} />
  </>
);

export default YoutubeStats;
