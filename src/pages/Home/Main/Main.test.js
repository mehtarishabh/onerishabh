import { render, screen } from '@testing-library/react';

import Main from './Main';

test('renders name correctly', async () => {
  const props = { "name": "Rishabh Mehta" };
  render(<Main {...props} />);

  const element = await screen.findByText(/Rishabh Mehta/);

  expect(element).toBeInTheDocument();
});
