using System;
using kromeSwan.domain;
using Microsoft.Extensions.Options;
using System.Data.SqlClient;
using Dapper;
using System.Linq;
using System.Collections.Generic;

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
            var name = season.Name;
            var description = season.Description;

            var newName = "";
            var newDescription = "";

            if(name.Contains("'"))
            {
                newName = name.Replace("'", "");
            }
            if (description.Contains("'"))
            {
                newDescription = description.Replace("'", "");
            }

            string sql = $"INSERT INTO seasons (startDate, numberOfDays, name, description) values ('{season.StartDate}', {season.NumberOfDays}, '{newName}', '{newDescription}')";

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

        public List<Season> GetSeasons()
        {
            string sql = "SELECT * FROM seasons";

            using (var connection = new SqlConnection(_configuration.Value.ConnectionString))
            {
                connection.Open();

                var results = connection.Query<Season>(sql);
                return results.ToList();
            }
        }
    }
}