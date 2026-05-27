using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

/***
 * CORS configuration
 */
// enable allowAnyOrigin, allowAnyMethod, allowAnyHeader
builder.Services.AddCors(options =>
{
    // TODO: FM implementar esta configuracion
    options.AddPolicy("AllowAnyOrigin", builder =>
    {
        builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});
/***
 * JWT Authentication configuration
 */
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuer = true, // Cambia a true si quieres validar el emisor
            ValidateAudience = true, // Cambia a true si quieres validar la audiencia
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"], // Configura el emisor en appsettings.json
            ValidAudience = builder.Configuration["Jwt:Audience"], // Configura la audiencia en appsettings.json
            IssuerSigningKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

var app = builder.Build();

// TODO: Cors AllowAnyOrigin
app.UseCors("AllowAnyOrigin");

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Run();
