export interface IPatient extends IPerson {
  patientId: IUid;
  age: IAge;
}

export interface IDoctor extends IPerson {
  doctorId: IUid;
  specialization: string[] | string;
  title: string;
  age?: IAge;
}

export type IHashMap<T> = {
  [index: string]: T;
};

export interface IClinic {
  clinicId: IUid;
  title: string;
  contacts: IContact;
}

export interface IVisit {
  visitId: IUid;
  title: string;
  patiendId: IUid;

  // doctorId: IUid;
  doctor: IDoctor;
  date: string; // TODO: change to Date
  time: string; // TODO: Change?
  location: ILocation;
  clinic: IClinic;
  comments?: string;
  results?: IVisitResult;
}
export type ILocation = IClinic | string
export interface IVisitResult {
  visitId: IUid;
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
  contacts: IContact;
}
type IGender = 'Male' | 'Female';

export interface IContact {
  address?: IAddress;
  email: string;
  phone: number;
}

export interface IAddress {
  country: string;
  city: string;
  state?: string;
  street: string;
  zipCode: number;
}

type IAge = number;

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
  avatar?: any;
}
export type IPassword = string;
