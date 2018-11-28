using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace IQuest.Models
{
    [Serializable()]
    public class Question
    {
        [XmlText()]
        public string Text { get; set; }

        [XmlAttribute("result")]
        public string Result { get; set; }

        [XmlAttribute("korpus")]
        public string Korpus { get; set; }

        public bool Done { get; set; } 
    }
}