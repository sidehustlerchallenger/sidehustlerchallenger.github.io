import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import YoutubeStats from '../components/Stats/YoutubeStats';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about the Side Hustler Challenge"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2>
            <Link to="/stats">Stats</Link>
          </h2>
        </div>
      </header>
      <YoutubeStats />
    </article>
  </Main>
);

export default Stats;
