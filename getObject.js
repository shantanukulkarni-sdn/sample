module.exports = {
     getPatientObject: (PID) => {
          return {
            patient_id : PID.PATIENT_ID,
            patient_name : {
                name : PID.PATIENT_NAME,
                middlename : PID.PATIENT_MIDDLENAME,
                lastname: PID.PATIENT_LASTNAME,
            },
            patient_gender : PID.PATIENT_GENDER,
            patient_address :{
                street_address : PID.PATIENT_ADDRESS.STREET_ADDRESS,
                city: PID.PATIENT_ADDRESS.CITY,
                state: PID.PATIENT_ADDRESS.STATE,
                zip : PID.PATIENT_ADDRESS.ZIP,
            },
            patient_emails :PID.PATIENT_EMAILS,
            patient_ssn : PID.PATIENT_SSN
         };
     },

     getAppointmentObjject : (MSH,SCH) => {
        const {
            getDateIn_MDY,
            getTimeIn_HMS
        } = require("./dateTime");

        return {
            Appointment_date : getDateIn_MDY(SCH.APPOINTMENT_START_DATE),
            Appointment_time:  getTimeIn_HMS(SCH.APPOINTMENT_START_DATE),
            Appointment_id : SCH.FILLER_APPOINTMENT_ID,
            Message_Type: MSH.MESSAGE_TYPE,
            Message_Event:MSH.MESSAGE_TRIGGER_EVENT,
            Appointment_status:SCH.FILLER_STATUS_CODE,
            Clinic_name : MSH.CLINIC_NAME,
        }
     }
}