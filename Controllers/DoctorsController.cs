using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;

namespace Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        //connection
        MySqlConnection connection = new MySqlConnection(Connection.stringConnection);
        // GET: api/Doctors
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Doctors/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Doctors
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Doctors/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


        //Starts

        [HttpPost("Login")]
        public DoctorsModel Login([FromForm] string data){
            DoctorsModel model = new DoctorsModel();
            try
            {
                var login = data.Split(',');
                string query = "SELECT DOCTORS.*, DOCTORS_SPECIALIZATION.SPECIALIZATION, DISTRICTS.DISTRICT FROM DOCTORS " +
                               "INNER JOIN DOCTORS_SPECIALIZATION INNER JOIN DISTRICTS ON DOCTORS.SPECIALIZATION_ID=DOCTORS_SPECIALIZATION.ID AND DOCTORS.DISTRICT_ID=DISTRICTS.ID " +
                               "WHERE DOCTORS.EMAIL='"+login[0]+"' AND DOCTORS.D_PASSWORD='"+login[1]+"'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    model.ID = reader.GetInt16("ID");
                    model.NAME = reader.GetString("NAME");
                    model.FATHER_NAME = reader.GetString("FATHER_NAME");
                    model.EMAIL = reader.GetString("EMAIL");
                    model.DESCRIPTION = reader.GetString("DESCRIPTION");
                    model.EDUCATIONAL_INSTITUTE = reader.GetString("EDUCATIONAL_INSTITUTE");
                    model.AGE = reader.GetInt16("AGE");
                    model.GENDER = reader.GetString("GENDER");
                    model.EXPERIENCE = reader.GetInt16("EXPERIENCE");
                    model.PASSWORD = reader.GetString("D_PASSWORD");
                    model.CONTACT = reader.GetString("CONTACT");
                    model.ADDRESS = reader.GetString("ADDRESS");
                    model.PICTURE = reader.GetString("PICTURE");
                    model.SPECIALIZATION_ID = reader.GetInt16("SPECIALIZATION_ID");
                    model.DISTRICT_ID = reader.GetInt16("DISTRICT_ID");
                    model.SPECIALIZATION = reader.GetString("SPECIALIZATION");
                    model.DISTRICT = reader.GetString("DISTRICT");
                   
                }
                connection.Close();
                return model;
            }
            catch (Exception e) {
                return model;
            }

        }


        [HttpPost("ListAppointments")]
        public IEnumerable<ListOfAppointments> ListAppointments([FromForm]int ID) {
            List<ListOfAppointments> list = new List<ListOfAppointments>();
            try {
                string query = "SELECT APPOINTMENTS.ID,APPOINTMENTS.APP_DATETIME,PATIENTS.NAME,PATIENTS.EMAIL,PATIENTS.PICTURE,PATIENTS.AGE,"+
                               "PATIENTS.BLOOD_GROUP,PATIENTS.CONTACT,APPOINTMENT_STATUS.TAGS "+
                               "FROM "+
                               "APPOINTMENTS "+
                               "INNER JOIN PATIENTS "+
                               "INNER JOIN APPOINTMENT_STATUS "+
                               "INNER JOIN DOCTORS "+
                               "ON "+
                               "APPOINTMENTS.PATIENTS_ID = PATIENTS.ID AND "+
                               "APPOINTMENTS.STATUS_ID = APPOINTMENT_STATUS.ID AND "+
                               "APPOINTMENTS.DOCTORS_ID = DOCTORS.ID "+
                               "WHERE "+
                               "DOCTORS.ID = '"+ID+"'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    ListOfAppointments model = new ListOfAppointments();
                    model.ID = reader.GetInt32("ID");
                    model.APP_DATETIME = reader.GetString("APP_DATETIME");
                    model.NAME = reader.GetString("NAME");
                    model.EMAIL = reader.GetString("EMAIL");
                    model.AGE = reader.GetInt32("AGE");
                    model.BLOOD_GROUP = reader.GetString("BLOOD_GROUP");
                    model.CONTACT = reader.GetString("CONTACT");
                    model.PICTURE = reader.GetString("PICTURE");
                    model.TAGS = reader.GetString("TAGS");
                    list.Add(model);
                }
                connection.Close();
                return list;
            }
            catch (Exception e) {
                return list;
            }

        }

        [HttpPost("ForgotPassword")]
        public int ForgotPassword([FromForm] DoctorsModel model) {
            try {
                string sql = "UPDATE DOCTORS SET DOCTORS.D_PASSWORD='"+model.PASSWORD+"' WHERE  DOCTORS.EMAIL='"+model.EMAIL+"'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(sql,connection);
                int res = cmd.ExecuteNonQuery();
                connection.Close();
                return res;
            }
            catch (Exception ex)
            {
                return 0;
            }

        }


        [HttpPost("doctorTimings")]
        public IEnumerable<Timings> doctorTimings([FromForm]int ID) {
            List<Timings> timing = new List<Timings>();
            try {
                string sql = "SELECT * FROM DOCTORS_TIME_SCHEDULE "+
                             "WHERE DOCTORS_ID='"+ID+"'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(sql,connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    Timings model = new Timings();
                    model.ID = reader.GetInt32("ID");
                    model.START_TIME = reader.GetString("START_TIME");
                    model.END_TIME = reader.GetString("END_TIME");
                    model.ADDRESS = reader.GetString("ADDRESS");
                    model.AMOUNT = reader.GetInt32("AMOUNT");
                    model.DAYS = reader.GetString("DAYS");
                    model.DISTRICT_ID = reader.GetInt32("DISTRICT_ID");
                    model.DOCTOR_ID = reader.GetInt32("DOCTORS_ID");
                    timing.Add(model);
                }
                connection.Close();
                return timing;
            }
            catch (Exception ex) {
                return timing;
            }

        }


        

        [HttpPost("NewTiming")]
        public string NewTiming([FromForm] Timings model)
        {
            int res = 0;
            try
            {
                string sql = "INSERT INTO `DOCTORS_TIME_SCHEDULE` ( `START_TIME`, `END_TIME`, `DISTRICT_ID`, `ADDRESS`, `DOCTORS_ID`, `AMOUNT`, `DAYS`) "+
                             "VALUES ('"+model.START_TIME+"', '"+model.END_TIME+"', '"+model.DISTRICT_ID+"', '"+model.ADDRESS+"', '"+model.DOCTOR_ID+"', '"+model.AMOUNT+"', '"+model.DAYS+"')";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                res = cmd.ExecuteNonQuery();
                connection.Close();
                return cmd.LastInsertedId.ToString();
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }


        }


        [HttpPost("DeleteTiming")]
        public string DeleteTiming([FromForm] string data)
        {
            int res = 0;
            string[] ff = data.Split(',');
            try
            {
                string sql = "DELETE FROM DOCTORS_TIME_SCHEDULE WHERE DOCTORS_TIME_SCHEDULE.ID='"+ff[0]+"';"+
                             "DELETE FROM APPOINTMENTS WHERE "+
                             "(TIME(APP_DATETIME) BETWEEN TIME('"+ff[1]+ "') AND TIME('" + ff[2] + "')) AND "+
                             "DOCTORS_ID='"+ff[3]+"' AND STATUS_ID<>'3' ";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                res = cmd.ExecuteNonQuery();
                connection.Close();
                return cmd.LastInsertedId.ToString();
            }
            catch (Exception ex)
            {
                return ex.ToString();
            }


        }


        [HttpPost("UpdateStatus")]
        public int UpdateStatus([FromForm] string data)
        {
            int res = 0;
            string[] ff = data.Split(',');
            try
            {
                string sql = "UPDATE appointments set APP_DATETIME=appointments.APP_DATETIME, STATUS_ID='" + ff[1]+"' WHERE ID='"+ff[0]+"'";
                connection.Open();
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                res = cmd.ExecuteNonQuery();
                connection.Close();
                return res;
            }
            catch (Exception ex)
            {
                return res;
            }


        }



        [HttpPost("CreatePDF")]
        public async Task<long>CreatePDF([FromForm] string data)
        {
            /*string path = Path.Combine(@"E:\reactProjects\NEWAPP\components\Patients\Admin\assets\img");

            

            var pdfBinary = Convert.FromBase64String(ff[0]);
            var fileName = path+"\\"+ff[1]+".png";
            var ss= ff[1] + ".png";*/
            string[] ff = data.Split('|');
            int res = 0;

            try
            {
                string query = "INSERT INTO prescription(FILE_PRESCRIPTION, APPOINTMENT_ID) "+
                               "VALUES ('"+ff[0]+"','"+ ff[1] + "') ; "+
                               "UPDATE appointments set APP_DATETIME=appointments.APP_DATETIME, STATUS_ID='" + 3 + "' WHERE ID='" + ff[1] + "'";


                connection.Open();
                MySqlCommand cmd = new MySqlCommand(query, connection);
                res = cmd.ExecuteNonQuery();
                connection.Close();
                if (res != 0)
                {
                    return 1;
                }
                return 0;

            }
            catch (Exception e) {
                return res;
            }
            


            

        }


        [HttpGet("loadFeeds/{id}")]
        public IEnumerable<FeedsDoctor> loadFeeds( int id) {
            List<FeedsDoctor> feeds = new List<FeedsDoctor>();
            try {
                connection.Open();
                string sql = "SELECT feedback.ID,feedback.COMMENTS,feedback.APPOINTMENT_ID,patients.NAME,ratings.RATING FROM feedback inner join appointments INNER JOIN patients INNER JOIN ratings on appointments.ID=feedback.APPOINTMENT_ID And appointments.PATIENTS_ID=patients.ID AND feedback.RATING_ID=ratings.ID WHERE appointments.DOCTORS_ID='"+id+"'";
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read()) {
                    FeedsDoctor model = new FeedsDoctor();
                    model.ID = reader.GetInt32("ID");
                    model.COMMENTS = reader.GetString("COMMENTS");
                    model.APPOINTMENT_ID = reader.GetInt32("APPOINTMENT_ID");
                    model.NAME = reader.GetString("NAME");
                    model.RATING = reader.GetInt32("RATING");
                    feeds.Add(model);
                }
                connection.Close();
                return feeds;
            }
            catch (Exception ex) {
                return feeds;
            }
        }



        [HttpGet("bestTimings/{id}")]
        public IEnumerable<besttimings> bestTimings(int id)
        {
            List<besttimings> feeds = new List<besttimings>();
            try
            {
                connection.Open();
                string sql = "Select doctors_time_schedule.START_TIME,doctors_time_schedule.END_TIME,count(patients.ID) from patients INNER JOIN appointments INNER JOIN doctors_time_schedule on appointments.PATIENTS_ID=patients.ID AND appointments.DOCTORS_ID=doctors_time_schedule.DOCTORS_ID WHERE MONTH(appointments.APP_DATETIME)=MONTH(CURRENT_DATE) AND appointments.DOCTORS_ID='"+id+"' GROUP BY patients.id HAVING (count(patients.ID)>5)";
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    besttimings model = new besttimings();
                    model.START_TIME = reader.GetString("START_TIME");
                    model.END_TIME = reader.GetString("END_TIME");
                    feeds.Add(model);
                }
                connection.Close();
                return feeds;
            }
            catch (Exception ex)
            {
                return feeds;
            }
        }



        [HttpGet("visitedPatients/{id}")]
        public IEnumerable<visitedpatients> visitedPatients(int id)
        {
            List<visitedpatients> feeds = new List<visitedpatients>();
            try
            {
                connection.Open();
                string sql = "Select patients.NAME,count(patients.ID) from patients INNER JOIN appointments on appointments.PATIENTS_ID=patients.ID WHERE MONTH(appointments.APP_DATETIME)=MONTH(CURRENT_DATE) AND appointments.DOCTORS_ID='"+id+"' GROUP BY patients.id HAVING (count(patients.ID)>2)";
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    visitedpatients model = new visitedpatients();
                    model.NAME = reader.GetString("NAME");
                    feeds.Add(model);
                }
                connection.Close();
                return feeds;
            }
            catch (Exception ex)
            {
                return feeds;
            }
        }


        [HttpGet("avgRating/{id}")]
        public IEnumerable<avgrating> avgRating(int id)
        {
            List<avgrating> feeds = new List<avgrating>();
            try
            {
                connection.Open();
                string sql = "select AVG(ratings.RATING) AS 'RATING' from feedback INNER JOIN ratings INNER JOIN appointments on feedback.RATING_ID=ratings.ID AND feedback.APPOINTMENT_ID=appointments.ID WHERE appointments.DOCTORS_ID='"+id+"' GROUP BY appointments.DOCTORS_ID";
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    avgrating model = new avgrating();
                    model.rating = reader.GetFloat("RATING");
                    feeds.Add(model);
                }
                connection.Close();
                return feeds;
            }
            catch (Exception ex)
            {
                return feeds;
            }
        }


        [HttpGet("patientsVisited/{id}")]
        public IEnumerable<numberpatients> patientsVisited(int id)
        {
            List<numberpatients> feeds = new List<numberpatients>();
            try
            {
                connection.Open();
                string sql = "select count(patients.ID) 'COUNT' from patients INNER JOIN appointments on patients.ID=appointments.PATIENTS_ID where appointments.DOCTORS_ID='"+id+"'";
                MySqlCommand cmd = new MySqlCommand(sql, connection);
                MySqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    numberpatients model = new numberpatients();
                    model.Count = reader.GetInt32("COUNT");
                    feeds.Add(model);
                }
                connection.Close();
                return feeds;
            }
            catch (Exception ex)
            {
                return feeds;
            }
        }







        [HttpPost("Register")]
        public async Task<long> RegisterAsync([FromForm] DoctorsModel model)
        {


            try

            {
                var ss = model.PICTURE_2;
                string path = Path.Combine(@"E:\reactProjects\NEWAPP\components\Doctors\Admin\assets\img");

                string query = "INSERT INTO doctors(`NAME`, `FATHER_NAME`, `EMAIL`, `DESCRIPTION`, `EDUCATIONAL_INSTITUTE`, `AGE`, `GENDER`, `EXPERIENCE`, `D_PASSWORD`, `CONTACT`, `ADDRESS`, `PICTURE`, `SPECIALIZATION_ID`, `DISTRICT_ID`)" +
                               " VALUES('" + model.NAME + "','" + model.FATHER_NAME + "','" + model.EMAIL + "','" + model.DESCRIPTION + "'," +
                               "'" + model.EDUCATIONAL_INSTITUTE + "','" + model.AGE + "','" + model.GENDER + "','" + model.EXPERIENCE + "','" + model.PASSWORD + "','" + model.CONTACT + "','" + model.ADDRESS + "','" + ss.FileName.ToString() + "','" + model.SPECIALIZATION_ID + "','"+model.DISTRICT_ID+"')";


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


        //Ends


    }
}
