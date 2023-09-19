export interface IErrorResponse {
  statusCode: number;
  errorMessages: string[];
  timestamp: number;
}

export interface IChangePasswordProps {
  oldPassword: string;
  newPassword: string;
}

export interface IProfileQueryResponse {
  // Mirror Backend Query Response
  companyName?: string;
}

export interface CreateProfilePayload {
  profilePicture?: string;
  timezone?: string /**| ITimezone **/;
  businessType?: string;
  phoneNumber: string;
  branches: any[]; // list of locations
  nationality?: string;
  companyName?: string;
  linkedinUrl: string;
}
