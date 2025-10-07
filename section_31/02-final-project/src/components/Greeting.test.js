import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting component', () => {
	test('renders Hello World', () => {
		// Arrange
		render(<Greeting />);
		// Act
		// Assert
		const element = screen.getByText('Hello World!');
		expect(element).toBeInTheDocument();
	});

	test('renders good to see you if the button was NOT clicked', () => {
		// Arrange
		render(<Greeting />);
		const element = screen.getByText('good to see you', { exact: false });
		// Act
		// Assert
		expect(element).toBeInTheDocument();
	})

	test('renders Changed if the button was clicked', () => {
		// Arrange
		render(<Greeting />);
		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);
		// Assert
		const element = screen.getByText('Changed!');
		expect(element).toBeInTheDocument();
	})

	test('does not render good to see you if the button was clicked', () => {
		// Arrange
		render(<Greeting />);
		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);
		// Assert
		const element = screen.queryByText('good to see you', { exact: false });
		expect(element).toBeNull();
	})
})
