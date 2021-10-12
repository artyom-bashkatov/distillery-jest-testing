import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App component', () => {
  test('App renders', () => {
    render(<App/>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Find course:')).toBeInTheDocument();
  });

  test('typing in Searchbox works', () => {
    render(<App/>);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  })

  test('search filter is working', () => {
    render(<App />);
    expect(screen.getByText('html')).toBeInTheDocument();
    expect(screen.getByText('css')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'Node');
    expect(screen.queryByText(/css/)).toBeNull();
    expect(screen.queryByText(/html/)).toBeNull();
    expect(screen.queryByText(/Node/)).toBeInTheDocument();
  })
});