export type UserType = 'customer' | 'provider' | 'admin';
export type OrganizationType = 'govt' | 'ngo' | 'healthcare' | 'private';
export type FacilityType = 'hospital' | 'shelter' | 'supply-center';
export type Priority = 'low' | 'medium' | 'high';
export type Status = 'active' | 'inactive' | 'pending';

export interface User {
  id: string;
  email: string;
  userType: UserType;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: {
    latitude: number;
    longitude: number;
  };
  registrationDate: string;
  status: Status;
  profilePicture?: string;
}

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  contactInfo: string;
  address: string;
  serviceArea: string;
  operationalStatus: Status;
  verificationStatus: Status;
  licenseInfo: string;
}