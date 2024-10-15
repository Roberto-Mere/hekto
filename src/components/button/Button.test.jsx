import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('should render a button', () => {
    render(<Button />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render content passed as children', () => {
    const content = 'test';

    render(<Button>{content}</Button>);

    expect(screen.getByRole('button').textContent).toEqual(content);
  });

  it('should have different classes based on size passed', () => {
    render(<Button />);
    render(<Button size="small" />);

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveClass('px-40 py-16');
    expect(buttons[1]).toHaveClass('px-16 py-8');
  });

  it('should pass additional props to the button', () => {
    render(<Button test="test" />);

    expect(screen.getByRole('button')).toHaveAttribute('test', 'test');
  });
});
