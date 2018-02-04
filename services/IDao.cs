using System.Collections.Generic;
using kromeSwan.domain;

namespace kromeSwan.services
{
    public interface IDao
    {
        Season GetSeasonById(int id);
        void CreateSeason(Season season);
        List<Season> GetSeasons();
    }
}