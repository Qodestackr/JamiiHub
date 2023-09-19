import React from "react";

export interface IComposeProviderOptions<T>{
    providers?: T[];
    children: React.ReactNode;
}