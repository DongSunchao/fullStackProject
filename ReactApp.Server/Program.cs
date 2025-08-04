using System.Collections.Generic;
using System.Collections;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMvc();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection(); 

static void func(ref string s)
{
    s = "Hello, World!";
    Console.WriteLine(s);
}

string s2 = "Initial Value";
func(ref s2);
int[] array1=new int[] { 1, 2, 3, 4, 5 };
int[] arrayCopy = array1;// like &
object clonedArray = array1.Clone();

int[] array_clone= (int[])clonedArray;

array1[0] = 10; // Modify original array
Console.WriteLine("Original array: " + string.Join(", ", array1));//shallow copy

Hashtable hashtable = new Hashtable();
hashtable.Add("key1", "value1");
hashtable.Add("key2", "value2");
Console.WriteLine("Hashtable contents:"+string.Join(",",hashtable.ToString()));


Console.WriteLine("Cloned array: " + string.Join(", ", array_clone)); // Cloned array remains unchanged

Console.WriteLine(string.Join(",",arrayCopy));







app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
