package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    // Método estático para obtener una conexión a la base de datos
    public static Connection getConnection() {
        Connection conexion = null; // Inicializa una referencia a la conexión como nula.
        var baseDatos = "estudiantes"; // Nombre de la base de datos a la que se conectará.
        var url = "jdbc:mysql://localhost:3306/" + baseDatos; // URL de la base de datos MySQL.
        var usuario = "root"; // Usuario de la base de datos.
        var password = "root"; // Contraseña del usuario de la base de datos.
        try {
            // Carga el controlador JDBC de MySQL. Esto es necesario antes de establecer la conexión.
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            // Intenta establecer la conexión utilizando la URL, el usuario y la contraseña proporcionados.
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException err) {
            // Maneja posibles excepciones que pueden ocurrir al cargar el controlador o al establecer la conexión.
            System.out.println("Ocurrió un error en la conexión: " + err.getMessage());
        } // Fin try/catch
        
        // Devuelve la conexión, que puede ser nula si ocurrió un error.
        return conexion;
    } // Fin método getConnection
}
