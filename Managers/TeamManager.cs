using System.Collections.Generic;
using System.Linq;
using IQuest.Entities;

public class TeamManager
{
    QuestContext context;
    public TeamManager(QuestContext context) 
    {
        this.context = context;
    }

    public int AddTeam(string name) {
        Team team = new Team(){
          Name = name,
          GameId = 1
        };

        context.Add(team);
        context.SaveChanges();
        return team.TeamId;
    }

    public void EditTeam(int id, string name) {
        var team = context.Team.Where(q => q.TeamId == id).FirstOrDefault();
        if (team != null) {
            team.Name = name;
            context.SaveChanges();
        }
    }

    public void DeleteTeam(int id) {
        var team = context.Team.Where(q => q.TeamId == id).FirstOrDefault();
        context.Remove(team);
        context.SaveChanges();
    }

    public List<Team> GetTeams(int gameId) {
      return context.Team.Where(q => q.GameId == gameId).ToList();
    }
}