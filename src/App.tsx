import { useState } from 'react';
import { Button, Card } from './index';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          UI Component Library
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Button Components" variant="elevated">
            <div className="space-y-4">
              <div className="space-x-2">
                <Button variant="primary" onClick={() => setCount(count + 1)}>
                  Primary Button
                </Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="danger">Danger Button</Button>
              </div>

              <div className="space-x-2">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>

              <div className="space-x-2">
                <Button disabled>Disabled Button</Button>
              </div>

              <p className="text-sm text-gray-600">
                Button clicked {count} times
              </p>
            </div>
          </Card>

          <Card title="Card Components" variant="elevated">
            <div className="space-y-4">
              <Card variant="default">
                <p>Default card variant</p>
              </Card>

              <Card variant="outlined">
                <p>Outlined card variant</p>
              </Card>

              <Card title="Nested Card" variant="elevated">
                <p>This is a nested card inside another card</p>
              </Card>
            </div>
          </Card>
        </div>

        <Card title="About This Library" variant="outlined" className="mt-6">
          <p className="text-gray-700">
            This is a React component library built with TypeScript, Vite, and
            includes:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Prettier code formatting</li>
            <li>ESLint code quality checks</li>
            <li>Jest unit testing</li>
            <li>Husky pre-commit hooks</li>
            <li>GitHub Actions CI/CD pipeline</li>
            <li>Docker containerization</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default App;
