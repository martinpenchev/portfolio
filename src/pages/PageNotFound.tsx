import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Alert, Row } from 'antd';

const PageNotFound: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Row justify="center" className="mt-4">
        <Alert message={t('page_not_found')} type="warning" />
      </Row>
    </div>
  );
};

export default PageNotFound;
