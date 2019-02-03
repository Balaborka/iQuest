using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Xml.Serialization;

namespace IQuest.Entities
{
    [XmlRoot("Questions")]
    public class Questions
    {
        public Questions()
        {
            Items = new List<Question>();
        }

        [XmlElement("Question")]
        public List<Question> Items { get; set; }

        public static Questions Deserialize(string xmlPath) {
            XmlSerializer formatter = new XmlSerializer(typeof(Questions));
            using (FileStream fs = new FileStream(xmlPath, FileMode.OpenOrCreate))
            {
                Questions newQuestion = (Questions)formatter.Deserialize(fs);
                return newQuestion;
            }
        }
    }
}