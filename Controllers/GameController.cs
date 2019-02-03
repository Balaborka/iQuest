using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using IQuest.Entities;
using Microsoft.AspNetCore.Mvc;
using IQuest.Managers;

namespace IQuest.Controllers
{
    public class GameController : Controller
    {
        QuestManager questManager;
        public GameController(QuestManager questManager)
        {
            this.questManager = questManager;
        }
        public IActionResult Index()
        {
            var result = questManager.GetQuestions(1);
            return View(result);
        }
    }
}