import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders with children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(
      <Card title="Card Title">
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies correct variant classes', () => {
    const { rerender } = render(
      <Card variant="default">
        <p>Default card</p>
      </Card>
    );
    expect(screen.getByText('Default card').closest('div')).toHaveClass(
      'bg-white'
    );

    rerender(
      <Card variant="elevated">
        <p>Elevated card</p>
      </Card>
    );
    expect(screen.getByText('Elevated card').closest('div')).toHaveClass(
      'shadow-lg'
    );

    rerender(
      <Card variant="outlined">
        <p>Outlined card</p>
      </Card>
    );
    expect(screen.getByText('Outlined card').closest('div')).toHaveClass(
      'border'
    );
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class">
        <p>Custom card</p>
      </Card>
    );
    expect(screen.getByText('Custom card').closest('div')).toHaveClass(
      'custom-class'
    );
  });
});
