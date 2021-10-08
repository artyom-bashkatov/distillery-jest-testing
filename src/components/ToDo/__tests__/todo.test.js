import { render, screen, cleanup } from "@testing-library/react";
import ToDo from "../index";

test('should render todo component', () => {
  render(<ToDo/>);
  const todoElement = screen.getByText(/Hello/i);
  expect(todoElement).toBeInTheDocument('Hello');
})