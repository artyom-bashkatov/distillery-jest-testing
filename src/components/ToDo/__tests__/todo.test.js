import { render, screen, cleanup } from "@testing-library/react";

import renderer from "react-test-renderer";

import ToDo from "../index";

afterEach(() => {
  cleanup();
});

test('should render not-completed todo component', () => {
  const todo = {id: 1, title: 'wash dishes', completed: false, };
  render(<ToDo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');
});

test('should render completed todo component', () => {
  const todo = {id: 2, title: 'wash car', completed: true, };
  render(<ToDo todo={todo} />);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash car');
  expect(todoElement).toContainHTML('strike');
});

test('matches snapshot', () => {
  const todo = {id: 1, title: 'wash dishes', completed: false, };
  const tree = renderer.create(<ToDo todo={todo}/>).toJSON();
  expect(tree).toMatchSnapshot();
});