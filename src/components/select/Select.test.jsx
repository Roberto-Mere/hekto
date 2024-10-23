import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Select from './Select';
import userEvent from '@testing-library/user-event';

describe('Select component', () => {
  it('should render a select element with option elements for each option passed', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    render(<Select options={options} selectedOption={options[0].value} />);

    expect(screen.getByRole('combobox')).toContainElement(
      ...screen.getAllByRole('option'),
    );
  });

  it('should have options with given labels and values', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    render(<Select options={options} selectedOption={options[0].value} />);

    const optionElements = screen.getAllByRole('option');

    expect(optionElements[0].value).toEqual(options[0].value);
    expect(optionElements[1].value).toEqual(options[1].value);
    expect(optionElements[2].value).toEqual(options[2].value);

    expect(optionElements[0].textContent).toEqual(options[0].label);
    expect(optionElements[1].textContent).toEqual(options[1].label);
    expect(optionElements[2].textContent).toEqual(options[2].label);
  });

  it('should render a custom select box that displays the current option selected', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    render(<Select options={options} selectedOption={options[0].value} />);

    const selectBox = screen.getByTestId('select-box');
    const selectedOption = screen.getByRole('paragraph');

    expect(selectBox).toContainElement(selectedOption);
    expect(selectedOption.textContent).toEqual(options[0].label);
  });

  it('should use the given selected option as the current selected option', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    render(<Select options={options} selectedOption={options[2].value} />);

    const selectedOption = screen.getByRole('paragraph');

    expect(selectedOption.textContent).toEqual(options[2].label);
  });

  it('should toggle a list of options when the select box is clicked', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    render(<Select options={options} selectedOption={options[0].value} />);

    const selectBox = screen.getByTestId('select-box');

    expect(screen.queryByRole('list')).toBeNull();

    await userEvent.click(selectBox);

    const optionButtons = screen.getAllByRole('button');
    expect(screen.getByRole('list')).toContainElement(...optionButtons);

    await userEvent.click(selectBox);

    expect(screen.queryByRole('list')).toBeNull();
  });

  it('should close the list of options when an option is clicked', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];

    render(
      <Select
        options={options}
        selectedOption={options[0].value}
        onSelect={vi.fn()}
      />,
    );

    const selectBox = screen.getByTestId('select-box');

    await userEvent.click(selectBox);
    await userEvent.click(screen.getAllByRole('button')[1]);

    expect(screen.queryByRole('list')).toBeNull();
  });

  it('should change the selected option when clicking on an option', async () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    const onSelect = vi.fn();

    render(
      <Select
        options={options}
        selectedOption={options[0].value}
        onSelect={onSelect}
      />,
    );

    const selectBox = screen.getByTestId('select-box');

    await userEvent.click(selectBox);
    await userEvent.click(screen.getAllByRole('button')[2]);

    expect(onSelect).toHaveBeenCalledWith(options[2].value);
  });
});
