# EFCore
For study entity framework core

I. Initial solution:

  1.Create project EFCore.Data:
  
      - Project type: Class Library.
      
      - Target framework: .NET Standard 2.0.
      
      - Install nugetpack: 
      
          + Microsoft.EntityFrameworkCore
          
          + Microsoft.EntityFrameworkCore.Tools
          
          + Microsoft.EntityFrameworkCore.Design
          
          + Microsoft.EntityFrameworkCore.SqlServer
          
          + Microsoft.Extensions.Logging
          
          + Microsoft.Extensions.Logging.Console
          
      - Add reference to EFCore.Domain.
      
   2.Create project EFCore.Domain:
   
      - Project type: Class Library
      
      - Target framework: .NET Standard 2.0
      
      - Install nugetpack: 
      
          + System.ComponentModel.Annotations
          
   3.Create some UI project 
   
      - Project type: Winform, ASP.NET etc...
      
      - Target framework: .NET 4.6.1 or higher, .NET Core 2.xxx
      
      - Install nugetpack: 
      
          + Microsoft.EntityFrameworkCore
          
          + Microsoft.EntityFrameworkCore.Design
          
          + Microsoft.EntityFrameworkCore.Relational
          
          + Microsoft.EntityFrameworkCore.SqlServer
          
          + Microsoft.Extensions.Logging
          
          + Microsoft.Extensions.Logging.Console
 II. Migration data
 
    1. Config connection string in EFCore.Data > AddressContext.cs
    
    2. Turn on Package Manager Console with EFCore.Data is default project.
    
    3. User Add-Migration if change Entites, Update-Database to update physical DB.
      
