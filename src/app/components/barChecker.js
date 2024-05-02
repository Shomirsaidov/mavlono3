'use client'

import { useState } from 'react';
import BarDefault from './barDefault'
import Bar from './barPeriodic'

function ConditionalComponent() {
  const [mavlonoDefined, setMavlonoDefined] = useState(
    typeof localStorage.getItem('mavlono') !== 'undefined'
  );

  return (
    <div>
      {mavlonoDefined ? <Bar /> : <BarDefault />}
    </div>
  );
}

export default ConditionalComponent;
