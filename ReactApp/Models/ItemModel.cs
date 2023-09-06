namespace RankingApp.Models
{
    public class ItemModel // this will be a generic class to be used by multiple types of items
    {
        public int Id { get; set; } // Note how this is done, Properties will be Pascal case
        public String Title { get; set; } // Note how these are getter and setters, not just an attributes, but unlike java these aren't exactly methods
        public int ImageId { get; set; }
        public int Ranking {  get; set; }
        public int ItemType { get; set; } // This will be used as the relational mapping to check what type of item we are dealing with


    }
}
