import { combineReducers } from 'redux';
import appointmentSlice from '../redux/appoinmentSlice';
import contactsSlice from '../redux/contactSlice';

const rootReducer = combineReducers({
    appointments: appointmentSlice,
    contacts: contactsSlice,
});

export default rootReducer;