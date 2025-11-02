
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace EmployeeDepartmentAPI.Data.Models;

public class Department
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    [JsonIgnore]
    public ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
public class CreateDepartmentDto
{
    public string Name { get; set; } = string.Empty;
}
