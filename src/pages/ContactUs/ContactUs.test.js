import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';

import ContactUs from "./ContactUs"

describe("Contact render Page", () => {

  afterEach(cleanup);

  test('renders the Contact page', () => {
    render(<ContactUs />);

    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });

  it('renders 3 input and 1 text box components', () => {
    render(<ContactUs/>);

    expect(screen.getByPlaceholderText(/Full name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your message/i)).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    render(<ContactUs />);

    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeDisabled();
  });

  it('allows the user to submit contact details successfully', async () => {
    render(<ContactUs />);

    await act (async () => {
      fireEvent.change(screen.getByPlaceholderText(/Full name/i), {
        target: {value: 'shaquille'},
      });

      fireEvent.change(screen.getByPlaceholderText(/Email/i), {
        target: {value: 'oatmeal@gmail.com'},
      })

       fireEvent.change(screen.getByPlaceholderText(/Phone number/i), {
        target: {value: '123456789'},
      })

       fireEvent.change(screen.getByPlaceholderText(/Enter your message/i), {
        target: {value: 'Hi, Please contact me'},
      })
    });

    //Submit the form
    await act (async () => {
      fireEvent.submit(screen.getByText("Submit"))
    });

    expect(await screen.findByText("Thank you!")).toBeInTheDocument();
  })
});
