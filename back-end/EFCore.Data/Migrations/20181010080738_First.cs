using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCore.Data.Migrations
{
    public partial class First : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CityInfo",
                columns: table => new
                {
                    CityCode = table.Column<int>(nullable: false),
                    NameFormated = table.Column<string>(nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CityInfo", x => x.CityCode);
                });

            migrationBuilder.CreateTable(
                name: "Countys",
                columns: table => new
                {
                    CountyId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NameFormated = table.Column<string>(maxLength: 255, nullable: true),
                    FullName = table.Column<string>(nullable: true),
                    AliasName = table.Column<string>(nullable: true),
                    CityCode = table.Column<int>(nullable: true),
                    UpdateAt = table.Column<DateTime>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countys", x => x.CountyId);
                    table.ForeignKey(
                        name: "FK_Countys_CityInfo_CityCode",
                        column: x => x.CityCode,
                        principalTable: "CityInfo",
                        principalColumn: "CityCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    AddressNo = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AddressName = table.Column<string>(nullable: true),
                    CountyId = table.Column<int>(nullable: true),
                    CityCode = table.Column<int>(nullable: true),
                    CreateAt = table.Column<DateTime>(nullable: true),
                    Timestamp = table.Column<byte[]>(rowVersion: true, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.AddressNo);
                    table.ForeignKey(
                        name: "FK_Address_CityInfo_CityCode",
                        column: x => x.CityCode,
                        principalTable: "CityInfo",
                        principalColumn: "CityCode",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Address_Countys_CountyId",
                        column: x => x.CountyId,
                        principalTable: "Countys",
                        principalColumn: "CountyId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Address_CityCode",
                table: "Address",
                column: "CityCode");

            migrationBuilder.CreateIndex(
                name: "IX_Address_CountyId",
                table: "Address",
                column: "CountyId");

            migrationBuilder.CreateIndex(
                name: "IX_Countys_CityCode",
                table: "Countys",
                column: "CityCode");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropTable(
                name: "Countys");

            migrationBuilder.DropTable(
                name: "CityInfo");
        }
    }
}
