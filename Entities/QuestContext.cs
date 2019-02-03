using IQuest.Entities;
using Microsoft.EntityFrameworkCore;

namespace IQuest.Entities
{
public class QuestContext : DbContext 
    {
        public DbSet<Question> Question { get; set; }
        public DbSet<Game> Game { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost;Database=IQuest;Trusted_Connection=True;");
        }
    }
}