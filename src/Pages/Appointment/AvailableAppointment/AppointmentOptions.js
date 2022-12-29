import React from "react";

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary font-bold text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} spaces
          available
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
