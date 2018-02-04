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
        public string GetSeasonById(int id)
        {
            var season = _dao.GetSeasonById(id);

            return $"SeasonId: {season.SeasonId}\nStartDate: {season.StartDate}\nNumberOfDays: {season.NumberOfDays}";
        }

        [HttpPost("[action]")]
        public string CreateSeason(Season season){
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
