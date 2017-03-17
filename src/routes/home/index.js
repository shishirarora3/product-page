import React from 'react';
import mockData from './item-data.json';

function getHomePageData() {
  return mockData;
}


export default {

  path: '/:c*',
  async action({path},{c}) {
    try{
      const homePageData = getHomePageData(c);
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
