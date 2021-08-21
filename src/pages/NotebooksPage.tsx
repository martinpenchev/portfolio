import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import PurpleTitle from './styles';

const NotebooksPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  const notebookData = [
    {
      id: 1,
      title: t('Flashcard-Notebook-Title'),
      description: t('Flashcard-Notebook-Description'),
    },
  ];

  return (
    <div className="container">
      <Row className="mt-4">
        <PurpleTitle level={2}>{t('Notebooks')}</PurpleTitle>
      </Row>
      <Row className="mt-4" gutter={[24, 24]}>
        {notebookData.map(({ id, title, description }) => (
          <Col span={8} key={`projects-col-${id}`}>
            <Card size="small" bordered={false} title={title}>
              <p className="text-muted">{description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NotebooksPage;
