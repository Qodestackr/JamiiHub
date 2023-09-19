export interface IDAO_Organization {
  name: string | undefined;
  location: {
    //
  };
  industy: string; // have a list of industries,
  country: string;
}

export interface IOrganizationProfile {
  // change password function
  // change profile function
  // delete account profile
  // change subscription type function
  // Edit: (Name, email, phone)
}

export interface IOrganizationTypeOption {
  name: string;
  description: string;
  optionId?: string;
}
