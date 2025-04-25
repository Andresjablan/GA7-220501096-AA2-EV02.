package com.mycompany.validarusuarios.servlets;

import com.mycompany.validarusuarios.ConexionBD;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "LoginServlet", urlPatterns = {"/login-form"})
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String nombre = request.getParameter("username");
        String contrasena = request.getParameter("password");

        try (Connection conn = new ConexionBD().conectar()) {
            String sql = "SELECT * FROM usuario WHERE nombre = ? AND contrasena = ?";
            PreparedStatement ps = conn.prepareStatement(sql);
            ps.setString(1, nombre);
            ps.setString(2, contrasena);
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                // Inicio de sesión exitoso
                request.getSession().setAttribute("usuario", nombre);
                response.sendRedirect("bienvenido.jsp"); // Cambiado a JSP
            } else {
                // Fallo de autenticación
                response.sendRedirect("error.html?error=true");
            }

        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("error.html?error=server");
        }
    }

    @Override
    public String getServletInfo() {
        return "Valida el login contra la base de datos";
    }
}
