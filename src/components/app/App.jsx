import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/layout/Layout';
import { Home } from 'components/home/Home';

export const App = () => {
 return (
  <div>
 <Routes>
    <Route path="/" element={<Layout />}>
      <Route index="/" element={<Home />} />
    </Route>
  </Routes>;
  </div>
 )

};
