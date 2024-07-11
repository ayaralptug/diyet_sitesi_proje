import React, { useState } from 'react';
import { Form, Input, Button, Select, Table, Modal } from 'antd';

const { Option } = Select;

const foodItems = [
  { name: 'Elma', calories: 52 },
  { name: 'Tavuk', calories: 239 },
  { name: 'Salata', calories: 33 },
  { name: 'Ekmek', calories: 265 },
  // Daha fazla besin ekleyin
];

const App = () => {
  const [consultants, setConsultants] = useState([]);
  const [dietList, setDietList] = useState([]);
  const [currentCalories, setCurrentCalories] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [mealCalories, setMealCalories] = useState({});

  const addConsultant = (values) => {
    setConsultants([...consultants, values]);
  };

  const addFoodItem = (food) => {
    if (currentCalories + food.calories <= totalCalories) {
      setDietList([...dietList, food]);
      setCurrentCalories(currentCalories + food.calories);
    } else {
      Modal.warning({
        title: 'Kalori Limiti Aşıldı',
        content: 'Bu besini eklemek toplam kaloriyi aşar.',
      });
    }
  };

  const columns = [
    { title: 'Besin', dataIndex: 'name', key: 'name' },
    { title: 'Kalori', dataIndex: 'calories', key: 'calories' },
  ];

  return (
    <div>
      <h1>Danışan Bilgileri</h1>
      <Form onFinish={addConsultant} layout="inline">
        <Form.Item name="name" label="İsim" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Yaş" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="height" label="Boy (cm)" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="weight" label="Kilo (kg)" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Ekle</Button>
        </Form.Item>
      </Form>
      
      <h1>Danışanlar</h1>
      <Table
        dataSource={consultants}
        columns={[
          { title: 'İsim', dataIndex: 'name', key: 'name' },
          { title: 'Yaş', dataIndex: 'age', key: 'age' },
          { title: 'Boy (cm)', dataIndex: 'height', key: 'height' },
          { title: 'Kilo (kg)', dataIndex: 'weight', key: 'weight' },
        ]}
        rowKey="name"
      />
      
      <h1>Diyet Listesi Oluşturma</h1>
      <Form
        onFinish={({ totalCalories, breakfast, lunch, dinner }) => {
          setTotalCalories(totalCalories);
          setMealCalories({ breakfast, lunch, dinner });
        }}
        layout="inline"
      >
        <Form.Item name="totalCalories" label="Toplam Kalori" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="breakfast" label="Kahvaltı Kalorisi" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="lunch" label="Öğle Yemeği Kalorisi" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item name="dinner" label="Akşam Yemeği Kalorisi" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Belirle</Button>
        </Form.Item>
      </Form>

      <h1>Besin Ekle</h1>
      <Select
        style={{ width: 200 }}
        onChange={(value) => {
          const food = foodItems.find(item => item.name === value);
          addFoodItem(food);
        }}
      >
        {foodItems.map(food => (
          <Option key={food.name} value={food.name}>{food.name}</Option>
        ))}
      </Select>
      
      <h1>Oluşturulan Diyet Listesi</h1>
      <Table dataSource={dietList} columns={columns} rowKey="name" />

      <h1>Toplam Kalori: {currentCalories}/{totalCalories}</h1>
    </div>
  );
};

export default App;
