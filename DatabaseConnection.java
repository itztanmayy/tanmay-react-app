package com.collegemarketplace.college_marketplace;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
     private static final String URL = "jdbc:mysql://localhost:3306/college_marketplace"; // Update with your DB name
     private static final String USER = "your_username"; // Replace with MySQL username
     private static final String PASSWORD = "your_password"; // Replace with MySQL password

     public static Connection getConnection() {
         Connection connection = null;
         try {
             connection = DriverManager.getConnection(URL, USER, PASSWORD);
             System.out.println("Database connection established!");
         } catch (SQLException e) {
             System.out.println("Error connecting to the database: " + e.getMessage());
         }
         return connection;
     }
}