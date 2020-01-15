export interface IPatient extends IPerson {
  id: IUid;
  dob: Date;
}

export interface IDoctor extends IPerson {
  _id: IUid;
  specialization: string;
  title: string;
  clinics: IUid[];
  comments?: string;
}

export type IHashMap<T> = {
  [index: string]: T;
};

export interface IClinic {
  _id: string;
  uid?: IUid;
  title: string;
  address: IAddress;
  doctors: IUid[];
  contacts: IContact;
}

export interface IVisit {
  _id: IUid;
  title: string;
  user: IUid;
  doctor: IUid;
  date: Date; // TODO: change to Date
  time: string; // TODO: Change?
  clinic: IUid;
  comments?: string;
  results?: IVisitResult[];
  files?: Buffer;
}
export type ILocation = IClinic | string;

export interface IVisitResult {
  id: IUid;
  visit: IUid;
  diagnosis: string;
  prescriptions: string;
  // prescriptedMedications?: IMedication[];
  // files?: any;
  // followUpVisitDate?: Date;
}

export interface IMedication {
  medicationId: IUid;
  title: string;
  prescribedUsage: string;
  dosage: string;
}
export type IUid = string;

export interface IPerson {
  firstName: string;
  lastName: string;
  fullName: string; // TODO: move to server virtual
  gender?: IGender;
  contacts?: Partial<IContact>;
  address?: IAddress;
}
type IGender = "Male" | "Female";

export interface IContact {
  email: IEmailAddress;
  phone: IPhoneNumber;
}

export interface IAddress {
  country?: string;
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
  _id: IUid;
  login: string;
  password: IPassword;
  // userData?: any;
  visits?: IVisit[];
  results?: IVisitResult[];
}
export type IPassword = string;

export type IPhoneNumber = string;
export type IEmailAddress = string;
export type INoId<M> = Pick<M, Exclude<keyof M, "_id">>;
export type IPropsObj = Partial<IClinic> | Partial<IDoctor>;
