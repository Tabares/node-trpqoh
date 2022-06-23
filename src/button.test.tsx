import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  test('calls onClick prop when clicked', () => {
    /**
     *  Jest's Mock functions can be used to test that a callback passed to the function was called, or what it was
     *  called when the event that should trigger the callback function does trigger the bound callback.
     *
     */
    // Arrange
    const handleClick = jest.fn();
    render(
      <Button
        border="none"
        color="green"
        height="200px"
        radius="50%"
        width="200px"
        onClick={handleClick}
      >
        Click Me
      </Button>
    );
    // Action
    fireEvent.click(screen.getByText(/click me/i));
    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
