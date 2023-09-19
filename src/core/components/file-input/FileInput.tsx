import React, { useRef, ChangeEvent } from "react";
import clsx from "clsx";
import { cn } from "@core/utils/styles/classnames";

interface FileInputProps {
  label: string;
  id?: string;
  accept?: string;
  maxUploads?: number;
  supportedFormats?: string[];
  onChange: (file: File | null) => void;
  className?: string;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  id,
  accept,
  maxUploads = 1,
  supportedFormats = [],
  onChange,
  className,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      onChange(null);
      return;
    }

    const selectedFile = files[0];
    const isValidFormat =
      supportedFormats.length === 0 ||
      supportedFormats.includes(selectedFile.type);

    if (files.length > maxUploads || !isValidFormat) {
      event.target.value = "";
      onChange(null);
      return;
    }

    onChange(selectedFile);
  };

  const containerClasses = clsx("relative", className);
  const inputClasses = clsx(
    "form-control",
    "file-input",
    "w-full",
    "max-w-xs",
    "cursor-pointer",
    "opacity-0",
    "absolute",
    "top-0",
    "left-0"
  );

  return (
    <div className={containerClasses}>
      <label htmlFor={id || label} className="cursor-pointer">
        {label}
      </label>
      <input
        id={id || label}
        type="file"
        accept={accept}
        ref={fileInputRef}
        onChange={handleFileChange}
        className={inputClasses}
        aria-invalid={maxUploads > 1}
        aria-describedby={`${id || label}-error`}
        multiple={maxUploads > 1}
      />
      {maxUploads > 1 && (
        <div
          id={`${id || label}-error`}
          role="alert"
          aria-live="polite"
          className="text-red-500 text-sm mt-1"
        >
          Maximum {maxUploads} file(s) allowed.
        </div>
      )}
    </div>
  );
};

export default FileInput;
