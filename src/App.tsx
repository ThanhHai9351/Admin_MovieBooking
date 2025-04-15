import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, Card, Typography, Space, Divider } from 'antd';

function App() {
  const [count, setCount] = useState(0);
  const { Title, Paragraph, Text } = Typography;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Space direction="horizontal" size="large">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Space>

      <Title level={1}>Vite + React</Title>

      <Card className="w-full max-w-md my-4">
        <Space direction="vertical" size="middle" className="w-full">
          <Button type="primary" onClick={() => setCount(count => count + 1)}>
            count is {count}
          </Button>
          <Paragraph>
            Edit <Text code>src/App.tsx</Text> and save to test HMR
          </Paragraph>
        </Space>
      </Card>

      <Divider />

      <Paragraph type="secondary" className="text-center">
        Click on the Vite and React logos to learn more
      </Paragraph>
    </div>
  );
}

export default App;
