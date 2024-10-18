import ButtonSlider from './ButtonSlider';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it, vi } from 'vitest';

describe('Button slider component', () => {
  it('should render lists of buttons and slides for each slide passed', () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    render(<ButtonSlider initialSlides={initialSlides} />);

    const lists = screen.getAllByRole('list');

    expect(lists[0]).toContainElement(
      screen.getByText('Slide 1'),
      screen.getByText('Slide 2'),
      screen.getByText('Slide 3'),
    );

    expect(lists[1]).toContainElement(...screen.getAllByRole('button'));
  });

  it('should use slide component function passed to render slides', () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    const RenderFn = vi.fn(({ slide }) => <h1>{slide}</h1>);

    render(<ButtonSlider initialSlides={initialSlides} RenderFn={RenderFn} />);

    expect(RenderFn).toHaveBeenCalledTimes(3);
    expect(screen.getAllByRole('heading')).toHaveLength(3);
  });

  it('should add additional classes to slider when passed', () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    render(<ButtonSlider initialSlides={initialSlides} classes="test" />);

    expect(screen.getByTestId('slider')).toHaveClass('test');
  });

  it('should not add classes to slider when not passed', () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    render(<ButtonSlider initialSlides={initialSlides} />);

    expect(screen.getByTestId('slider')).not.toHaveAttribute('class');
  });

  it('should add additional classes to buttons list when passed', () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    render(
      <ButtonSlider initialSlides={initialSlides} buttonsClasses="test" />,
    );

    expect(screen.getAllByRole('list')[1]).toHaveClass('test');
  });

  it('should not add classes to buttons list when not passed', () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    render(<ButtonSlider initialSlides={initialSlides} />);

    expect(screen.getAllByRole('list')[1]).toHaveClass('flex', { exact: true });
  });

  it('should translate slides according to active slide', async () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];

    render(<ButtonSlider initialSlides={initialSlides} />);

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

  it('should fetch next slide data when clicking on slide', async () => {
    const initialSlides = ['Slide 1', 'Slide 2', ''];
    const fetchSlide = vi.fn(() => new Promise((resolve) => resolve('Slide')));

    render(
      <ButtonSlider initialSlides={initialSlides} fetchSlide={fetchSlide} />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[1]);

    expect(fetchSlide).toHaveBeenCalled();
  });

  it('should fetch current slide when clicking on slide button if it doesnt exist', async () => {
    const initialSlides = ['Slide 1', 'Slide 2', ''];
    const fetchSlide = vi.fn(() => new Promise((resolve) => resolve('Slide')));

    render(
      <ButtonSlider initialSlides={initialSlides} fetchSlide={fetchSlide} />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[2]);

    expect(fetchSlide).toHaveBeenCalled();
  });

  it('should not fetch next slide if slide already exists', async () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];
    const fetchSlide = vi.fn(() => new Promise((resolve) => resolve('Slide')));

    render(
      <ButtonSlider initialSlides={initialSlides} fetchSlide={fetchSlide} />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[1]);

    expect(fetchSlide).not.toHaveBeenCalled();
  });

  it('should not fetch next slide if slide button clicked is the last one', async () => {
    const initialSlides = ['Slide 1', 'Slide 2', 'Slide 3'];
    const fetchSlide = vi.fn(() => new Promise((resolve) => resolve('Slide')));

    render(
      <ButtonSlider initialSlides={initialSlides} fetchSlide={fetchSlide} />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[2]);

    expect(fetchSlide).not.toHaveBeenCalled();
  });

  it('should not fetch next slide when slide has already been fetched', async () => {
    const initialSlides = ['Slide 1', 'Slide 2', ''];
    const fetchSlide = vi.fn(() => new Promise((resolve) => resolve('Slide')));

    render(
      <ButtonSlider initialSlides={initialSlides} fetchSlide={fetchSlide} />,
    );

    const buttons = screen.getAllByRole('button');

    await userEvent.click(buttons[1]);
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);

    expect(fetchSlide).toHaveBeenCalledOnce();
  });
});
