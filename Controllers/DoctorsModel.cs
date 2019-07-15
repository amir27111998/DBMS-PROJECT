using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project.Controllers
{
    public class DoctorsModel
    {
        public int ID { get; set; }
        public string NAME { get; set; }
        public string FATHER_NAME { get; set; }
        public string DESCRIPTION { get; set; }
        public string EDUCATIONAL_INSTITUTE { get; set; }
        public int EXPERIENCE { get; set; }
        public string EMAIL { get; set; }
        public string MEDICAL_CERTIFICATE { get; set; }
        public int AGE { get; set; }
        public string GENDER { get; set; }
        public string ADDRESS { get; set; }
        public string PASSWORD { get; set; }
        public string PICTURE { get; set; }
        public string CONTACT { get; set; }
        public int SPECIALIZATION_ID { get; set; }
        public int DISTRICT_ID { get; set; }
        public string SPECIALIZATION { get; set; }
        public string DISTRICT { get; set; }
        public IFormFile PICTURE_2 { get; set; }
    }

    public class ListOfAppointments {
        public int ID { get; set; }
        public string APP_DATETIME { get; set; }
        public string NAME { get; set; }
        public string EMAIL { get; set; }
        public string PICTURE { get; set; }
        public int AGE { get; set; }
        public string BLOOD_GROUP { get; set; }
        public string CONTACT { get; set; }
        public string TAGS { get; set; }
    }


    public class Timings
    {
        public int ID { get; set; }
        public string START_TIME { get; set; }
        public string END_TIME { get; set; }
        public int DISTRICT_ID { get; set; }
        public int DOCTOR_ID { get; set; }
        public string ADDRESS { get; set; }
        public int AMOUNT { get; set; }
        public string DAYS { get; set; }
    }


    public class FeedsDoctor {
        public int ID { get; set; }
        public int APPOINTMENT_ID { get; set; }
        public string COMMENTS { get; set; }
        public int RATING { get; set; }
        public string NAME { get; set; }
    }


    public class visitedpatients
    {
        public string NAME { get; set; }
    }

    public class numberpatients
    {
        public int Count { get; set; }
    }

    public class avgrating
    {
        public float rating { get; set; }
    }

    public class besttimings
    {
        public string START_TIME { get; set; }
        public string END_TIME { get; set; }
    }

}
