using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace EmployeeDepartmentAPI.Migrations
{
    /// <inheritdoc />
    public partial class Seed20Employees : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Departments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Departments", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DepartmentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employees_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Departments",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Engineering" },
                    { 2, "Human Resources" },
                    { 3, "Sales" }
                });

            migrationBuilder.InsertData(
                table: "Employees",
                columns: new[] { "Id", "DepartmentId", "FullName", "Position" },
                values: new object[,]
                {
                    { 1, 1, "Alice Johnson", "Software Engineer" },
                    { 2, 2, "Bob Smith", "HR Manager" },
                    { 3, 3, "Charlie Brown", "Sales Associate" },
                    { 4, 1, "David Lee", "Backend Developer" },
                    { 5, 1, "Emma Davis", "Frontend Developer" },
                    { 6, 1, "Fiona Clark", "QA Engineer" },
                    { 7, 1, "George Hall", "DevOps Engineer" },
                    { 8, 2, "Hannah White", "Recruiter" },
                    { 9, 2, "Ian Martinez", "HR Assistant" },
                    { 10, 2, "Jane Foster", "HR Generalist" },
                    { 11, 3, "Kevin King", "Sales Executive" },
                    { 12, 3, "Lily Green", "Account Manager" },
                    { 13, 3, "Mark Turner", "Sales Representative" },
                    { 14, 1, "Nina Adams", "Business Analyst" },
                    { 15, 1, "Oliver Scott", "UI/UX Designer" },
                    { 16, 2, "Paula Baker", "HR Coordinator" },
                    { 17, 1, "Quentin Ross", "Software Architect" },
                    { 18, 1, "Rachel Evans", "Technical Writer" },
                    { 19, 3, "Steve Young", "Sales Consultant" },
                    { 20, 3, "Tina Allen", "Customer Success" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_DepartmentId",
                table: "Employees",
                column: "DepartmentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropTable(
                name: "Departments");
        }
    }
}
