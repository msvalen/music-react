import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {

  beforeEach(() => {
    render(<App />);
  });

  test("renders story headlines", () => {
    const headlines = screen.getByRole('heading',{level:1});
    expect(headlines.textContent).toContain("Playlist");
  });

});