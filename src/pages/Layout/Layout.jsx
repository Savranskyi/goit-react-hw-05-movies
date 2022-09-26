//React
import { Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//Style
import { Container } from './Layout.styled';
//Components export default
//import PageHeader from 'components/PageHeader/PageHeader.jsx';

//Dynamic import
const PageHeader = lazy(() => import('../../components/PageHeader/PageHeader'));

const Layout = () => {
  return (
    <Container>
      <Suspense>
        <PageHeader />
      </Suspense>
      <Outlet />
    </Container>
  );
};

export default Layout;
