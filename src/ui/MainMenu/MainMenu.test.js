import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import MainMenu from './MainMenu'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

it('should render the main menu with links after clicking menu', () => {

  const { container } = renderWithRouter(<MainMenu />)
  
  fireEvent.click(screen.getByTestId('menu-link'))

  const home_link = screen.getByTestId('home-link');
  expect(container).toContainElement(home_link);

  const about_link = screen.getByTestId('about-link');
  expect(container).toContainElement(about_link);

  const contact_link = screen.getByTestId('contact-link');
  expect(container).toContainElement(contact_link);
})

it('should not render the main menu with links before clicking menu', () => {

  const { container } = renderWithRouter(<MainMenu />)

  const home_link = screen.queryByTestId('home-link');
  expect(container).not.toContainElement(home_link);

  const about_link = screen.queryByTestId('about-link');
  expect(container).not.toContainElement(about_link);

  const contact_link = screen.queryByTestId('contact-link');
  expect(container).not.toContainElement(contact_link);
})

