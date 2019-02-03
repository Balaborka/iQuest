﻿// <auto-generated />
using IQuest.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace IQuest.Migrations
{
    [DbContext(typeof(QuestContext))]
    partial class QuestContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("IQuest.Models.Game", b =>
                {
                    b.Property<int>("GameId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("GameId");

                    b.ToTable("Game");
                });

            modelBuilder.Entity("IQuest.Models.Question", b =>
                {
                    b.Property<int>("QuestionId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<bool>("Done");

                    b.Property<int>("GameId");

                    b.Property<string>("Korpus");

                    b.Property<string>("Result");

                    b.Property<string>("Text");

                    b.HasKey("QuestionId");

                    b.HasIndex("GameId");

                    b.ToTable("Question");
                });

            modelBuilder.Entity("IQuest.Models.Question", b =>
                {
                    b.HasOne("IQuest.Models.Game")
                        .WithMany("Questions")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}