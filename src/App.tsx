import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import Nav from './components/Nav';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const language = localStorage.getItem('default-language');

  React.useEffect(() => {
    i18n.changeLanguage(language || 'en');
  }, [language, i18n]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout style={{ minHeight: '100vh' }}>
        <Nav />
        <Layout.Content>
          <Routes />
        </Layout.Content>
      </Layout>
    </Router>
  );
};

export default App;
