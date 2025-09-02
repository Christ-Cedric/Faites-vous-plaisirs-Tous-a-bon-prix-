const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');


// Desktop : navbar apparaît au scroll
function handleScroll() {
    if (window.innerWidth > 728) {
        if (window.scrollY > 50) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        navbar.classList.remove('active'); // s'assure que mobile toggle ne reste pas
    }
}



window.addEventListener('scroll', handleScroll);

// Mobile : toggle navbar au clic
menuToggle.addEventListener('click', () => {
    if (window.innerWidth <= 728) {
        navbar.classList.toggle('visible');
    }
});

// Ajustement au redimensionnement
window.addEventListener('resize', () => {
    if (window.innerWidth > 728) {
        navbar.classList.remove('active');
    }
});




/*ajout d'un element dans le panier*/
const buttons = document.querySelectorAll('#produits button');
const offres= document.querySelectorAll('#promotions button')
const panier = document.querySelector('#panier ul');
const cartIcon= document.querySelector('.fa-shopping-cart')
const boitepanier= document.querySelector('#panier')
    const panierPrincip = document.getElementById('panier')
const closeBtn = document.querySelector('.close-btn');
const prix=document.querySelectorAll('#produits .prix')
const totaux =document.getElementById('#panier #total')


let panierInfos = ''; // Variable pour stocker tous les produits ajoutés

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const titreProduit = button.parentElement.querySelector('h3').textContent;
        
        // Ajouter le produit à la variable panierInfos
        if(panierInfos !== '') {
            panierInfos += '<br>'; // sauter une ligne si ce n'est pas le premier produit
        }
        panierInfos += titreProduit ;

        // Mettre à jour l'affichage du panier
            panier.innerHTML = panierInfos;

        alert('Produit ajouté');
    });
});
offres.forEach(function(button) {
    button.addEventListener('click', function() {

        alert('Offre non disponible');
    });
});
cartIcon.addEventListener('click', ()=>
{
   panierPrincip.classList.toggle('active'); 
})
 closeBtn.addEventListener('click', () => {
      panierPrincip.classList.remove('active');
    });
// Récupérer tous les boutons "Ajouter au Panier"

const totalElement = document.getElementById("total"); // <p id="total"></p>
let total = 0; // variable pour stocker la somme

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Récupérer le prix du produit depuis le data-attribute
        let prixTexte = button.previousElementSibling.getAttribute("data-price"); // ex: "2500f"
        let prix = parseFloat(prixTexte.replace("f", "")); // enlever le "f" et convertir en nombre

        // Ajouter au total
        total += prix;

        // Mettre à jour l'affichage
        totalElement.textContent = `Total: ${total}f`;
    });
});
