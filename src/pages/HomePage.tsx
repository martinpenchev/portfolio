import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Typography } from 'antd';

const { Title } = Typography;

const HomePage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return <Title level={4}>{t('Home Page')}</Title>;
};

export default HomePage;
