

<?php
   $data = file_get_contents("php://input");
  // $data = json_decode(file_get_contents("php://input"));

$myfile = fopen("historique.json", "w") or die("Unable to open file!");
/*fwrite($myfile, "{  'query' :");
fwrite($myfile, $data->query);
fwrite($myfile,",'videos':");
fwrite($myfile, $data->videos)
fwrite($myfile, +",'next':"+ $data->nextPage+",'prev':"+ $data->previousPage+"}}");
fwrite($myfile, "{'query' :"+$data->query+",'videos':"+ $data->videos+",'next':"+ $data->nextPage+",'prev':"+ $data->previousPage+"}}");
*/
fwrite($myfile, $data);
fclose($myfile);

?>