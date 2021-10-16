import { render } from '@testing-library/react';
import App from "../components/App";

it("renders App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
