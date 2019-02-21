using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using IQuest.Entities;
using IQuest.Managers;
using Microsoft.AspNetCore.Mvc;

namespace IQuest.Controllers
{
    public class RegistrationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        TeamManager teamManager;
        public RegistrationController(TeamManager teamManager)
        {
            this.teamManager = teamManager;
        }
        public IActionResult AddTeam(string name)
        {
            Team team = teamManager.AddTeam(name);
            return new JsonResult(team);
        }
        public IActionResult EditTeam(int id, string name)
        {
            teamManager.EditTeam(id, name);
            return new OkResult();
        }
        public IActionResult DeleteTeam(int id)
        {
            teamManager.DeleteTeam(id);
            return new OkResult();   
        }
                public IActionResult GetTeams() {
            var teams = teamManager.GetTeams(1);
            return new JsonResult(teams);
        }
    }
}
