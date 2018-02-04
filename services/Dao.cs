using System;
using kromeSwan.domain;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using Dapper;
using System.Linq;

namespace kromeSwan.services
{
    public class Dao : IDao
    {
        private readonly IOptions<Configuration> _configuration;

        public Dao(IOptions<Configuration> configuration)
        {
            _configuration = configuration;
        }

        public void CreateSeason(Season season)
        {
            if(season.Name.Contains("'"))
            {
                season.Name.Replace("'", "");
            }
            if (season.Description.Contains("'"))
            {
                season.Description.Replace("'", "");
            }

            string sql = $"INSERT INTO seasons (startDate, numberOfDays, name, description) values ('{season.StartDate}', {season.NumberOfDays}, '{season.Name}', '{season.Description}')";

            using (var connection = new SqlConnection(_configuration.Value.ConnectionString)){
                connection.Open();
                connection.Execute(sql);
            }
        }

        public Season GetSeasonById(int id)
        {
            string sql = $"SELECT * FROM seasons WHERE seasonId = {id};";

            using (var connection = new SqlConnection(_configuration.Value.ConnectionString))
            {
                connection.Open();

                var results = connection.Query<Season>(sql);
                return results.First();
            }
        }
    }
}