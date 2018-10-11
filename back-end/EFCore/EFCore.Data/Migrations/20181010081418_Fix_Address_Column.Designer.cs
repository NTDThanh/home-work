﻿// <auto-generated />
using System;
using EFCore.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EFCore.Data.Migrations
{
    [DbContext(typeof(AddressContext))]
    [Migration("20181010081418_Fix_Address_Column")]
    partial class Fix_Address_Column
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EFCore.Domain.Address", b =>
                {
                    b.Property<int>("AddressNo")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AddressName");

                    b.Property<int?>("CityCode");

                    b.Property<int?>("CountyId");

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime?>("UpdateAt")
                        .ValueGeneratedOnAddOrUpdate();

                    b.HasKey("AddressNo");

                    b.HasIndex("CityCode");

                    b.HasIndex("CountyId");

                    b.ToTable("Address");
                });

            modelBuilder.Entity("EFCore.Domain.City", b =>
                {
                    b.Property<int>("CityCode");

                    b.Property<string>("FullName");

                    b.Property<string>("NameFormated")
                        .IsConcurrencyToken();

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime?>("UpdateAt");

                    b.HasKey("CityCode");

                    b.ToTable("CityInfo");
                });

            modelBuilder.Entity("EFCore.Domain.County", b =>
                {
                    b.Property<int>("CountyId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AliasName");

                    b.Property<int?>("CityCode");

                    b.Property<string>("FullName");

                    b.Property<string>("NameFormated")
                        .HasMaxLength(255);

                    b.Property<byte[]>("Timestamp")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate();

                    b.Property<DateTime?>("UpdateAt");

                    b.HasKey("CountyId");

                    b.HasIndex("CityCode");

                    b.ToTable("Countys");
                });

            modelBuilder.Entity("EFCore.Domain.Address", b =>
                {
                    b.HasOne("EFCore.Domain.City", "City")
                        .WithMany()
                        .HasForeignKey("CityCode");

                    b.HasOne("EFCore.Domain.County", "County")
                        .WithMany()
                        .HasForeignKey("CountyId");
                });

            modelBuilder.Entity("EFCore.Domain.County", b =>
                {
                    b.HasOne("EFCore.Domain.City", "City")
                        .WithMany("County")
                        .HasForeignKey("CityCode");
                });
#pragma warning restore 612, 618
        }
    }
}
