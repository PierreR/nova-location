package irisnet.nova.location;

import com.sun.net.httpserver.HttpServer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Date: 1/31/11
 */
public class SimpleServlet extends HttpServlet {
    @Override protected void doPost(final HttpServletRequest req, final HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/text");
        PrintWriter out = resp.getWriter();
        out.println("Hello " + req.getParameter("name"));
    }
}
