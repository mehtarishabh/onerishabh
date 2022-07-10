import React from 'react'
import { render, fireEvent, getByTestId, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

import App from "./App";

it('should navigate to the contact page', async()=> {
  // render(
  //     <App initialEntries={['/contact']} />
  //   );
  // act(() => {
  //   fireEvent.click(getByTestId('menu-link'))
  // });
  
  // act(() => {
  //   // Find the link (perhaps using the text content)
  //   const goHomeLink = document.querySelector('#click-me');
  //   // Click it
  //   goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));

  //   fireEvent.click(getByTestId('menu-link'))
  // });
})

// it('should navigate to the contact page', ()=> {
//   const { container } = render(<App />)

//   fireEvent.click(getByTestId('menu-link'))

//   const contact_title = getByTestId('contact-title');

//   expect(container).toContainElement(contact_title);
// })
