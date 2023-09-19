import React from "react";
import { render } from "@testing-library/react";
// Import the necessary matchers from @testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import ComposeContextProviders from "./ComposeContextProviders";

// Dummy components for testing
const CompA = ({ children }: { children: React.ReactNode }) => (
  <div className="comp-a">{children}</div>
);

const CompB = ({
  children,
  someProp,
}: {
  children: React.ReactNode;
  someProp: string;
}) => (
  <div className="comp-b">
    {someProp}
    {children}
  </div>
);

describe("ComposeContextProviders", () => {
  it("renders child component without providers", () => {
    const { getByText } = render(
      <ComposeContextProviders providers={[]}>
        <div>Child Component</div>
      </ComposeContextProviders>
    );

    expect(getByText("Child Component")).toBeInTheDocument();
  });

  it("renders child component wrapped by multiple providers", () => {
    const { getByText } = render(
      <ComposeContextProviders
        providers={[CompA, { component: CompB, props: { someProp: "Hello" } }]}
      >
        <div>Child Component</div>
      </ComposeContextProviders>
    );

    // The child component should be wrapped in the order CompA -> CompB
    expect(getByText("Child Component")).toHaveClass("comp-a");
    expect(getByText("Hello")).toHaveClass("comp-b");
  });

  it("throws an error if a provider is not a function or an object", () => {
    expect(() => {
      render(
        // @ts-ignore: Testing invalid provider type
        <ComposeContextProviders providers={[123]}>
          <div>Child Component</div>
        </ComposeContextProviders>
      );
    }).toThrowError(
      "Provider must be a function or an object with a 'component' property"
    );

    expect(() => {
      render(
        // @ts-ignore: Testing invalid provider type
        <ComposeContextProviders providers={[null]}>
          <div>Child Component</div>
        </ComposeContextProviders>
      );
    }).toThrowError(
      "Provider must be a function or an object with a 'component' property"
    );
  });

  it("throws an error if the 'component' property of a provider is not a valid function component", () => {
    expect(() => {
      render(
        <ComposeContextProviders
          providers={[
            // @ts-ignore: Testing invalid 'component' property type
            { component: "InvalidComponent" },
          ]}
        >
          <div>Child Component</div>
        </ComposeContextProviders>
      );
    }).toThrowError(
      "Provider 'component' property must be a valid function component"
    );
  });
});
