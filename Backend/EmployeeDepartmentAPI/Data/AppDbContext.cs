
using Microsoft.EntityFrameworkCore;
using EmployeeDepartmentAPI.Data.Models;

namespace EmployeeDepartmentAPI.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Employee> Employees => Set<Employee>();
    public DbSet<Department> Departments => Set<Department>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seed Departments
        modelBuilder.Entity<Department>().HasData(
            new Department { Id = 1, Name = "Engineering" },
            new Department { Id = 2, Name = "Human Resources" },
            new Department { Id = 3, Name = "Sales" }
        );

        // Seed Employees
        modelBuilder.Entity<Employee>().HasData(
            new Employee { Id = 1, FullName = "Alice Johnson", Position = "Software Engineer", DepartmentId = 1 },
            new Employee { Id = 2, FullName = "Bob Smith", Position = "HR Manager", DepartmentId = 2 },
            new Employee { Id = 3, FullName = "Charlie Brown", Position = "Sales Associate", DepartmentId = 3 },
            new Employee { Id = 4, FullName = "David Lee", Position = "Backend Developer", DepartmentId = 1 },
            new Employee { Id = 5, FullName = "Emma Davis", Position = "Frontend Developer", DepartmentId = 1 },
            new Employee { Id = 6, FullName = "Fiona Clark", Position = "QA Engineer", DepartmentId = 1 },
            new Employee { Id = 7, FullName = "George Hall", Position = "DevOps Engineer", DepartmentId = 1 },
            new Employee { Id = 8, FullName = "Hannah White", Position = "Recruiter", DepartmentId = 2 },
            new Employee { Id = 9, FullName = "Ian Martinez", Position = "HR Assistant", DepartmentId = 2 },
            new Employee { Id = 10, FullName = "Jane Foster", Position = "HR Generalist", DepartmentId = 2 },
            new Employee { Id = 11, FullName = "Kevin King", Position = "Sales Executive", DepartmentId = 3 },
            new Employee { Id = 12, FullName = "Lily Green", Position = "Account Manager", DepartmentId = 3 },
            new Employee { Id = 13, FullName = "Mark Turner", Position = "Sales Representative", DepartmentId = 3 },
            new Employee { Id = 14, FullName = "Nina Adams", Position = "Business Analyst", DepartmentId = 1 },
            new Employee { Id = 15, FullName = "Oliver Scott", Position = "UI/UX Designer", DepartmentId = 1 },
            new Employee { Id = 16, FullName = "Paula Baker", Position = "HR Coordinator", DepartmentId = 2 },
            new Employee { Id = 17, FullName = "Quentin Ross", Position = "Software Architect", DepartmentId = 1 },
            new Employee { Id = 18, FullName = "Rachel Evans", Position = "Technical Writer", DepartmentId = 1 },
            new Employee { Id = 19, FullName = "Steve Young", Position = "Sales Consultant", DepartmentId = 3 },
            new Employee { Id = 20, FullName = "Tina Allen", Position = "Customer Success", DepartmentId = 3 }
        );
    }

}
