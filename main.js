// global variables
let aside = document.querySelector('#CallHistory')
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

callBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        
        if (coins >= 20){
            coins -= 20;
            coinCount.innerText = coins
            let card = btn.parentElement.parentElement.querySelector('.cBody');
            let serviceName = card.querySelector('.cardT').innerText;
            let serviceNum = card.querySelector('.serviceNum').innerText;
            // call history functionality 
            
            // call histories 
            const time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
            });
            let cHistories = `<div class="cHistorys flex justify-between items-center bg-[#fafafa] p-2 gap-2 mt-3 rounded-2xl ">
                        <div class="logs">
                            <h2 class="cardT font-bold text-[16px] ">
                            ${serviceName}
                            </h2>
                            <h3 class="font-semi-bold mt-3 text-[15px]">${serviceNum}</h3>
                        </div>
                        <div class="time">
                            <p>${time}</p>
                        </div>
                    </div>`
            aside.innerHTML += cHistories
            // calling alert
            alert(`📞 Calling ${serviceName} at ${serviceNum}...`)
        }
        else{
            coinCount.innerText = 0
            alert("❌ Not Enough Coin to make call")
        }
        
    })
})
// clear button functionality 
let clear = document.querySelector('.clearBtn');
clear.addEventListener('click', function(){
    aside.innerHTML = ''
});
