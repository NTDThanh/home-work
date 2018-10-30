using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCore.Data.Migrations
{
    public partial class first : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Courses",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Courses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserGroup",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Role = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Menu = table.Column<string>(nullable: true),
                    DefaultRedirect = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserGroup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Levels",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    ParentId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    CoursesId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Levels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Levels_Courses_CoursesId",
                        column: x => x.CoursesId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    Mail = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true),
                    Slat = table.Column<string>(nullable: true),
                    Address = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Phone = table.Column<string>(nullable: true),
                    UserGroupId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_UserGroup_UserGroupId",
                        column: x => x.UserGroupId,
                        principalTable: "UserGroup",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Skills",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Technology = table.Column<string>(nullable: true),
                    UsersId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Skills", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Skills_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserLogin",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: true),
                    LogAt = table.Column<DateTime>(nullable: false),
                    AuthenticationCode = table.Column<string>(nullable: true),
                    LoginStatus = table.Column<string>(nullable: true),
                    Ip = table.Column<string>(nullable: true),
                    Device = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogin", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserLogin_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Exercises",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    SkillsId = table.Column<Guid>(nullable: true),
                    LevelId = table.Column<Guid>(nullable: true),
                    CoursesId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Exercises", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Exercises_Courses_CoursesId",
                        column: x => x.CoursesId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Exercises_Levels_LevelId",
                        column: x => x.LevelId,
                        principalTable: "Levels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Exercises_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Detail = table.Column<string>(nullable: true),
                    CountDown = table.Column<int>(nullable: false),
                    CorrectAnswerCode = table.Column<Guid>(nullable: false),
                    SkillsId = table.Column<Guid>(nullable: true),
                    LevelId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Questions_Levels_LevelId",
                        column: x => x.LevelId,
                        principalTable: "Levels",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Questions_Skills_SkillsId",
                        column: x => x.SkillsId,
                        principalTable: "Skills",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Answers",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Detail = table.Column<string>(nullable: true),
                    Note = table.Column<string>(nullable: true),
                    QuestionsId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Answers_Questions_QuestionsId",
                        column: x => x.QuestionsId,
                        principalTable: "Questions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Detail = table.Column<string>(nullable: true),
                    UsersId = table.Column<Guid>(nullable: true),
                    QuestionsId = table.Column<Guid>(nullable: true),
                    ExercisesId = table.Column<Guid>(nullable: true),
                    CoursesId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comments_Courses_CoursesId",
                        column: x => x.CoursesId,
                        principalTable: "Courses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_Exercises_ExercisesId",
                        column: x => x.ExercisesId,
                        principalTable: "Exercises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_Questions_QuestionsId",
                        column: x => x.QuestionsId,
                        principalTable: "Questions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Comments_Users_UsersId",
                        column: x => x.UsersId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ExercisesQuestions",
                columns: table => new
                {
                    ExercisesId = table.Column<Guid>(nullable: false),
                    QuestionsId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExercisesQuestions", x => new { x.ExercisesId, x.QuestionsId });
                    table.ForeignKey(
                        name: "FK_ExercisesQuestions_Exercises_ExercisesId",
                        column: x => x.ExercisesId,
                        principalTable: "Exercises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ExercisesQuestions_Questions_QuestionsId",
                        column: x => x.QuestionsId,
                        principalTable: "Questions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ExerciseResult",
                columns: table => new
                {
                    CreateBy = table.Column<Guid>(nullable: false),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    UpdateBy = table.Column<Guid>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true),
                    IsDelete = table.Column<bool>(nullable: false),
                    Id = table.Column<Guid>(nullable: false),
                    Point = table.Column<string>(nullable: true),
                    Rank = table.Column<string>(nullable: true),
                    TimeRemaining = table.Column<int>(nullable: true),
                    TestTime = table.Column<DateTime>(nullable: true),
                    UserId = table.Column<Guid>(nullable: true),
                    QuestionsId = table.Column<Guid>(nullable: true),
                    ExercisesId = table.Column<Guid>(nullable: true),
                    AnswerId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExerciseResult", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExerciseResult_Answers_AnswerId",
                        column: x => x.AnswerId,
                        principalTable: "Answers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ExerciseResult_Exercises_ExercisesId",
                        column: x => x.ExercisesId,
                        principalTable: "Exercises",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ExerciseResult_Questions_QuestionsId",
                        column: x => x.QuestionsId,
                        principalTable: "Questions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ExerciseResult_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Answers_QuestionsId",
                table: "Answers",
                column: "QuestionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_CoursesId",
                table: "Comments",
                column: "CoursesId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_ExercisesId",
                table: "Comments",
                column: "ExercisesId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_QuestionsId",
                table: "Comments",
                column: "QuestionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_UsersId",
                table: "Comments",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_ExerciseResult_AnswerId",
                table: "ExerciseResult",
                column: "AnswerId");

            migrationBuilder.CreateIndex(
                name: "IX_ExerciseResult_ExercisesId",
                table: "ExerciseResult",
                column: "ExercisesId");

            migrationBuilder.CreateIndex(
                name: "IX_ExerciseResult_QuestionsId",
                table: "ExerciseResult",
                column: "QuestionsId");

            migrationBuilder.CreateIndex(
                name: "IX_ExerciseResult_UserId",
                table: "ExerciseResult",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Exercises_CoursesId",
                table: "Exercises",
                column: "CoursesId");

            migrationBuilder.CreateIndex(
                name: "IX_Exercises_LevelId",
                table: "Exercises",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Exercises_SkillsId",
                table: "Exercises",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_ExercisesQuestions_QuestionsId",
                table: "ExercisesQuestions",
                column: "QuestionsId");

            migrationBuilder.CreateIndex(
                name: "IX_Levels_CoursesId",
                table: "Levels",
                column: "CoursesId");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_LevelId",
                table: "Questions",
                column: "LevelId");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_SkillsId",
                table: "Questions",
                column: "SkillsId");

            migrationBuilder.CreateIndex(
                name: "IX_Skills_UsersId",
                table: "Skills",
                column: "UsersId");

            migrationBuilder.CreateIndex(
                name: "IX_UserLogin_UserId",
                table: "UserLogin",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserGroupId",
                table: "Users",
                column: "UserGroupId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "ExerciseResult");

            migrationBuilder.DropTable(
                name: "ExercisesQuestions");

            migrationBuilder.DropTable(
                name: "UserLogin");

            migrationBuilder.DropTable(
                name: "Answers");

            migrationBuilder.DropTable(
                name: "Exercises");

            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropTable(
                name: "Levels");

            migrationBuilder.DropTable(
                name: "Skills");

            migrationBuilder.DropTable(
                name: "Courses");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "UserGroup");
        }
    }
}
