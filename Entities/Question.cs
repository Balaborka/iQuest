using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace IQuest.Entities
{
    public class Question
    {
        public int QuestionId { get; set; }

        public int GameId { get; set; }

        public string Text { get; set; }

        public string Result { get; set; }

        public string Korpus { get; set; }

        public bool Done { get; set; } 
    }
}