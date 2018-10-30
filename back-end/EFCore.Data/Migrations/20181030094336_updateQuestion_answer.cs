using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCore.Data.Migrations
{
    public partial class updateQuestion_answer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ParentId",
                table: "Skills",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AlterColumn<string>(
                name: "CorrectAnswerCode",
                table: "Questions",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AddColumn<string>(
                name: "QuestionCode",
                table: "Questions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AnswerCode",
                table: "Answers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParentId",
                table: "Skills");

            migrationBuilder.DropColumn(
                name: "QuestionCode",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "AnswerCode",
                table: "Answers");

            migrationBuilder.AlterColumn<Guid>(
                name: "CorrectAnswerCode",
                table: "Questions",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
