import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

const API_KEY = process.env.REACT_APP_YOUTUBE_CLIENT_ID;
const CHANNEL_ID = process.env.REACT_APP_CHANNEL_ID;

const YouTubeAnalytics = () => {
  const [data, setData] = useState(null);

  const fetchChannelData = async () => {
    const result = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
    );
    return result.data;
  };

  useEffect(() => {
    // This code will run when the component loads and whenever userId changes
    fetchChannelData().then((r) => {
      const table = [
        {
          key: 'totalVideos',
          label: 'Total Videos',
          value: r.items[0].statistics.videoCount,
        },
        {
          key: 'totalViews',
          label: 'Total Views',
          value: r.items[0].statistics.viewCount,
        },
        {
          key: 'totalSubs',
          label: 'Total Subscribers',
          value: r.items[0].statistics.subscriberCount,
        },
      ];
      setData(table);
    });
  }, []);

  return (
    <div>
      <h2>YouTube Channel Analytics</h2>
      {data ? <Table data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default YouTubeAnalytics;
