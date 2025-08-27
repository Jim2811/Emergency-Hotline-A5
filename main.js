// Heart Functionality
let cardHeart = document.querySelectorAll('.cardHeart');
let favSpan = document.getElementById('favCount')
let favCount = 0;

cardHeart.forEach(function(heart){
    heart.addEventListener('click', function(){
        favCount ++
        favSpan.innerText = favCount
    })
});