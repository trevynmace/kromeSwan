using System;
namespace kromeSwan.domain
{
    public class Season
    {
        public int SeasonId { get; set; }
        public DateTime StartDate { get; set; }
        public int NumberOfDays { get; set; }
        public string Name { get; set;  }
        public string Description { get; set; }
    }
}
