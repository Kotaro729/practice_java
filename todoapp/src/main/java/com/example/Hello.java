package com.example;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class Hello extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
        PrintWriter out;

        res.setContentType("text/html; charset=utf-8");
        out = res.getWriter();

        out.println("<html><body>");
        out.println("<h1>Hello Java Servlet!HOGEEEEEE!</h1>");
        out.println("</body></html>");
    }
}