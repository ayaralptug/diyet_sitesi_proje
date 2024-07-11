import React, { useEffect, useState } from 'react';
import { Table, Tabs } from 'antd';
import mealsData from './mealsData.json';

const { TabPane } = Tabs;

const Meals = () => {
  const [meals, setMeals] = useState({});

  useEffect(() => {
    setMeals(mealsData.meals);
  }, []);

  const columns = [
    { title: 'Yemek', dataIndex: 'name', key: 'name' },
    { title: 'Kalori', dataIndex: 'calories', key: 'calories' }
  ];

  return (
    <div>
      <h1>Yemek Listesi</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Kahvaltı" key="1">
          <Table dataSource={meals.breakfast} columns={columns} rowKey="name" />
        </TabPane>
        <TabPane tab="Öğle Yemeği" key="2">
          <Table dataSource={meals.lunch} columns={columns} rowKey="name" />
        </TabPane>
        <TabPane tab="Akşam Yemeği" key="3">
          <Table dataSource={meals.dinner} columns={columns} rowKey="name" />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Meals;
