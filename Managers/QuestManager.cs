using System.Linq;
using IQuest.Entities;

namespace IQuest.Managers
{
    public class QuestManager
    {
        QuestContext context;
        public QuestManager(QuestContext context) 
        {
            this.context = context;
        }
        public IQueryable GetQuestions (int gameId)
        {
            return context.Question.Where(q => q.GameId == gameId);
        }
    }
}