export interface IPatient extends IPerson {
  id: IUid;
  dob: Date;
}

export interface IDoctor extends IPerson {
  uid: IUid;
  specialization: string;
  title: string;
  clinics: IUid[];
  contacts?: IContact;
}

export type IHashMap<T> = {
  [index: string]: T;
};

export interface IClinic {
  uid: IUid;
  title: string;
  address: IAddress;
  doctors: IUid[];
  contacts: IContact;
  // phone?: IPhoneNumber;
  // email?: IEmailAddress;
}

export interface IVisit {
  uid: IUid;
  title: string;
  patient: IUid;
  doctor: IUid;
  date: string; // TODO: change to Date
  time: string; // TODO: Change?
  clinic: IUid;
  comments?: string;
  results?: IVisitResult;
  files?: Buffer;
}
export type ILocation = IClinic | string;

export interface IVisitResult {
  id: IUid;
  visit: IUid;
  diagnosis: string;
  prescriptions: string;
  prescriptedMedications?: IMedication[];
  addons?: any;
  followUpVisitDate?: Date;
}

export interface IMedication {
  medicationId: IUid;
  title: string;
  prescripedUsage: string;
  dosage: string;
}
export type IUid = string;

export interface IPerson {
  firstName: string;
  lastName: string;
  gender?: IGender;
  address?: IAddress;
}
type IGender = "Male" | "Female";

export interface IContact {
  email: IEmailAddress;
  phone: IPhoneNumber;
}

export interface IAddress {
  country: string;
  city: string;
  state?: string;
  street: string;
  zipCode: number;
}

export interface Test {
  title: string;
  validUntill?: Date;
}
export interface IFile {
  name: string;
}
export interface IUser extends IPerson {
  userId: IUid;
  login: string;
  password: IPassword;
  userData?: any;
  contacts: IContact;
}
export type IPassword = string;

export type IPhoneNumber = number;
export type IEmailAddress = string;
