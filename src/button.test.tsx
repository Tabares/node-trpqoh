import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

// Main subject to test (component, function, class, service, etc), please add only the name omit parentesis and arguments to avoid executions.
describe('Button', () => {
  // First branch or case, in order to cover all the branches of the code
  describe('when onClick', () => {
    // Statement of the assertion
    test('calls function prop', () => {
      /**
       * Learning:
       *
       *  ByText
       *  getByText, queryByText, getAllByText, queryAllByText, findByText, findAllByText
       *  This will search for all elements that have a text node with textContent matching the given TextMatch.
       *
       *  Mocks
       *  Jest's Mock functions can be used to test that a callback passed to the function was called, or what it was
       *  called when the event that should trigger the callback function does trigger the bound callback.
       *
       *  The AAA pattern
       *  Arrange:
       *  So the arrange section you only have code required to setup that specific test. Here objects would be created,
       *  mocks setup (if *  you are using one) and potentially expectations would be set.
       *  This section could be omitted is the initial setup is implicit.
       *
       *  Act:
       *  the Act, which should be the invocation of the method being tested, also includes events and any instance that is triggering
       *  executions.
       *
       *  Assertion:
       *  Would simply check whether the expectations were met.
       *
       *  Increase Readability
       *  Use the describe blocks to provide a better self documentation and story telling of the component. The log would be like this:
       *   ● Button › when onClick › calls function prop
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
      const clickButton = screen.getByText(/click me/i);
      // Action
      fireEvent.click(clickButton);
      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
  // Second branch or case, in order to cover all the branches of the code
  describe('when onDoubleClick', () => {
    // Statement of the assertion, in this case the statement is duplicated, because the difference is provided in the drescibe
    test('calls function prop', () => {
      // Arrange
      const handleClick = jest.fn();
      render(
        <Button
          border="none"
          color="green"
          height="200px"
          radius="50%"
          width="200px"
          onDoubleClick={handleClick}
        >
          Double Click Me
        </Button>
      );
      const doubleClickButton = screen.getByText(/double click me/i);
      // Action
      fireEvent.doubleClick(doubleClickButton);
      // Assert
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
