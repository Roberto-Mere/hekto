import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Tabbed from './Tabbed';
import userEvent from '@testing-library/user-event';

describe('Tabbed component', () => {
  it('should render a list of tab buttons and tab content', () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3', content: 'Tab 3' },
    ];

    render(<Tabbed tabs={tabs} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons[0].textContent).toEqual(tabs[0].name);
    expect(buttons[1].textContent).toEqual(tabs[1].name);
    expect(buttons[2].textContent).toEqual(tabs[2].name);

    expect(screen.getByRole('article').textContent).toEqual(tabs[0].content);
  });

  it('should change the tab content when clicking on a tab button', async () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3', content: 'Tab 3' },
    ];

    render(<Tabbed tabs={tabs} />);

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[1]);

    expect(screen.getByRole('article').textContent).toEqual(tabs[1].content);
  });

  it('should fetch the tab content of clicked tab button if it doesnt exist', async () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3' },
    ];
    const fetchTabContent = vi.fn(
      () => new Promise((resolve) => resolve('Tab')),
    );

    render(<Tabbed tabs={tabs} fetchTabContent={fetchTabContent} />);

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[2]);

    expect(fetchTabContent).toHaveBeenCalled();
    expect(screen.getByRole('article').textContent).toEqual('Tab');
  });

  it('should not fetch tab content of clicked tab if it already exists', async () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3', content: 'Tab 3' },
    ];
    const fetchTabContent = vi.fn(
      () => new Promise((resolve) => resolve('Tab')),
    );

    render(<Tabbed tabs={tabs} fetchTabContent={fetchTabContent} />);

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[2]);

    expect(fetchTabContent).not.toHaveBeenCalled();
  });

  it('should not fetch tab content of clicked tab if it has already been fetched', async () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3' },
    ];
    const fetchTabContent = vi.fn(
      () => new Promise((resolve) => resolve('Tab')),
    );

    render(<Tabbed tabs={tabs} fetchTabContent={fetchTabContent} />);

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[2]);
    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[2]);

    expect(fetchTabContent).toHaveBeenCalledOnce();
  });

  it('should add tab button classes when passed', () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3', content: 'Tab 3' },
    ];

    render(<Tabbed tabs={tabs} buttonClasses="test" />);

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveClass('test');
    expect(buttons[0]).toHaveClass('test');
    expect(buttons[0]).toHaveClass('test');
  });

  it('should not add tab button classes when not passed', () => {
    const tabs = [
      { name: '1', content: 'Tab 1' },
      { name: '2', content: 'Tab 2' },
      { name: '3', content: 'Tab 3' },
    ];

    render(<Tabbed tabs={tabs} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveClass('', { exact: true });
    expect(buttons[0]).toHaveClass('', { exact: true });
    expect(buttons[0]).toHaveClass('', { exact: true });
  });
});
