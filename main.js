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
// Call Button Functionality
let coins = 100;
let coinCount = document.getElementById('coinCount')
let callBtn = document.querySelectorAll('.call-btn')
console.log(coinCount);

callBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        coins -= 20;
        coinCount.innerText = coins
        if (coins >= 20){
            let card = btn.parentElement.parentElement.querySelector('.cBody');
            let serviceName = card.querySelector('.cardT').innerText;
            let serviceNum = card.querySelector('.serviceNum').innerText;
            
            alert(`📞 Calling ${serviceName} at ${serviceNum}...`)
        }
        else{
            coinCount.innerText = 0
            alert("Not Enough Coin to make call")
        }
    })
})