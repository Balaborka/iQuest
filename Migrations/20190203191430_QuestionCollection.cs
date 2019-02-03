using Microsoft.EntityFrameworkCore.Migrations;

namespace IQuest.Migrations
{
    public partial class QuestionCollection : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Question_GameId",
                table: "Question",
                column: "GameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Question_Game_GameId",
                table: "Question",
                column: "GameId",
                principalTable: "Game",
                principalColumn: "GameId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Question_Game_GameId",
                table: "Question");

            migrationBuilder.DropIndex(
                name: "IX_Question_GameId",
                table: "Question");
        }
    }
}
