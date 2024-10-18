import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Tabbed from './Tabbed';
import userEvent from '@testing-library/user-event';

describe('Tabbed component', () => {
  it('should render a list of tab buttons and tab content', () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = ({ tab }) => <p>{`Tab ${tab}`}</p>;

    render(<Tabbed tabs={tabs} RenderFn={RenderFn} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons[0].textContent).toEqual(tabs[0]);
    expect(buttons[1].textContent).toEqual(tabs[1]);
    expect(buttons[2].textContent).toEqual(tabs[2]);

    expect(screen.getByRole('article').textContent).toEqual('Tab 1');
  });

  it('should use render function passed to render tab content', () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = vi.fn(({ tab }) => <h1>{`Tab ${tab}`}</h1>);

    render(<Tabbed tabs={tabs} RenderFn={RenderFn} />);

    expect(RenderFn).toHaveBeenCalled();
    expect(screen.getByRole('heading').textContent).toEqual('Tab 1');
  });

  it('should change the tab content when clicking on a tab button', async () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = ({ tab }) => <p>{`Tab ${tab}`}</p>;

    render(<Tabbed tabs={tabs} RenderFn={RenderFn} />);

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[1]);

    expect(screen.getByRole('article').textContent).toEqual('Tab 2');
  });

  it('should add classes when passed', () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = vi.fn();

    render(<Tabbed tabs={tabs} classes="test" RenderFn={RenderFn} />);

    expect(screen.getByTestId('tabbed')).toHaveClass('test');
  });

  it('should not add classes when not passed', () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = vi.fn();

    render(<Tabbed tabs={tabs} RenderFn={RenderFn} />);

    expect(screen.getByTestId('tabbed')).not.toHaveAttribute('class');
  });

  it('should add tab button container classes when passed', () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = vi.fn();

    render(<Tabbed tabs={tabs} buttonsClasses="test" RenderFn={RenderFn} />);

    expect(screen.getByRole('list')).toHaveClass('test');
  });

  it('should not add tab button container classes when not passed', () => {
    const tabs = ['1', '2', '3'];
    const RenderFn = vi.fn();

    render(<Tabbed tabs={tabs} RenderFn={RenderFn} />);

    expect(screen.getByRole('list')).toHaveClass('flex', { exact: true });
  });
});
