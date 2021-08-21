import * as React from 'react';
import { GlobalOutlined } from '@ant-design/icons';
import { Popover, Button } from 'antd';
import { useTranslation } from 'react-i18next';

const ChooseLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const handleLanguageChange = (language: string) => {
    localStorage.setItem('default-language', language);
    i18n.changeLanguage(language);
  };

  return (
    <Popover
      content={
        <Button.Group>
          {[
            { code: 'en', languageName: 'English' },
            { code: 'fr', languageName: 'Français' },
            { code: 'bg', languageName: 'Български' },
          ].map(({ code, languageName }) => (
            <Button key={code} onClick={() => handleLanguageChange(code)} disabled={i18n.language === code}>
              {languageName}
            </Button>
          ))}
        </Button.Group>
      }
      trigger="click"
      placement="bottom"
      visible={isVisible}
      onVisibleChange={setIsVisible}
    >
      <Button icon={<GlobalOutlined />} shape="circle" type="link" />
    </Popover>
  );
};

export default ChooseLanguage;
