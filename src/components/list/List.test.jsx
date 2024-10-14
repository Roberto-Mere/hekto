import List from './List';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

describe('List component', () => {
  it('should render a list of items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => item}
      </List>,
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render items using the rendering prop', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => (
          <div data-testid={`test-${item[item.length - 1]}`}>{item}</div>
        )}
      </List>,
    );

    expect(screen.getByRole('list')).toContainElement(
      screen.getByTestId('test-1'),
    );
  });

  it('should render each item in the list', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => item}
      </List>,
    );

    expect(screen.getByRole('list')).toContainElement(
      screen.getByText('Item 1'),
      screen.getByText('Item 2'),
      screen.getByText('Item 3'),
    );
  });

  it('should not render non-existant items', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => item}
      </List>,
    );

    expect(screen.getByRole('list')).not.toContainHTML('<li>Item 4</li>');
  });

  it('should not render any items when list is empty', () => {
    const items = [];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => item}
      </List>,
    );

    expect(screen.getByRole('list')).not.toContainHTML('<li>');
  });

  it('should add additonal list classes when passed', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index} classes="test">
        {(item) => item}
      </List>,
    );

    expect(screen.getByRole('list')).toHaveClass('test');
  });

  it('should not add classes to list when not passed', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => item}
      </List>,
    );

    expect(screen.getByRole('list')).toHaveClass('flex', { exact: true });
  });

  it('should add additonal item classes to each item when passed', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index} itemClasses="test">
        {(item) => item}
      </List>,
    );

    expect(screen.getByText('Item 1')).toHaveClass('test');
    expect(screen.getByText('Item 2')).toHaveClass('test');
    expect(screen.getByText('Item 3')).toHaveClass('test');
  });

  it('should not add classes to list items when not passed', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];

    render(
      <List list={items} keyFn={(_, index) => index}>
        {(item) => item}
      </List>,
    );

    expect(screen.getByText('Item 1')).not.toHaveAttribute('class');
    expect(screen.getByText('Item 2')).not.toHaveAttribute('class');
    expect(screen.getByText('Item 3')).not.toHaveAttribute('class');
  });
});
