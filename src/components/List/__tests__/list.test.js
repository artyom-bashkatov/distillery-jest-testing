import { render, screen } from "@testing-library/react";

import List from "..";

const data = ['html', 'css', 'js'];

describe('List component', () => {
  test('List renders', () => {
    render(<List items={data} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('html')).toBeInTheDocument();
  })

  test('List renders without data', () => {
    render(<List />);

    // найти то, что может отсутствовать роли, соответствующей списку
    expect(screen.queryByRole('list')).toBeNull();
  })

  test('List snapshot', () => {
    const list = render(<List items={data} />);
    expect(list).toMatchSnapshot();
  });

  test('List empty snapshot', () => {
    const list = render(<List />);
    expect(list).toMatchSnapshot();
  });
});