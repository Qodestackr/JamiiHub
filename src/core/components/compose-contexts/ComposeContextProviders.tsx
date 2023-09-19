/**
 * ComposeProviders component.
 *
 * Accepts a list of providers to help avoid deep nesting in the App component.
 * It renders the providers in reverse order, allowing you to wrap multiple components
 * around the children without deeply nested JSX.
 *
 * @example
 * ```
 * <ComposeProviders providers={[CompA, { component: CompB, props: { someProp: value } }, CompC]}>
 *   <ChildComponent />
 * </ComposeProviders>
 * ```
 *
 * @param {Object} props - The props object.
 * @param {ProviderType[]} props.providers - An array of providers. Each provider can be a React component or an object with a 'component' property and optional 'props'.
 * @param {ReactNode} props.children - The child elements to be wrapped by the providers.
 * @returns {ReactNode} The child elements wrapped by the providers.
 *
 * @throws {Error} If the provider type is not a function or an object with a 'component' property.
 * @throws {Error} If the 'component' property of the provider is not a valid function component.
 *
 * @example
 * ```
 * import React from 'react';
 *
 * const CompA = ({ children }) => <div className="comp-a">{children}</div>;
 * const CompB = ({ children, someProp }) => <div className="comp-b">{someProp}{children}</div>;
 * const CompC = ({ children }) => <div className="comp-c">{children}</div>;
 *
 * const App = () => {
 *   return (
 *     <ComposeProviders providers={[CompA, { component: CompB, props: { someProp: 'Hello' } }, CompC]}>
 *       <ChildComponent />
 *     </ComposeProviders>
 *   );
 * };
 * ```
 */
import React, { ReactNode } from "react";

type ProviderType =
  | React.ComponentType<any>
  | { component: React.ComponentType<any>; props?: any };

interface ComposeProvidersProps {
  providers: ProviderType[];
  children: ReactNode;
}

const ComposeProviders: React.FC<ComposeProvidersProps> = ({
  providers,
  children,
}) => {
  return providers.reduceRight((acc, provider) => {
    let Comp: React.ComponentType<any>;
    let props: any = {};

    if (typeof provider === "object" && provider.component) {
      Comp = provider.component;
      props = provider.props || {};
    } else if (typeof provider === "function") {
      Comp = provider;
    } else {
      throw new Error(
        "Invalid provider type. Expecting a function or an object with a 'component' property."
      );
    }

    if (typeof Comp !== "function") {
      throw new Error("Invalid provider type. Expecting a function component.");
    }

    return <Comp {...props}>{acc}</Comp>;
  }, children);
};

export default ComposeProviders;
