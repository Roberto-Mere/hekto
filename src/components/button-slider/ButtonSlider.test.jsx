import ButtonSlider from './ButtonSlider';
import { act, getAllByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi, vitest } from 'vitest';

describe('Button slider component', () => {
  it('should render lists of buttons and slides using passed initial slides', () => {
    const initialSlides = [true, true, true];
    const slidesData = ['Slide 1', 'Slide 2', 'Slide 3'];
    const RenderFn = ({ slide }) => <p>{slidesData[slide]}</p>;

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    const lists = screen.getAllByRole('list');

    expect(lists[0]).toContainElement(
      screen.getByText('Slide 1'),
      screen.getByText('Slide 2'),
      screen.getByText('Slide 3'),
    );

    expect(lists[1]).toContainElement(...screen.getAllByRole('button'));
  });

  it('should use render function passed to render slides', () => {
    const initialSlides = [true, true, true];

    const RenderFn = vi.fn(({ slide }) => <h1>{slide}</h1>);

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    expect(RenderFn).toHaveBeenCalledTimes(3);
    expect(screen.getAllByRole('heading')).toHaveLength(3);
  });

  it('should render slides based on initial slides active', () => {
    const initialSlides = [true, true, false, true];
    const slidesData = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'];
    const RenderFn = vi.fn(({ slide }) => slidesData[slide]);

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    const slides = screen.getAllByRole('listitem');

    expect(slides[0]).toContainElement(screen.getByText(slidesData[0]));
    expect(slides[1]).toContainElement(screen.getByText(slidesData[1]));
    expect(slides[3]).toContainElement(screen.getByText(slidesData[3]));
  });

  it('should add additional classes to slider when passed', () => {
    const initialSlides = [true, true, true];
    const RenderFn = vi.fn();

    render(
      <ButtonSlider
        initialSlides={initialSlides}
        classes="test"
        RenderFn={RenderFn}
      />,
    );

    expect(screen.getByTestId('slider')).toHaveClass('test');
  });

  it('should not add classes to slider when not passed', () => {
    const initialSlides = [true, true, true];
    const RenderFn = vi.fn();

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    expect(screen.getByTestId('slider')).not.toHaveAttribute('class');
  });

  it('should add additional classes to buttons list when passed', () => {
    const initialSlides = [true, true, true];
    const RenderFn = vi.fn();

    render(
      <ButtonSlider
        initialSlides={initialSlides}
        buttonsClasses="test"
        RenderFn={RenderFn}
      />,
    );

    expect(screen.getAllByRole('list')[1]).toHaveClass('test');
  });

  it('should not add classes to buttons list when not passed', () => {
    const initialSlides = [true, true, true];
    const RenderFn = vi.fn();

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    expect(screen.getAllByRole('list')[1]).toHaveClass('flex', { exact: true });
  });

  it('should translate slides according to active slide', async () => {
    const initialSlides = [true, true, true];
    const RenderFn = vi.fn();

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    const slides = screen.getAllByTestId('slide');
    const buttons = screen.getAllByRole('button');

    expect(slides[0]).toHaveStyle('transform: translateX(0%)');
    expect(slides[1]).toHaveStyle('transform: translateX(0%)');
    expect(slides[2]).toHaveStyle('transform: translateX(0%)');

    await userEvent.click(buttons[1]);

    expect(slides[0]).toHaveStyle('transform: translateX(-100%)');
    expect(slides[1]).toHaveStyle('transform: translateX(-100%)');
    expect(slides[2]).toHaveStyle('transform: translateX(-100%)');
  });

  it('should slide on a timer if passed', async () => {
    const initialSlides = [true, true, true];
    const RenderFn = vi.fn();
    const timer = 10;

    render(
      <ButtonSlider
        initialSlides={initialSlides}
        timer={timer}
        RenderFn={RenderFn}
      />,
    );

    const slides = screen.getAllByTestId('slide');
    vi.useFakeTimers();

    expect(slides[0]).toHaveStyle('transform: translateX(0%)');

    setTimeout(
      () => expect(slides[0]).toHaveStyle('transform: translateX(-100%)'),
      timer,
    );
  });
});
