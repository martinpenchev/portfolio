import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import PurpleTitle from './styles';

const ProjectsPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  const projectData = [
    {
      id: 1,
      title: t('Flashcard-Project-Title'),
      description: t('Flashcard-Project-Description'),
    },
  ];

  return (
    <div className="container">
      <Row className="mt-4">
        <PurpleTitle level={3}>{t('Projects')}</PurpleTitle>
      </Row>
      <Row className="mt-4" gutter={[24, 24]}>
        {projectData.map(({ id, title, description }) => (
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

export default ProjectsPage;
