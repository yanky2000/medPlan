import {
  IVisit,
  IPerson,
  IClinic,
  IDoctor,
  IHashMap,
  IPatient,
  IVisitResult
} from "./types/models";

const ids = {
  patient1: "patient1",
  patient2: "patient2",
  doctor1: "doctor1",
  doctor2: "doctor2",
  clinic1: "clinic1",
  clinic2: "clinic2",
  visit1: "visit1",
  visit2: "visit2"
};
export const dumpContacts = {
  email: "1234@mail.ru",
  phone: 12345667
};
const dumpAddress = {
  // email: 'some@mail.ru',
  // phone: 1234,
  country: "Russia",
  city: "Moscow",
  zipCode: 123456,
  street: "Pokrovka 21-14"
};

const dumpPerson: IPerson = {
  firstName: "Ivan",
  lastName: "Morozov",
  gender: "Male",
  address: dumpAddress
};

const dumpPatient: IPatient = {
  ...dumpPerson,
  id: ids.patient1,
  dob: new Date("1980-01-16")
};
// const dumpDoctor: IDoctor = {
//   ...dumpPerson,
//   uid: ids.doctor1,
//   specialization: ['physician'],
//   clinicIds: ['clinic1'],
//   title: 'MD',
//   address: dumpAddress,
// };

// const dumpClinic: IClinic = {
//   clinicId: ids.clinic1,
//   title: 'Good clinic',
//   contacts: dumpAddress,
// };

// const dumpVisitResult: IVisitResult = {
//   visitId: ids.visit1,
//   diagnosis: 'flu',
//   prescriptions: 'stay home for 3 days',
// };
export const dumpVisit = {
  title: "blood test",
  user: "",
  doctor: "",
  clinic: "",
  date: "2020-01-09",
  time: "11:00",
  comments: "some new comments",
  results: []
};

// export const dumpVisit: IVisit = {
//   id: ids.visit1,
//   title: 'visit to dentist one',
//   patiendId: ids.patient1,
//   doctor: dumpDoctor,
//   // doctorId: ids.doctor1,
//   date: '30/07/19',
//   time: '12:00',
//   clinic: dumpClinic,
//   location: dumpClinic,
//   // clinicId: ids.clinic1,
//   results: dumpVisitResult,
// };
// export const doctors: IHashMap<IDoctor> = {
//   fistDoc: {
//     doctorId: 'firstDoc',
//     firstName: 'Ivan',
//     lastName: 'Morozov',
//     specialization: ['physician'],
//     title: 'MD',
//     gender: 'Male',
//     contacts: {
//       email: 'some@mail.ru',
//       phone: 1234,
//       address: {
//         country: 'Russia',
//         city: 'Moscow',
//         zipCode: 123456,
//         street: 'Pokrovka 21-14',
//       },
//     },
//   },
//   secondDoc: dumpDoctor,
// };

// export const clinics: IHashMap<IClinic> = {
//   firstClinic: {
//     clinicId: 'firstClinic',
//     title: 'Best Clinic in the World',
//     contacts: dumpAddress,
//   },
//   secondClinic: dumpClinic,
// };

export const patients: IHashMap<IPatient> = {
  patiend1: dumpPatient,
  patiend2: { ...dumpPatient, firstName: "Sergey" }
};

// export const visits: IHashMap<IVisit> = {
//   [ids.visit1]: dumpVisit,
//   [ids.visit2]: { ...dumpVisit, title: 'physician visits', id: ids.visit2, date: '5/10/19' },
// };
