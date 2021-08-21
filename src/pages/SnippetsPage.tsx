import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';

import { Row, Card, Col } from 'antd';
import PurpleTitle from './styles';

const SnippetsPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  const snippetData = [
    {
      id: 1,
      title: t('Json-Snippet-Title'),
      description: t('Json-Snippet-Description'),
    },
  ];

  return (
    <div className="container">
      <Row className="mt-4">
        <PurpleTitle level={3}>{t('Snippets')}</PurpleTitle>
      </Row>
      <Row className="mt-4" gutter={[24, 24]}>
        {snippetData.map(({ id, title, description }) => (
          <Col span={8} key={`snippet-col-${id}`}>
            <Card size="small" bordered={false} title={title}>
              <p className="text-muted">{description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SnippetsPage;
