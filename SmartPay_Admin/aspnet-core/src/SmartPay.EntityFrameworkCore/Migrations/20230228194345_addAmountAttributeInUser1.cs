﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmartPay.Migrations
{
    public partial class addAmountAttributeInUser1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "Amount",
                table: "AbpUsers",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Amount",
                table: "AbpUsers");
        }
    }
}
