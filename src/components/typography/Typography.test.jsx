import Typography from './Typography';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

describe('Typography component', () => {
  it('should render a paragraph element', () => {
    render(<Typography></Typography>);

    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  it('should render the text passed as children', () => {
    const text = 'Testing text';

    render(<Typography>{text}</Typography>);

    expect(screen.getByRole('paragraph').textContent).toEqual(text);
  });

  it('should render a heading element if the type is a heading tag', () => {
    render(<Typography type="h1"></Typography>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render headings with different classes based on type', () => {
    render(<Typography type="h1">Heading 1</Typography>);
    render(<Typography type="h2">Heading 2</Typography>);
    render(<Typography type="h3">Heading 3</Typography>);
    render(<Typography type="h4">Heading 4</Typography>);

    expect(screen.getByText('Heading 1')).toHaveClass(
      'text-h1 font-bold capitalize tracking-heading',
    );
    expect(screen.getByText('Heading 2')).toHaveClass(
      'text-h2 font-bold capitalize tracking-heading',
    );
    expect(screen.getByText('Heading 3')).toHaveClass(
      'text-h3 font-bold capitalize tracking-heading',
    );
    expect(screen.getByText('Heading 4')).toHaveClass(
      'text-h4 font-bold capitalize tracking-heading',
    );
  });

  it('should render subtitles with different classes based on type', () => {
    render(<Typography type="sub1">Subtitle 1</Typography>);
    render(<Typography type="sub2">Subtitle 2</Typography>);
    render(<Typography type="sub3">Subtitle 3</Typography>);
    render(<Typography type="sub4">Subtitle 4</Typography>);

    expect(screen.getByText('Subtitle 1')).toHaveClass('text-sub1 font-bold');
    expect(screen.getByText('Subtitle 2')).toHaveClass('text-sub2 font-bold');
    expect(screen.getByText('Subtitle 3')).toHaveClass('text-sub3 font-bold');
    expect(screen.getByText('Subtitle 4')).toHaveClass(
      'text-base font-semibold',
    );
  });

  it('should render labels with different classes based on type', () => {
    render(<Typography type="label">Label</Typography>);
    render(<Typography type="label-bold">Label Bold</Typography>);
    render(<Typography type="label-small">Label Small</Typography>);

    expect(screen.getByText('Label')).toHaveClass('text-base font-normal');
    expect(screen.getByText('Label Bold')).toHaveClass('text-base font-bold');
    expect(screen.getByText('Label Small')).toHaveClass('text-sm font-normal');
  });

  it('should render paragraphs with different classes based on type', () => {
    render(<Typography type="body">Body</Typography>);
    render(<Typography type="body-bold">Body Bold</Typography>);
    render(<Typography type="body-large">Body Large</Typography>);
    render(<Typography type="body-small">Body Small</Typography>);

    expect(screen.getByText('Body')).toHaveClass(
      'text-base font-lato font-normal',
    );
    expect(screen.getByText('Body Bold')).toHaveClass(
      'text-base font-lato font-bold',
    );
    expect(screen.getByText('Body Large')).toHaveClass(
      'text-xl font-lato font-normal',
    );
    expect(screen.getByText('Body Small')).toHaveClass(
      'text-sm font-lato font-normal',
    );
  });

  it('should add additional classes when passed', () => {
    render(<Typography classes="test">Body</Typography>);

    expect(screen.getByRole('paragraph')).toHaveClass('test');
  });

  it('should not add classes when not passed', () => {
    render(<Typography>Body</Typography>);

    expect(screen.getByRole('paragraph')).toHaveClass(
      'text-base font-lato font-normal',
      { exact: true },
    );
  });
});
