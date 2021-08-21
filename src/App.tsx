import * as React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import Nav from './components/Nav';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Nav />
        <Layout.Content>
          <Routes />
        </Layout.Content>
      </Layout>
    </Router>
  );
};

export default App;
