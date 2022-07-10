import { render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

test('renders sideMenu component', () => {
  render(<SideMenu />);

  [
    "Skills",
    'Work Exp', 
    'Education', 
    'Accolades', 
    'Certifications'
  ].forEach((item) => {
    const element = screen.getByText(item);
    expect(element).toBeInTheDocument();
  })
});
