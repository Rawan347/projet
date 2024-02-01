var nombre_mystere = Math.floor(Math.random() * 100) + 1;
var compteur = 0;
var nombre_utilisateur = 0;

alert("Jeu Du Nombre Mystère");
alert("Essayer de trouver le nombre mystère");
alert("C'est parti !!!!!!!!!!!");

        while(nombre_utilisateur !== nombre_mystere)
{
    compteur++;
    nombre_utilisateur = parseInt(prompt("Entrer un nombre entier s'il vous plait"));

    while(nombre_utilisateur === "" || isNaN(nombre_utilisateur) || nombre_utilisateur === 0)
    {
        alert("Invalide: " + nombre_utilisateur);
        nombre_utilisateur = parseInt(prompt("Entrer un nombre s'il vous plait"));
    }

    if(nombre_utilisateur > nombre_mystere)
    {
        alert("Trop grand");
    }

    else if(nombre_utilisateur < nombre_mystere)
    {
        alert("Trop petit")
    }

    else
    {
        alert("Félicitation vous avez trouvé le nombre mystère: " + nombre_mystere);
    }
}

    alert("Vous avez trouvé le nombre mystère en: " + compteur + " tours");

   


    







