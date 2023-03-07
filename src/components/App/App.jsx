import MainLayout from 'MainLayout/MainLayout';
import Overview from 'pages/OverviewPage/OverviewPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Overview />} />
      </Route>
    </Routes>
  );
};
