import { IVisit, IClinic, IDoctor, IHashMap } from './src/models';

// export const visits: IVisit[] = [
//   {
//     visitId: '1',
//     title: 'dental checkup',
//     doctor: 'Ivanov',
//     date: '30/07/19',
//     location: 'Moscow',
//     requirements: '',
//   },
//   {
//     visitId: 2,
//     title: 'Eye checkup',
//     doctor: 'Petrov',
//     date: '12/08/19',
//     location: 'Moscow',
//     requirements: '',
//   },
//   {
//     visitId: 3,
//     title: 'Eye checkup',
//     doctor: 'SvisitIdorov',
//     date: '12/11/19',
//     location: 'Moscow',
//     requirements: 'heart checks',
//   },
// ];

export const doctors: IHashMap<IDoctor> = {
  fistDoc: {
    doctorId: 'firstDoc',
    firstName: 'Ivan',
    lastName: 'Morozov',
    specialization: ['physician'],
    title: 'MD',
    gender: 'Male',
    contacts: {
      email: 'some@mail.ru',
      phone: 1234,
      address: {
        country: 'Russia',
        city: 'Moscow',
        zipCode: 123456,
        address: 'Pokrovka 21-14',
      },
    },
  },
};

export const clinics: IHashMap<IClinic> = {
  firstClinick: {
    
  }
};
