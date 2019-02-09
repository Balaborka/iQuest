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
    public class TasksController : Controller
    {
        QuestManager questManager;
        public TasksController(QuestManager questManager)
        {
            this.questManager = questManager;
        }
        public IActionResult Index()
        {
            var result = questManager.GetQuestions(1).ToList();
            return View(result);
        }
    }
}
