using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace IQuest.Entities
{
    public class Team
    {
        public int TeamId { get; set; }

        public string Name { get; set; }

        public string QRcode { get; set; }
        
        public int GameId { get; set; }
    }
}