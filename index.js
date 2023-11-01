let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secondHand = document.getElementById("second");

function showTime(){
    // for current date or time
    let date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    // for hourrotation (  min and sec also effects on hr hand) so,
    // for min , in 1hr = 60min = 30deg => 1min = 30/60 = 1/2deg => m min = m/2deg
    // for sec, in 1hr = 3600sec = 30deg => 1sec = 30/3600 = 1/120 => s sec = s/120  
    // for 12hr = 360deg => 1 hr = 30deg => h hr = 30 * h +  m/2 + s/120;
    
    let hourRotation = 30 * hour + minute/2;   // + second/120

    // for minuterotation (sec also efffects on min)
    // for sec, in 60sec = 1min = 6deg => 1s = 6/60 = 1/10 => s sec = s/10
    // for 60min = 360deg => 1min = 6deg => m min = 6 * m + s/10
    
    let minuteRotation = 6 * minute ;   //+ second/10

    // for sec, in 1min = 60s = 360deg => 1sec = 360/60deg = 6deg => s sec = 6s;   
    let secondRotation = 6 * second;

    hourHand.style.transform = `rotate(${hourRotation}deg)`
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`
    secondHand.style.transform = `rotate(${secondRotation}deg)`    

} 

// for call a function at a specified intervals inn millisecond for that

setInterval(showTime);