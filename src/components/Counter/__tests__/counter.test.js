import { render, fireEvent, cleanup } from '@testing-library/react';

import Counter from '..';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

afterEach(() => {
  cleanup();
})

describe('Test Suite for Counter Component', () => {
  test('header renders with correct text', () => {
    const headerEl = getByTestId('header');

    expect(headerEl.textContent).toBe('My Counter');
  });

  test('counter initially start with text of 0', () => {
    const counterEl = getByTestId('counter');
    expect(counterEl.textContent).toBe('0');
  })

  test('input contains initial value of 1', () => {
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('1');
  })

  test('add button renders with +', () => {
    const addBtn = getByTestId('add-btn');
    expect(addBtn.textContent).toBe('+');
  })

  test('subtract button renders with -', () => {
    const subtractBtn = getByTestId('subtract-btn');
    expect(subtractBtn.textContent).toBe('-');
  })

  test('change value of input works correctly', () => {
    const inputEl = getByTestId('input');

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
      target: {
        value: "5"
      }
    })

    expect(inputEl.value).toBe("5");
  });

  test('click on plus btn adds 1 to counter', () => {
    const addBtn = getByTestId('add-btn');
    const counterEl = getByTestId('counter');
    expect(counterEl.textContent).toBe('0');
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe('1');
  })

  test('click on subtract btn subtract 1 to counter', () => {  
    const subtractBtn = getByTestId('subtract-btn');
    const counterEl = getByTestId('counter');
    const inputEl = getByTestId('input');
    fireEvent.change(inputEl, {
      target: {
        value: "5"
      }
    })
    const addBtn = getByTestId('add-btn');
    fireEvent.click(addBtn);
    expect(counterEl.textContent).toBe('5');
    fireEvent.change(inputEl, {
      target: {
        value: "2"
      }
    })
    fireEvent.click(subtractBtn);
    expect(counterEl.textContent).toBe('3');
  })
});