var archer_heading=document.querySelector('.clash-card__level.clash-card__level--archer')
archer_heading.nextElementSibling.innerHTML="The Archer"
var giant_heading=document.querySelector('.clash-card__level.clash-card__level--goblin')
giant_heading.nextElementSibling.innerHTML="The Gaint";




let clashCards = document.querySelectorAll('.clash-card__unit-stats');
console.log(clashCards)

clashCards.forEach(card => {
    //card will be the div in each different section
    let cardClasses = Array.from(card.classList)
    if (cardClasses.includes("clash-card__unit-stats--barbarian")) {
        card.style.backgroundColor = "#ec9b3b";
    } else if (cardClasses.includes("clash-card__unit-stats--archer")) {
        card.style.backgroundColor = "#ee5487";
    } else if (cardClasses.includes("clash-card__unit-stats--giant")) {
        card.style.backgroundColor = "#f6901a";
    } else if (cardClasses.includes("clash-card__unit-stats--goblin")) {
        card.style.backgroundColor = "#82bb30";
    } else if (cardClasses.includes("clash-card__unit-stats--wizard")) {
        card.style.backgroundColor = "#4facff";
    }
});




let text = document.getElementsByClassName("one-third");
text = [...text];
text.forEach(text => {
    text.style.color = "#ffffff";
})