/*
 * @Author: zhangchenyang
 * @Date: 2021-08-09 17:28:54
 * @LastEditors: zhangchenyang
 * @LastEditTime: 2021-08-09 18:25:02
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
