import React, { ErrorInfo, ReactNode, useState, useEffect } from "react";
import * as Sentry from "@sentry/react";
import { cn } from "@core/utils/styles/classnames";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
  showDialog?: boolean;
  dialogOptions?: any;
  onError?: (error: Error, componentStack: string) => void;
  beforeCapture?: (scope: Sentry.Scope, errorInfo: ErrorInfo) => void;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
  children,
  fallback,
  showDialog = false,
  dialogOptions,
  onError,
  beforeCapture,
}) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const errorHandler = (
      message: string,
      source: string,
      lineNo: number,
      colNo: number,
      error: Error
    ) => {
      setError(error);
      setHasError(true);

      reportErrorToSentry(error);
    };

    const prevWindowErrorHandler = window.onerror;
    /**
   *  // @ts-ignore
  window.onerror = errorHandler;
   */
    (window as any).onerror = errorHandler;

    return () => {
      window.onerror = prevWindowErrorHandler;
    };
  }, []);

  useEffect(() => {
    if (hasError && showDialog) {
      Sentry.showReportDialog({
        ...dialogOptions,
        error,
      });
    }
  }, [hasError, showDialog, dialogOptions, error]);

  const reportErrorToSentry = (error: Error) => {
    if (beforeCapture) {
      Sentry.withScope((scope) => {
        beforeCapture(scope, {
          componentStack: "",
        });
        Sentry.captureException(error);
      });
    } else {
      Sentry.captureException(error);
    }

    if (onError) {
      onError(error, "");
    }
  };

  return hasError ? fallback : children;
};

export default ErrorBoundary;
