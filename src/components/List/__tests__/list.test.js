import { render, screen } from "@testing-library/react";

import List from "..";

const data = ['html', 'css', 'js'];

describe('List component', () => {
  test('List renders', () => {
    render(<List items={data} />);

    expect(screen.getByText('html')).toBeInTheDocument();
  })
});