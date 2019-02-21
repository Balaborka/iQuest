using System;
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

    public Team AddTeam(string name) { 
        Guid guid = Guid.NewGuid();
        Team team = new Team(){
          Name = name,
          GameId = 1,
          QRcode = guid.ToString()
        };

        context.Add(team);
        context.SaveChanges();
        return team;
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