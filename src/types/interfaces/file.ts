/*** Allow members to upload their work to IPFS */

export type FileType =
  | "pdf"
  | "docx"
  | "csv"
  | "txt"
  | "jpg"
  | "jpeg"
  | "png"
  | "gif"
  | "bmp"
  | "tiff"
  | "svg"
  | "webp"
  | "pptx"
  | "xls"
  | "xlsx"
  | "zip"
  | "rar"
  | "7z"
  | "tar"
  | "gz"
  | "mp3"
  | "wav"
  | "ogg"
  | "mp4"
  | "avi"
  | "mov"
  | "wmv"
  | "flv"
  | "mkv";

export interface IFile {
  fileName: string;
  fileSize: number;
  fileType: FileType;
  fileContent: Blob; // Content of the file as a Blob object
  downloadFile: () => void;

  // get a URL representing the file content (useful for displaying file previews)
  getFileURL: () => string;

  // check if the file is of a specific type
  isFileType: (type: FileType) => boolean;

  // get the file size as a human-readable string (e.g., "1.5 MB")
  getHumanReadableFileSize: () => string;
}

const FILE_SIZE_FIVE_MB = 5 * 1024 * 1024;

// Example usage:
const sampleFile: IFile = {
  fileName: "sample.pdf",
  fileSize: FILE_SIZE_FIVE_MB,
  fileType: "pdf",
  fileContent: new Blob(),

  downloadFile: () => {
    // Example: window.open(sampleFile.getFileURL(), "_blank");
  },

  getFileURL: () => {
    //get the URL representing the file content
    // Example: return URL.createObjectURL(sampleFile.fileContent);
    return "";
  },

  isFileType: (type: FileType) => {
    //check if the file is of a specific type
    return sampleFile.fileType === type;
  },

  getHumanReadableFileSize: () => {
    //convert file size to human-readable format (e.g., "1.5 MB")
    const units = ["B", "KB", "MB", "GB", "TB"];
    let size = sampleFile.fileSize;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return size.toFixed(1) + " " + units[unitIndex];
  },
};
