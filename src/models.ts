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
  // clinicId: IUid;
  clinic: IClinic;
  comments?: string;
  results?: IVisitResult;
}
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
  gender: IGender;
  contacts: IContact;
}
type IGender = 'Male' | 'Female';

export interface IContact {
  address: IAddress;
  email: string;
  phone: number;
}

export interface IAddress {
  country: string;
  city: string;
  state?: string;
  address: string;
  zipCode: number;
}

type IAge = number;
