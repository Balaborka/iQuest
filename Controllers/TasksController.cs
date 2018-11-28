using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IQuest.Models;

namespace IQuest.Controllers
{
    public class TasksController : Controller
    {
        public IActionResult Index()
        {
            Questions result = Questions.Deserialize("./AppData/Questions.xml");
            return View(result);
        }
    }
}
