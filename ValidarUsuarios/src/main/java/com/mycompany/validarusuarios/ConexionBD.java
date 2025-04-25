
package com.mycompany.validarusuarios;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionBD {

    public Connection conectar() {
        Connection conn = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/app_mi_familia", 
                "root",                                    
                "Andres-0712"                               
            );
            System.out.println("✅ Conexión exitosa a la base de datos.");
        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("❌ Error en la conexión.");
            e.printStackTrace();
        }
        return conn;
    }

    // 🔽 MÉTODO MAIN DE PRUEBA
    public static void main(String[] args) {
        ConexionBD conexion = new ConexionBD();
        Connection conn = conexion.conectar();

        if (conn != null) {
            System.out.println("🎉 Conexión a la base de datos confirmada.");
        } else {
            System.out.println("⚠️ No se pudo conectar a la base de datos.");
        }
    }
}
