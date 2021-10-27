<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
    <?php
      
      $scores = array(9,7,12,8,33,39);
      
      function average($array){
      
        $total = 0;
        foreach($array as $value){
      
          $total += $value;
        }
      
        return $total/count($array);
      }
      
      


$myfile = fopen("Data.txt", "w") or die("Unable to open file!");
$marks=average($scores);
$name="Bishal Deb \n";
$txt = "Your Marks is $marks \n";
fwrite($myfile, $name);
fwrite($myfile, $txt);
fclose($myfile);
    ?>
<br>
     <?php
$myfile = fopen("Data.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("Data.txt"));
fclose($myfile);
?> 


</body>
</html>