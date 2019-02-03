using Microsoft.EntityFrameworkCore.Migrations;

namespace IQuest.Migrations
{
    public partial class RenameId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Question",
                newName: "QuestionId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Game",
                newName: "GameId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "QuestionId",
                table: "Question",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "GameId",
                table: "Game",
                newName: "Id");
        }
    }
}
