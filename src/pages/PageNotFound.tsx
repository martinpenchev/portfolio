import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Alert } from 'antd';

const PageNotFound: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return <Alert message={t('page_not_found')} type="warning" />;
};

export default PageNotFound;
