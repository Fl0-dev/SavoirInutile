/**
 * permet de supprimer la cible
 * lorsqu'on click dessus
 * @param e
 */
function supprimer(e) {
    if(confirm("Voulez-vous supprimer ce savoir ?")){
        e.currentTarget.remove();
    }
}

/**
 * ajoute un texte dans le
 * html
 */
function ajouter() {
    //récupération des champs
    var savoir = document.querySelector('#libelleSavoir').value;
    var auteur = document.querySelector('#auteur').value;
    var date = document.querySelector('#date').valueAsDate;
    //transformation de la date en version fr
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    var dateAaffiche = date.toLocaleDateString("fr-FR",options);
    //déclaration d'un élément de la liste
    var item = document.createElement('div');
    //ajout si champs remplis
    if (savoir !=='' && auteur !==''&& date !=='') {
        //création de l'item
        item.innerHTML = "<h5><q>" + savoir + "</q></h5><p>Par " + auteur + " le " + dateAaffiche + "</p>";
        //affichage
        document.querySelector('#divResultat').append(item);
        //fonction qui permet de supprimer
        item.addEventListener('click',supprimer);
        //vide les champs
        document.querySelector('#libelleSavoir').value='';
        document.querySelector('#auteur').value='';
        document.querySelector('#date').valueAsDate='';
    }else {
        //message si champs vides
        alert("Veuillez remplir les champs");
    }

}

