using kromeSwan.domain;

namespace kromeSwan.services
{
    public interface IDao
    {
        Season GetSeasonById(int id);
    }
}