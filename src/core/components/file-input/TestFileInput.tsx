import React, { useState } from "react";
import FileInput from "./FileInput";

const TestFileInput: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (files: File[]) => {
    setSelectedFiles(files);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">FileInput Examples</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Single File Upload</h2>
        <FileInput
          label="Upload Image"
          accept="image/*"
          maxUploads={1}
          supportedFormats={[".jpg", ".png", ".gif"]}
          onChange={() => {
            /**handleFileChange */
          }}
          className="file-input-primary"
        />
        {selectedFiles.length > 0 && (
          <p>Selected File: {selectedFiles[0].name}</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Multiple File Upload</h2>
        <FileInput
          label="Upload Images"
          accept="image/*"
          maxUploads={3}
          //   onChange={handleFileChange}
          className="file-input-secondary"
          onChange={function (file: File | null): void {
            throw new Error("Function not implemented.");
          }}
        />
        {selectedFiles.length > 0 && (
          <div>
            <p>Selected File(s):</p>
            {selectedFiles.map((file, index) => (
              <p key={index}>{file.name}</p>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Custom File Formats</h2>
        <FileInput
          label="Upload Document"
          accept=".pdf,.doc,.docx"
          maxUploads={1}
          //   onChange={handleFileChange}
          className="file-input-accent"
          onChange={function (file: File | null): void {
            throw new Error("Function not implemented.");
          }}
        />
        {selectedFiles.length > 0 && (
          <p>Selected File: {selectedFiles[0].name}</p>
        )}
      </div>
    </div>
  );
};

export default TestFileInput;
