import React, { ErrorInfo } from "react";

// type Error<V, E> = {
//   data: V | null
//   error: E | null
// }

export interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  showDialog?: boolean;
  dialogOptions?: any;
  onError?: (error: Error, componentStack: string) => void;
  onMount?: () => void;
  onUnmount?: () => void;
  beforeCapture?: (scope: any, error: ErrorInfo) => void;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  componentStack: string | null;
}
