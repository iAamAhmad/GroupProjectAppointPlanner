import { Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
};

function Root() {
    return (
        <div>
            <h1 className="text-3xl mb-7 text-white">Book Your Appointment</h1>
            <nav className="bg-slate-600 rounded-lg ">
                <NavLink to={ROUTES.CONTACTS} >
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} >
                    Appointments
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );

}

export default Root;