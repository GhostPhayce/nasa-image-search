import { render } from '@testing-library/react';
import Search from "../components/Search";

it("renders Search component", () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
});