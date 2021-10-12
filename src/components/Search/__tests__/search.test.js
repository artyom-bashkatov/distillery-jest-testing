import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from '..';

const onChange = jest.fn();

describe('Search component', () => {
  test('renders Search component', () => {
    render(<Search value="" onChange={onChange}>
      Find:
    </Search>);

    expect(screen.getByText(/Find/i)).toBeInTheDocument();
  });

  test('renders Search component without children', () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });

  test('search component without placeholder', () => {
    render(<Search value="" onChange={onChange} />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  test('search component with placeholder', () => {
    render(<Search value="" onChange={onChange} placeholder='find post' />);
    expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
  });

  test('onChange works', () => {
    render(<Search value="" onChange={onChange}>
      Find:
    </Search>);

    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  test('dynamic styles works', () => {
    render(<Search value="abc" onChange={onChange} />)
    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText(/Search/i)).toHaveClass('label');
  })

  test('Search component snapshot', () => {
    const search = render(<Search value="" onChange={onChange}>
      Find:
    </Search>);
    expect(search).toMatchSnapshot();
  })
});