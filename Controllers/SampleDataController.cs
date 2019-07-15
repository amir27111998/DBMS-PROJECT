using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;


namespace Project.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        MySqlConnection con = new MySqlConnection(Connection.stringConnection);
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        [HttpGet("[action]")]
        public IEnumerable<demoModel> DataList(){
            List<demoModel> datalist=new List<demoModel>();
       
            try
            {
                con.Open();

                MySqlCommand cmd = new MySqlCommand("select * from test", con);
                MySqlDataReader reader = cmd.ExecuteReader();
                
                while (reader.Read()) {
                    demoModel demo = new demoModel();
                    demo.id = reader.GetInt16("ID");
                    demo.name = reader.GetString("Name");
                    demo.contact = reader.GetString("contact");
                    datalist.Add(demo);
                }

                con.Close();
                return datalist.AsEnumerable();
            }
            catch (Exception e) {
                
            }
            return datalist.AsEnumerable();

        }

        [HttpPost]
        public int Insert([FromForm] demoModel data) {

            try
            {

                con.Open();

                MySqlCommand cmd = new MySqlCommand("INSERT INTO test(Name,contact) VALUES('"+data.name+"','"+data.contact+"')", con);
                int i = cmd.ExecuteNonQuery();

                con.Close();

                string id = cmd.LastInsertedId.ToString();
                return Int32.Parse(id);


            }
            catch (Exception e)
            {
                return 0;

            }
            
        }

        [HttpDelete("{id}")]
        public int Delete(int id) {
            try {
                con.Open();
                MySqlCommand cmd = new MySqlCommand("Delete from test where ID='" + id + "'",con);
                cmd.ExecuteNonQuery();
                return id;
            }catch(Exception e)
            {
                return 0;
            }

        }

        [HttpPut("{id}")]
        public int Update(int id,[FromForm] demoModel data) {
            try {
                con.Open();
                MySqlCommand cmd = new MySqlCommand("Update test set Name='"+data.name+"',contact='"+data.contact+"' where ID='"+id+"' ",con);
                cmd.ExecuteNonQuery();
                con.Close();
                return 1;
            }
            catch (Exception e) {

                return 0;
            }

        }




            public class demoModel
        {

            public int id { get; set; }
            public string name { get; set; }
            public string contact { get; set; }

            public demoModel()
            {

            }
        }


        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
