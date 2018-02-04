using System;
using System.Collections.Generic;
using System.Linq;
using kromeSwan.services;
using Microsoft.AspNetCore.Mvc;
using kromeSwan.domain;

namespace kromeSwan.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private readonly IDao _dao;

        public DataController(IDao dao)
        {
            _dao = dao;
        }

        [HttpGet("[action]")]
        public Season GetSeasonById(int id)
        {
            var season = _dao.GetSeasonById(id);

            return season;
            //return $"SeasonId: {season.SeasonId}\nStartDate: {season.StartDate}\nNumberOfDays: {season.NumberOfDays}";
        }

        [HttpPost("[action]")]
        public string CreateSeason([FromBody] Season season)
        {
            try
            {
                _dao.CreateSeason(season);
                return "success";
            }
            catch (Exception ex)
            {
                return "failed: " + ex;
            }
        }
    }
}
