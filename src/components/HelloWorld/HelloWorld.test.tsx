import { render, screen } from "@testing-library/react";

import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  it("should renders a msg", () => {
    render(<HelloWorld msg="Hello there!" />);

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title")).toHaveTextContent(/Hello there!/i);
  });
});
