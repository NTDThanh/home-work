using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCore.Data.Migrations
{
    public partial class fix_add_nullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Users",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "UserLogin",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "UserGroup",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Skills",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Questions",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Levels",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Exercises",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "ExerciseResult",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Courses",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Comments",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Answers",
                nullable: true,
                oldClrType: typeof(Guid));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Users",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "UserLogin",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "UserGroup",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Skills",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Questions",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Levels",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Exercises",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "ExerciseResult",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Courses",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Comments",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);

            migrationBuilder.AlterColumn<Guid>(
                name: "CreateBy",
                table: "Answers",
                nullable: false,
                oldClrType: typeof(Guid),
                oldNullable: true);
        }
    }
}
