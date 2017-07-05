<?php
   $data = file_get_contents("php://input");
   $myfile = fopen("historique.json", "w") or die("Unable to open file!");
   fwrite($myfile, $data);
   fclose($myfile);
?>