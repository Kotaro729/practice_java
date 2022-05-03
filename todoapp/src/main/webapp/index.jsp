<%@ page language="java" contentType="text/html; charset=UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% request.setAttribute("test", "JSTLのテスト"); %>
<!DOCTYPE html>
<html lang="ja">
<html>

<head>
</head>

<body>
    <h2>Hello World!</h2>
    <c:out value="${test}"/>
    <c:forEach begin="0" end="10">
        こんちくば！<br>
    </c:forEach>
</body>

</html>