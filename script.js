window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

/*ajout d'un element dans le panier*/
const buttons = document.querySelectorAll('#produits button');
const panier = document.querySelector('#panier ul');

let panierInfos = ''; // Variable pour stocker tous les produits ajoutés

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const titreProduit = button.parentElement.querySelector('h3').textContent;
        
        // Ajouter le produit à la variable panierInfos
        if(panierInfos !== '') {
            panierInfos += '\n' +  '\n'; // sauter une ligne si ce n'est pas le premier produit
        }
        panierInfos += titreProduit ;

        // Mettre à jour l'affichage du panier
        panier.textContent ='\n'+ panierInfos;

        alert('Produit ajouté');
    });
});

