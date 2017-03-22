# Youtube
Cette application permet d'effectuer une recherche sur Youtube en utilisant les APIs Youtube, AngularJS, MaterializeCSS. 
Elle affiche les vidéos retrouvées dans une liste (titre, lien vers la vidéo, image thumbnail), 
en donnant la possibilité de parcourir tous les résultats à travers deux boutons "next" et "previous".
De plus, Elle persiste en local , sur la machine de l'utilisateur. En effet, le résultat de la dernière recherche effectuée 
est enregistrée de façon pour afficher les derniers résultats si on quitte puis on rouvre l'application.
Le résultat recherché est enregistré dans un fichier JSON en utilisant un script PHP. 
Lorsque l’utilisateur souhaite accéder un sa dernière recherche, l’application demande  ce fichier JSON via une requête GET. 
