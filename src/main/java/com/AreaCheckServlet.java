package com;

import com.custom.Result;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@WebServlet("/area")
public class AreaCheckServlet extends HttpServlet {
    private double x, y, r;

    boolean validateX(String reqStrX){
        Set <Double> xValues = new HashSet<>();
        for(double i = -3d; i <= 5d; i++)
            xValues.add(i);
        try{
            x = Double.parseDouble(reqStrX);
            return xValues.contains(x);
        } catch (NumberFormatException e){
            return false;
        }
    }

    boolean validateY(String reqStrY){
        try {
            y = Double.parseDouble(reqStrY);
            return -3d < y && y < 3d;
        } catch (NumberFormatException e){
            System.out.println(reqStrY);
            return false;
        }
    }

    boolean validateR(String reqStrR){
        Set <Double> rValues = new HashSet<>();
        for(double i = 1d; i <= 3d; i += 0.5)
            rValues.add(i);
        try{
            r = Double.parseDouble(reqStrR);
            return rValues.contains(r);
        } catch (NumberFormatException e){
            return false;
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        HttpSession session = req.getSession();
        ArrayList <Result> results = (ArrayList <Result>) session.getAttribute("results");
        if(results == null)
            results = new ArrayList<>();

        long startTime = System.nanoTime();

        if(validateX(req.getParameter("x")) &&
                validateY(req.getParameter("y")) &&
                validateR(req.getParameter("r")) ){

            String currentTime = new SimpleDateFormat("HH:mm:ss").format(new Date());
            double diff = (System.nanoTime() - startTime) / 1000000d;
            String executionTime = String.format("%.1f", diff) + " ms";

            Result result = new Result(x, y, r, currentTime, executionTime, belongsS());
            results.add(result);
            session.setAttribute("results", results);
            resp.getWriter().write(result.generateRow());
        }
        else{
            resp.sendError(HttpServletResponse.SC_BAD_GATEWAY);
        }

    }


    boolean belongsSector(){
        return (x <= 0) && (y <= 0) && (x*x+y*y <= r*r/4);
    }
    boolean belongsRectangle(){
        return (x >= 0) && (y >= 0) && (x <= r/2 && y <= r);
    }
    boolean belongsTriangle(){
        return (x <= 0) && (y >= 0) && (y - x <= r);
    }
    boolean belongsS(){
        return belongsRectangle() || belongsSector() || belongsTriangle();
    }

}