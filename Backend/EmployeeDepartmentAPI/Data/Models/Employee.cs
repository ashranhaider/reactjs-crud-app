namespace EmployeeDepartmentAPI.Data.Models;

public class Employee
{
    public int Id { get; set; }
    public string FullName { get; set; } = string.Empty;
    public string Position { get; set; } = string.Empty;

    public int DepartmentId { get; set; }
    public Department? Department { get; set; }
}
