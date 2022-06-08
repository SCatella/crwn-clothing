import { Outlet } from 'react-router-dom';

import './shop.styles.scss';

const Shop = () => {
  return (
    <div>
      <div>
        <h1>I am the shop</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default Shop;