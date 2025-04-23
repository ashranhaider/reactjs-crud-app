using EmployeeDepartmentAPI.Data;
using EmployeeDepartmentAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add DB Context
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy => policy.WithOrigins("http://localhost:5173")
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();
app.UseCors("AllowReactApp");
app.MapGet("/", () => "Employee Department API");

// --- Department Endpoints ---

app.MapGet("/api/departments", async (AppDbContext db) =>
    await db.Departments.ToListAsync());

app.MapGet("/api/departments/{id}", async (int id, AppDbContext db) =>
    await db.Departments.FindAsync(id) is Department dept
        ? Results.Ok(dept)
        : Results.NotFound());

// --- Employee Endpoints ---

app.MapGet("/api/employees", async (AppDbContext db) =>
    await db.Employees.Include(e => e.Department).ToListAsync());

app.MapGet("/api/employees/{id}", async (int id, AppDbContext db) =>
    await db.Employees.Include(e => e.Department).FirstOrDefaultAsync(e => e.Id == id) is Employee emp
        ? Results.Ok(emp)
        : Results.NotFound());

app.MapPost("/api/employees", async (Employee emp, AppDbContext db) =>
{
    db.Employees.Add(emp);
    await db.SaveChangesAsync();
    return Results.Created($"/api/employees/{emp.Id}", emp);
});

app.MapPut("/api/employees/{id}", async (int id, Employee input, AppDbContext db) =>
{
    var emp = await db.Employees.FindAsync(id);
    if (emp is null) return Results.NotFound();

    emp.FullName = input.FullName;
    emp.Position = input.Position;
    emp.DepartmentId = input.DepartmentId;

    await db.SaveChangesAsync();
    return Results.Ok(emp);
});

app.MapDelete("/api/employees/{id}", async (int id, AppDbContext db) =>
{
    var emp = await db.Employees.FindAsync(id);
    if (emp is null) return Results.NotFound();

    db.Employees.Remove(emp);
    await db.SaveChangesAsync();
    return Results.NoContent();
});

app.Run();
