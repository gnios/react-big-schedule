import { Row, Typography } from 'antd';
import React from 'react';
import ClassBased from './class-based';
import SourceCode from '../../components/SourceCode';

function Basic() {
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2} className="m-0">
          Add More Example
        </Typography.Title>
      </Row>
      <SourceCode value="https://github.com/react-scheduler/react-big-schedule/blob/master/src/examples/pages/Add-More/index.jsx" />
      <ClassBased />
    </>
  );
}

export default Basic;
