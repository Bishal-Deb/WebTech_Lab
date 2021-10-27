<?xml version="1.0" encoding="iso-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<style>
table {
  border-collapse: collapse;
  width: 80%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #FFFFFF}

th {
  background-color: #330099;
  color: white;
}
h1 {
  font-family: Trattatello, fantasy;

}
.header {
  background-color: #330099;
  text-align: center;
  padding:inherit;
}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
<title>Online National Level IT Gateways Fest 2021</title>
</head>
<div class="header">
  <h1><font color="#FFFFFF" size="+4">Online National Level IT Gateways Fest 2021 </font></h1>
</div>
 <center><img src="Gateways2.jpg" /></center>
<body>
 <h2 align="center"><font><u><b>Registration Details</b></u></font></h2>
   <table align="center" border="1" bordercolor="#33CCFF">
   <tr>
    <th >College Name</th>
    <th >Name</th>
    <th >Branch</th>
    <th >Email</th>

   </tr>
    <xsl:for-each select="CHRIST/CS">
   <tr>
    <td ><xsl:value-of select="STU_COLLEGE"/></td>
    <td ><xsl:value-of select="STU_NAME"/></td>
    <td ><xsl:value-of select="STU_BRANCH"/></td>
    <td ><xsl:value-of select="STU_EMAIL"/></td>


   </tr>
    </xsl:for-each>
    </table><br />


</body>
</html>

</xsl:template>
</xsl:stylesheet>
