using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace IQuest.Entities
{
    public class Game
    {
        public int GameId { get; set; }
        public string Name { get; set; }

        public ICollection<Question> Questions { get; set; }
    }
}