import { useState } from 'react';
import { IconSwitch } from './IconSwitch';
import { CardsView } from './CardsView';
import { ListView } from './ListView';
import products from './products';

export const Store = () => {
  const [state, setState] = useState('view_list');
  return (
    <>
      <IconSwitch icon={state} onSwitch={setState} />
      {state === 'view_list' ? <CardsView cards={products} /> : <ListView item={products} />}
    </>
  );
};
