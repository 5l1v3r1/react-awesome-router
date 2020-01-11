import React, {Fragment} from 'react';

import {useLocation} from 'react-awesome-router';

const Route2: React.FC = () => {
  const {location, setLocation} = useLocation();

  return (
    <Fragment>
      <div>ROUTE 2</div>
      <div>Location: '{location}'</div>
      <button onClick={() => setLocation('/route3/test')}>Go to Route 3</button>
      <button onClick={() => setLocation('/')}>Go to index</button>
    </Fragment>
  );
};

export default Route2;
