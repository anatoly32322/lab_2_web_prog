<%@ page import="java.sql.SQLOutput" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Collections" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>

        table.headerContainer{
            width: 100%;
            background: #bcf7ff;
            font-family: sans-serif;
        }
        h1.mainHeaderText{
            margin-left: 20px;
        }
        td.rightHeaderPart{
            padding-right: 20px;
            text-align: right;
        }
        table.imgContainer{
            width: 100%;
            text-align: center;
            padding-top: 50px;
        }
        td.imgCell{
            mix-blend-mode: multiply;
        }
        body{
            background: #c5ffff
        }
        table.inputContainer {
            padding-left: 45%;
        }
        table#result-table{
            width: 100%;
            background: #bcf7ff;
            transition-property: background-color;
            transition-duration: 3s;
        }
    </style>
</head>
<body>
<table class="headerContainer">
    <tr>
        <td><h1 class="mainHeaderText">Web. Лабораторная работа №1.</h1></td>
        <td class="rightHeaderPart">
            <h2>Вариант № 13101</h2>
            <h3>Бритков Анатолий, P3213</h3>
        </td>
    </tr>
</table>
<table class="imgContainer">
    <td class="imgCell">
        <canvas id="graph-canvas" width="500px" height="500">График</canvas>
    </td>
</table>
<table id="inputX" class="inputContainer">
    <td>X:</td>
    <td class="inputCell">
        <% for(int i = -4; i <= 5; i++){ %>
            <label class="label"><%=i%></label>
            <input class="x-checkbox" type="checkbox" name="x" value="<%=i%>">
        <% } %>

    </td>
</table>
<table id="inputY" class="inputContainer">
    <td>Y:</td>
    <td class="inputCell">
        <input type="text" name="y" id="input2">
    </td>
</table>
<table id="inputR" class="inputContainer">
    <td>R:</td>
    <td class="inputCell" name="rCheckbox">
        <% for(double i = 1; i <= 3; i += 0.5){ %>
            <label class="label"><%=i%></label>
            <input class="r-checkbox" type="checkbox" name="r" value="<%=i%>">
        <% } %>
    </td>
    <tr>
        <td colspan="100%" id="buttonContainer">
            <button class="submit-button" type="submit" onclick="submit()">Let's go!</button>
        </td>
    </tr>
</table>
<table id="result-table">
    <tr class="table-header">
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Локальное время</th>
        <th>Время исполнения</th>
        <th>Попадание</th>
    </tr>
</table>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="js/script.js"></script>
</body>

</html>