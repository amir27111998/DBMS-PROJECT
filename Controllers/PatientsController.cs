using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientsController : ControllerBase
    {
        MySqlConnection connection = new MySqlConnection(Connection.stringConnection);
        // GET: api/Patients
      /*  [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Patients/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Patients
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }*/

        //Login Methods
        [HttpPost("Login")]
        public PatientsModel Login([FromForm] string data)
        {

            //List<PatientsModel> li=new List<PatientsModel>();

            var attr = data.Split(',');
            PatientsModel model = new PatientsModel();
            try
            {
                string query = "SELECT * FROM PATIENTS WHERE EMAIL='" + attr[0] + "' and P_PASSWORD='" + attr[1] + "' ";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                if (reader.Read())
                {

                    model.ID = reader.GetInt16("ID");
                    model.NAME = reader.GetString("Name");
                    model.FATHER_NAME = reader.GetString("FATHER_NAME");
                    model.EMAIL = reader.GetString("EMAIL");
                    model.AGE = reader.GetString("AGE");
                    model.GENDER = reader.GetString("GENDER");
                    model.ADDRESS = reader.GetString("ADDRESS");
                    model.PASSWORD = reader.GetString("P_PASSWORD");
                    model.PICTURE = reader.GetString("PICTURE");
                    model.DOB = reader.GetString("DOB");
                    model.CONTACT = reader.GetString("CONTACT");
                    model.BLOOD_GROUP = reader.GetString("BLOOD_GROUP");
                    //li.Add(model);
                }
                connection.Close();
                return model;
            }
            catch (Exception e) {

                return model;
            }

        }
        //Dashboard Data
        [HttpPost("AppointmentData")]
        public IEnumerable<Appointments> AppointmentData([FromForm] int id) {
            List<Appointments> listOfApp = new List<Appointments>();
            try {
                string query = "SELECT APPOINTMENTS.ID,APPOINTMENTS.APP_DATETIME,DOCTORS.NAME,APPOINTMENT_STATUS.TAGS FROM `APPOINTMENTS` INNER JOIN DOCTORS INNER JOIN APPOINTMENT_STATUS ON APPOINTMENTS.DOCTORS_ID=DOCTORS.ID and APPOINTMENTS.STATUS_ID = APPOINTMENT_STATUS.ID WHERE APPOINTMENTS.PATIENTS_ID = '" + id + "'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    Appointments app = new Appointments();
                    app.ID = reader.GetInt16("ID");
                    app.APP_DATETIME = reader.GetString("APP_DATETIME");
                    app.DOCTOR_NAME = reader.GetString("NAME");
                    app.TAG = reader.GetString("TAGS");
                    listOfApp.Add(app);
                }

                connection.Close();
                return listOfApp;
            }
            catch (Exception e)
            {
                return listOfApp;
            }
        }

        [HttpGet("Feedbacks/{id}")]
        public IEnumerable<Feedbacks> Feedbacks(int id) {
            string query = "Select FEEDBACK.COMMENTS,RATINGS.RATING,DOCTORS.NAME"+ 
                            " from FEEDBACK"+
                            " INNER JOIN RATINGS"+
                            " INNER Join APPOINTMENTS"+
                            " INNER JOIN DOCTORS"+
                            " ON FEEDBACK.RATING_ID = RATINGS.ID"+
                            " AND FEEDBACK.APPOINTMENT_ID = APPOINTMENTS.ID"+
                            " AND APPOINTMENTS.DOCTORS_ID = DOCTORS.ID"+
                            " WHERE APPOINTMENTS.PATIENTS_ID = '"+id+"' ";
            List<Feedbacks> feedList = new List<Feedbacks>();
            try {
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    Feedbacks model = new Feedbacks()
                    {
                        COMMENT = reader.GetString("COMMENTS"),
                        RATING = reader.GetInt16("RATING"),
                        DOCTOR_NAME=reader.GetString("NAME")
                    };

                    feedList.Add(model);
                }
                connection.Close();
                return feedList;
            }
            catch (Exception e) {
                return feedList;
            }
            
        }


        [HttpPost("ForgetPassword")]
        public int ForgetPassword([FromForm] string data) {
            try {
                var attr = data.Split(',');
                string query = "UPDATE PATIENTS SET P_PASSWORD='" + attr[1] + "' WHERE EMAIL='" + attr[0] + "'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                int result = cmd.ExecuteNonQuery();
                connection.Close();
                if (result!=0) {
                    return 1;
                }
                return 0;
            }
            catch (Exception e) {
                return 0;
            }

        }
        [HttpPost("CancelAppointment")]
        public int CancelStatus([FromForm] int id) {
            try {
                connection.Open();
                string query = "UPDATE APPOINTMENTS SET STATUS_ID='4' WHERE ID='"+id+"'";
                MySqlCommand cmd = new MySqlCommand(query,connection);
                int result = cmd.ExecuteNonQuery();
                connection.Close();
                if (result!=0)
                {
                    return 1;
                }
                return 0;
            }
            catch(Exception e)
            {
                return 0;
            }
        }


        [HttpGet("VisitedDoctors/{id}")]
        public IEnumerable<DOCTORS> VisitedDoctors(int id)
        {
            List<DOCTORS> doctor = new List<DOCTORS>();
            try
            {
                connection.Open();
                string query = "SELECT DISTINCT DOCTORS.*,DOCTORS_SPECIALIZATION.SPECIALIZATION,DISTRICTS.DISTRICT "+
                "FROM DOCTORS "+
                "INNER JOIN DOCTORS_SPECIALIZATION "+
                "INNER JOIN DISTRICTS "+
                "INNER JOIN APPOINTMENTS "+
                "ON "+
                "DOCTORS.SPECIALIZATION_ID = DOCTORS_SPECIALIZATION.ID and "+
                "DOCTORS.DISTRICT_ID = DISTRICTS.ID and "+
                "APPOINTMENTS.DOCTORS_ID = DOCTORS.ID "+
                "WHERE "+
                "APPOINTMENTS.STATUS_ID='3' and " +
                "APPOINTMENTS.PATIENTS_ID = '"+id+"'";
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    DOCTORS model = new DOCTORS();
                    model.ID = reader.GetInt16("ID");
                    model.NAME = reader.GetString("Name");
                    model.FATHER_NAME = reader.GetString("FATHER_NAME");
                    model.EMAIL = reader.GetString("EMAIL");
                    model.DESCRIPTION = reader.GetString("DESCRIPTION");
                    model.EDUCATIONAL_INSTITUTE = reader.GetString("EDUCATIONAL_INSTITUTE");
                    model.AGE = reader.GetString("AGE");
                    model.GENDER = reader.GetString("GENDER");
                    model.EXPERIENCE = reader.GetInt16("EXPERIENCE");
                    model.PASSWORD = reader.GetString("D_PASSWORD");
                    model.CONTACT = reader.GetString("CONTACT");
                    model.ADDRESS = reader.GetString("ADDRESS");
                    model.PICTURE = reader.GetString("PICTURE");
                    model.SPECIALIZATION = reader.GetString("SPECIALIZATION");
                    model.DISTRICT = reader.GetString("DISTRICT");
                    doctor.Add(model);
                }
                
                connection.Close();
                return doctor;
                
            }
            catch (Exception e)
            {
                return doctor;
            }
        }

        //Doctors list
        [HttpGet("ListDoctors")]
        public IEnumerable<DOCTORS> ListDoctors()
        {
            List<DOCTORS> doctor = new List<DOCTORS>();
            try
            {
                connection.Open();
                /*string query = "SELECT DOCTORS.*,DOCTORS_SPECIALIZATION.SPECIALIZATION,DISTRICTS.DISTRICT " +
                "FROM DOCTORS " +
                "INNER JOIN DOCTORS_SPECIALIZATION " +
                "INNER JOIN DISTRICTS " +
                "ON " +
                "DOCTORS.SPECIALIZATION_ID = DOCTORS_SPECIALIZATION.ID and " +
                "DOCTORS.DISTRICT_ID = DISTRICTS.ID";*/
                string query = "SELECT DOCTORS.*,DOCTORS_SPECIALIZATION.SPECIALIZATION,DISTRICTS.DISTRICT "+
                "FROM DOCTORS "+
                "INNER JOIN DOCTORS_SPECIALIZATION "+
                "INNER JOIN DISTRICTS "+
                "ON "+
                "DOCTORS.SPECIALIZATION_ID = DOCTORS_SPECIALIZATION.ID AND "+
                "DOCTORS.DISTRICT_ID = DISTRICTS.ID  "+
                "group BY DOCTORS.ID";
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    DOCTORS model = new DOCTORS();
                    model.ID = reader.GetInt16("ID");
                    model.NAME = reader.GetString("Name");
                    model.FATHER_NAME = reader.GetString("FATHER_NAME");
                    model.EMAIL = reader.GetString("EMAIL");
                    model.DESCRIPTION = reader.GetString("DESCRIPTION");
                    model.EDUCATIONAL_INSTITUTE = reader.GetString("EDUCATIONAL_INSTITUTE");
                    model.AGE = reader.GetString("AGE");
                    model.GENDER = reader.GetString("GENDER");
                    model.EXPERIENCE = reader.GetInt16("EXPERIENCE");
                    model.PASSWORD = reader.GetString("D_PASSWORD");
                    model.CONTACT = reader.GetString("CONTACT");
                    model.ADDRESS = reader.GetString("ADDRESS");
                    model.PICTURE = reader.GetString("PICTURE");
                    model.SPECIALIZATION = reader.GetString("SPECIALIZATION");
                    model.DISTRICT = reader.GetString("DISTRICT");
                    model.SPECIALIZATION_ID = reader.GetInt16("SPECIALIZATION_ID");
                    model.DISTRICT_ID = reader.GetInt16("DISTRICT_ID");
                    doctor.Add(model);
                }

                connection.Close();
                return doctor;

            }
            catch (Exception e)
            {
                return doctor;
            }
        }


        [HttpGet("DoctorTimings/{id}")]
        public IEnumerable<DoctorTimings> DoctorTimings(int id)
        {
            List<DoctorTimings> timingList = new List<DoctorTimings>();
            string query = "SELECT DOCTORS_TIME_SCHEDULE.*,DOCTORS.NAME,DISTRICTS.DISTRICT "+
                           "FROM DOCTORS_TIME_SCHEDULE "+
                           "INNER JOIN DOCTORS "+
                           "INNER JOIN DISTRICTS "+
                           "ON "+
                           "DOCTORS_TIME_SCHEDULE.DOCTORS_ID = DOCTORS.ID "+
                           "AND "+
                           "DOCTORS_TIME_SCHEDULE.DISTRICT_ID = DISTRICTS.ID "+
                           "WHERE DOCTORS_ID='"+id+"'";
            try
            {
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    DoctorTimings model = new DoctorTimings();
                    model.ID = reader.GetInt16("ID");
                    model.DISTRICT_ID = reader.GetInt16("DISTRICT_ID");
                    model.DOCTOR_ID = reader.GetInt16("DOCTORS_ID");
                    model.ADDRESS = reader.GetString("ADDRESS");
                    model.AMOUNT = reader.GetInt32("AMOUNT");
                    model.DAYS = reader.GetString("DAYS");
                    model.START_TIME = reader.GetString("START_TIME").ToString();
                    model.END_TIME = reader.GetString("END_TIME").ToString();
                    model.DOCTOR_NAME = reader.GetString("NAME");
                    model.DISTRICT = reader.GetString("DISTRICT");
                    timingList.Add(model);
                }
                connection.Close();
                return timingList;
            }
            catch (Exception e) {
                return timingList;
            }
        }



        [HttpPost("CurrentTimeAppointment")]
        public IEnumerable<filterAppointments> CurrentTimeAppointment([FromForm] DOCTORS_SCHEDULE demo) {
            List<filterAppointments> listApp = new List<filterAppointments>();
            try {
               string query = "select APPOINTMENTS.* "+
                               "from APPOINTMENTS "+
                               "INNER JOIN DOCTORS_TIME_SCHEDULE "+
                               "ON "+
                               "APPOINTMENTS.DOCTORS_ID = DOCTORS_TIME_SCHEDULE.DOCTORS_ID "+
                               "WHERE "+
                               "APPOINTMENTS.DOCTORS_ID = '"+demo.ID+"' AND "+
                               "APPOINTMENTS.APP_DATETIME BETWEEN TIMESTAMP('" + demo.START_TIME + "') and "+
                               "TIMESTAMP('" + demo.END_TIME + "') and APPOINTMENTS.STATUS_ID NOT IN(2,4) " +
                               "order by APPOINTMENTS.APP_DATETIME DESC LIMIT 1";
               
                
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    filterAppointments app = new filterAppointments();
                    app.ID = reader.GetInt16("ID");
                    app.APP_DATETIME = reader.GetString("APP_DATETIME");

                    listApp.Add(app);
                }
                connection.Close();
                return listApp;

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
                return listApp;
            }

        }


        [HttpPost("BookingAppointment")]
        public int BookingAppointment([FromForm] BookingAppointments booking)
        {
            try
            {
                string query = "INSERT INTO APPOINTMENTS(APP_DATETIME,PATIENTS_ID,DOCTORS_ID,STATUS_ID) VALUES('"+booking.App_DATETIME+"','"+booking.PATIENTS_ID+"','"+booking.DOCTORS_ID+"','"+booking.STATUS_ID+"')";


                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                int result= cmd.ExecuteNonQuery();
                connection.Close();
                if (result!=0)
                {
                    
                    return 1;
                }
                return 0;

            }
            catch (Exception e)
            {
                
                return 0;
            }

        }



        [HttpPost("giveFeedback")]
        public int giveFeedback([FromForm] Feeds model)
        {
            try
            {
                string query = "INSERT INTO FEEDBACK(COMMENTS,RATING_ID,APPOINTMENT_ID) VALUES('" + model.COMMENT + "','" + model.RATING_ID + "','" + model.APPOINTMENT_ID + "')";


                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                int result = cmd.ExecuteNonQuery();
                connection.Close();
                if (result != 0)
                {

                    return 1;
                }
                return 0;

            }
            catch (Exception e)
            {

                return 0;
            }

        }




        [HttpGet("prescription/{id}")]
        public IEnumerable<String> prescription(int id) {
            try {
                Prescription pres = new Prescription();
                string query = "SELECT * FROM `PRESCRIPTION` WHERE APPOINTMENT_ID='"+id+"'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    
                    pres.ID = reader.GetInt16("ID");
                    pres.FILE_NAME = reader.GetString("FILE_PRESCRIPTION");
                    pres.APPOINTMENT_ID = reader.GetInt16("APPOINTMENT_ID");
                }
                connection.Close();
                return new String[] {pres.FILE_NAME};
            }catch(Exception e)
            {
                return new String[] { "error.pdf" };
            }


        }


        [HttpGet("getDistrict")]
        public IEnumerable<Districts> getDistrict() {
            List<Districts> dis = new List<Districts>();
            try
            {
                string query = "SELECT * FROM DISTRICTS";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    Districts model = new Districts();
                    model.ID = reader.GetInt16("ID");
                    model.DISTRICT = reader.GetString("DISTRICT");
                    dis.Add(model);
                }
                connection.Close();
                return dis;
            }
            catch (Exception e) {
                return dis;
            }

        }




        [HttpGet("getSpecialization")]
        public IEnumerable<Specialization> getSpecialization()
        {
            List<Specialization> dis = new List<Specialization>();
            try
            {
                string query = "SELECT * FROM DOCTORS_SPECIALIZATION";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Specialization model = new Specialization();
                    model.ID = reader.GetInt16("ID");
                    model.SPECIALIZATION = reader.GetString("SPECIALIZATION");
                    dis.Add(model);
                }
                connection.Close();
                return dis;
            }
            catch (Exception e)
            {
                return dis;
            }

        }




        [Route("/patient/dashboard/user")]
        [HttpPost("Register")]
        public async Task<long> RegisterAsync([FromForm] PatientsModel model)
        {
            

            try

            {
                var ss = model.PICTURE_2;
              string path = Path.Combine(@"E:\reactProjects\NEWAPP\components\Patients\Admin\assets\img");

                string query = "INSERT INTO PATIENTS(NAME,FATHER_NAME,EMAIL,AGE,GENDER,ADDRESS,P_PASSWORD,PICTURE,DOB,CONTACT,BLOOD_GROUP)"+
                               " VALUES('" + model.NAME + "','" + model.FATHER_NAME + "','" + model.EMAIL + "','" + model.AGE + "',"+
                               "'" + model.GENDER + "','" + model.ADDRESS + "','" + model.PASSWORD + "','" + ss.FileName.ToString() + "','" + model.DOB + "','" + model.CONTACT + "','" + model.BLOOD_GROUP + "')";


                    connection.Open();
                    MySqlCommand cmd = new MySqlCommand(query, connection);
                    int result = cmd.ExecuteNonQuery();
                    connection.Close();
                    if (result != 0)
                    {
                    var fs = new FileStream(Path.Combine(path, ss.FileName), FileMode.Create);
                    await ss.CopyToAsync(fs);
                    return 1;
                     }
                return 0;

            }
            catch (Exception e)
            {

                return 0;
            }

        }







        //Dashboard Data ends

        // PUT: api/Patients/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
