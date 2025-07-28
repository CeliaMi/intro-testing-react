import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

beforeEach(()=>{
  render(<App/>);
})

test('renders the App component with the counter', () => {
    const countElement = screen.getByText(/count is/i);
    expect(countElement).toBeDefined();

  })

test('increments the counter value when the button is clicked', () => {
    const countElement = screen.getByText(/count is/i);
    fireEvent.click(countElement);
    const countNumber = screen.getByText(/1/i)
    expect(countNumber).toBeDefined();

  })