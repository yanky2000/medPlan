export interface IDoctor extends IPerson {
  doctorId: IUid;
  specialization: string[] | string;
  title: string;
}
export interface IClinic {
  clinicId: IUid;
  title: string;
  contacts: IContact;
}

export interface IVisit {
  visitId: IUid;
  patiendId: IUid;
  doctorId: IUid;
  date: Date;
  time: string; // TODO: Change?
  clinicId: IUid;

  results: IVisitResults;
}

export interface IVisitResults {
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
  age: IGender;
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
