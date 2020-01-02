import React from 'react';
import { useForm } from './useForm';
import { connect } from 'react-redux';
import { addVisit } from '../features/visitsReducer';

const mapDispatch = { addVisit };

const NewEventForm = ({addVisit}) => {
  // const [values, changeHandler] = useForm();

  const clickHandler = () => addVisit('some')

  return (
    <>
  <h1>hello for add</h1>;
  <button onClick={clickHandler}>click</button>
  </>)
};

export default connect(null, mapDispatch)(NewEventForm)

//     <div>
//       <h1>Add New Event</h1>
//       <ul>
//         <li>
//           <label htmlFor="title">Event title:</label>
//           <input
//             id="title"
//             value={values.title}
//             type="text"
//             name="title"
//             onChange={changeHandler}
//             placeholder="event title"
//           />
//         </li>
//         <li>a
//           <label htmlFor="date">Event date:</label>
//           <input
//             id="date"
//             type="date"
//             name="date"
//             onChange={changeHandler}
//             placeholder="event date"
//           />
//         </li>

//         {/* TODO: input time separately from date */}
//         <li>
//           <label htmlFor="location">Event location:</label>
//           <input
//             id="location"
//             type="text"
//             name="location"
//             onChange={changeHandler}
//             placeholder="event location"
//           />
//         </li>
//         <li>
//           <label htmlFor="doctor">Event doctor:</label>
//           <input
//             id="doctor"
//             type="text"
//             name="doctor"
//             onChange={changeHandler}
//             placeholder="event doctor"
//           />
//         </li>
//         <li>
//           <label htmlFor="comments">Event comments:</label>
//           <textarea
//             rows="4"
//             cols="40"
//             id="comments"
//             name="comments"
//             onChange={changeHandler}
//             placeholder="event comments"
//           />
//         </li>
//       </ul>
//     </div>
//   );
// };
