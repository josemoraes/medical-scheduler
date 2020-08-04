import React from "react";
import { DatePicker, Button } from "antd";
// import { Container } from './styles';

function Dashboard() {
  return (
    <div>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}

export default Dashboard;
