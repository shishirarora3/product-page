import React from 'react';
import fetch from '../../core/fetch';
import { fbSearchUrl } from '../../core/urls';
import memoize from 'memoizee';

async function getHomePageData(searchedWord) {
  const data = await fetch(`${fbSearchUrl}?type=place&q=${searchedWord}&access_token=1007663462664319|k4JAh0W2aPAFHjjN-2AvZCy7gmo`);
  const json = await data.json();
  return await json;
}


export default {

  path: '/:c*',
  async action({path},{c}) {
    try{
      const homePageData = await getHomePageData(c);
      return new Promise(resolve => {
        if (process.env.BROWSER) {
          require.ensure(['./Home'], (require) => {
            const Home = require('./Home').default;  // eslint-disable-line global-require
            resolve(<Home data={homePageData} path={path} />);
          }, 'Home');
        } else {
          const Home = require('./Home').default;  // eslint-disable-line
          resolve(<Home data={homePageData} path={path} />);
        }
      });
    }catch(e){
      console.log(e);
    }

  }
};
