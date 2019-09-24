import React from 'react';
import { PageHeader, Button } from 'antd';

const Header = () => (
  <header>
    <PageHeader
      title="Haruki Murakami"
      subTitle="村上春樹"
      extra={[<Button type="primary">Novels</Button>, <Button>Shortstories</Button>]}
    ></PageHeader>
  </header>
);

export default Header;
