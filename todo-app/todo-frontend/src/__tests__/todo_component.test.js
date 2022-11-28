import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from '../Todos/Todo'

test('todo component renders correctly', () => {
  const todo = {
    text: 'test text',
    done: false
  }

  render(<Todo todo={todo} />);

  const element = screen.getByText('test text');
  expect(element).toBeDefined();
});