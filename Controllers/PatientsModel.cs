using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Controllers
{
    public class PatientsModel
    {
        public int ID { get; set; }
        public string NAME { get; set; }
        public string FATHER_NAME { get; set; }
        public string EMAIL { get; set; }
        public string AGE { get; set; }
        public string GENDER { get; set; }
        public string ADDRESS { get; set; }
        public string PASSWORD { get; set; }
        public string PICTURE { get; set; }
        public string DOB { get; set; }
        public string CONTACT { get; set; }
        public string BLOOD_GROUP { get; set; }
        public IFormFile PICTURE_2 { get; set; }
    }


    public class DOCTORS
    {
        public int ID { get; set; }
        public string NAME { get; set; }
        public string FATHER_NAME { get; set; }
        public string DESCRIPTION { get; set; }
        public string EDUCATIONAL_INSTITUTE { get; set; }
        public int EXPERIENCE { get; set; }
        public string EMAIL { get; set; }
        public string MEDICAL_CERTIFICATE { get; set; }
        public string AGE { get; set; }
        public string GENDER { get; set; }
        public string ADDRESS { get; set; }
        public string PASSWORD { get; set; }
        public string PICTURE { get; set; }
        public string CONTACT { get; set; }
        public int SPECIALIZATION_ID { get; set; }
        public int DISTRICT_ID { get; set; }
        public string SPECIALIZATION { get; set; }
        public string DISTRICT { get; set; }
    }


    public class DoctorTimings{
        public int ID { get; set; }
        public string START_TIME { get; set; }
        public string END_TIME { get; set; }
        public int DISTRICT_ID { get; set; }
        public int DOCTOR_ID { get; set; }
        public string DOCTOR_NAME { get; set; }
        public string DISTRICT { get; set; }
        public string ADDRESS { get; set; }
        public int AMOUNT { get; set; }
        public string DAYS { get; set; }
    }


    public class Appointments
    {
        public int ID { get; set; }
        public string APP_DATETIME { get; set; }
        public string DOCTOR_NAME { get; set; }
        public string TAG { get; set; }
        
    }

    public class Feedbacks
    {
        public string COMMENT { get; set; }
        public int RATING { get; set; }
        public string DOCTOR_NAME { get; set; }

    }


    public class Feeds
    {
        public string COMMENT { get; set; }
        public int RATING_ID { get; set; }
        public int APPOINTMENT_ID { get; set; }

    }


    public class DOCTORS_SCHEDULE
    {
        public int ID { get; set; }
        public string START_TIME { get; set; }
        public string END_TIME { get; set; }

    }

    public class filterAppointments
    {
        public int ID { get; set; }
        public string APP_DATETIME { get; set; }
    }

    public class BookingAppointments {
        public string App_DATETIME { get; set; }
        public int PATIENTS_ID { get; set; }
        public int DOCTORS_ID { get; set; }
        public int STATUS_ID { get; set; }
    }

    public class Prescription {
        public int ID { get; set; }
        public String FILE_NAME { get; set; }
        public int APPOINTMENT_ID { get; set; }
    }

    public class Districts
    {
        public int ID { get; set; }
        public string DISTRICT { get; set; }
    }

    public class Specialization
    {
        public int ID { get; set; }
        public string SPECIALIZATION { get; set; }
    }


}
