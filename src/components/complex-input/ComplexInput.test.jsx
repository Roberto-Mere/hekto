import ComplexInput from './ComplexInput';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

describe('Complex Input component', () => {
  it('should render a form with an input and a button', () => {
    render(<ComplexInput />);

    expect(screen.getByRole('generic')).toContain(
      screen.getByRole('textbox'),
      screen.getByRole('button'),
    );
  });

  it('should render a different input base on type', () => {
    render(<ComplexInput type="search" />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should render the button with content when passed', () => {
    const butttonContent = 'Button test';

    render(<ComplexInput buttonContent={butttonContent} />);

    expect(screen.getByRole('button').textContent).toEqual(butttonContent);
  });

  it('should not render any content in the button when not passed', () => {
    render(<ComplexInput />);

    expect(screen.getByRole('button').textContent).toEqual('');
  });

  it('should add a placeholder when passed', () => {
    const placeholder = 'Test';

    render(<ComplexInput placeholder={placeholder} />);

    expect(screen.queryByPlaceholderText(placeholder)).not.toBeNull();
  });

  it('should not add a placeholder when not passed', () => {
    render(<ComplexInput />);

    expect(screen.getByRole('textbox')).not.toHaveAttribute('placeholder');
  });
});
