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
          <p>@TODO use google api to pull stats information instead of making them static</p>
        </div>
      </header>
      <YoutubeStats />
    </article>
  </Main>
);

export default Stats;
