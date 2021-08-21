import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Row } from 'antd';
import PurpleTitle from './styles';

const HomePage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Row className="mt-4">
        <PurpleTitle level={2}>{t('Home Page')}</PurpleTitle>
      </Row>
    </div>
  );
};

export default HomePage;
