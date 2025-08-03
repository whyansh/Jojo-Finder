document.querySelector('.rollroll').addEventListener('click', function() {
    document.getElementById('left-content').style.visibility = "hidden";

    const diceNumber = Math.floor(Math.random() * 6) + 1;
    document.body.style.backgroundImage = "url('jojos.jpg')";
    document.getElementById('diceImage').src = `${diceNumber}.png`;
    document.getElementById('rollCount').textContent = `Dice showing ${diceNumber}`;
    document.getElementById('i1').style.visibility = "hidden";
    document.getElementById('i2').style.visibility = "hidden";
    document.getElementById('i3').style.visibility = "hidden";
    document.getElementById('i4').style.visibility = "hidden";
    document.getElementById('i5').style.visibility = "hidden";
    document.getElementById('i6').style.visibility = "hidden";
    if 
(diceNumber === 1) {
        document.getElementById('i1').style.visibility = "visible";
        document.body.style.backgroundImage = "url('jonathan.gif')";
       document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "500px 260px";
        document.getElementById('left-content').textContent = `FUCK YEAH GENTLEMAN ENERGY MENTIONED

        BIG MUSCLE BIG HEART EVEN BIGGER HONOR 💔💔

BRO DIED SAYING “I FORGIVE YOU” TO THE MAN WHO TOOK HIS LIFE 
😭😭😭😭😭😭😭😭

CHIVALRY NEVER DIED IT JUST GOT RIPPED AND BRITISH

#NUMBER1HUSBANDMATERIAL #GODBLESSJONATHAN 💐💪`;
        document.getElementById('left-content').style.visibility = "visible";


        
    } else if (diceNumber === 2) {
        document.getElementById('i2').style.visibility = "visible";
        document.body.style.backgroundImage = "url('joseph.gif')";
      document.body.style.backgroundPosition = "center center";
      document.body.style.backgroundSize = "500px 260px";
        document.getElementById('left-content').textContent = `FUCKING YESSS JOSEPH "YOULL SAY NEXT" JOESTAR IN THE BUILDING

        KING OF TRICKERY KING OF CHAOS KING OF DRIP 💃🕺💯

HAMON? YES. STANDS? YES. BASTARD ENERGY? ALSO YES 🔥🔥

WENT FROM SCREAMING “OH MY GOD” TO BECOMING ONE 😤😤

#GRANDPAWITHHANDSWAGGER #RIPCESAR😩🫡`;
        document.getElementById('left-content').style.visibility = "visible";

        
    }   else if (diceNumber === 3) {
        document.getElementById('i3').style.visibility = "visible";
        document.body.style.backgroundImage = "url('jotaro.gif')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "500px 260px";
          document.getElementById('left-content').textContent = `YARE YARE DAZE??? FUCK NO IT’S YARE YARE DOMINATE 😤😤😤

TALL. QUIET. PUNCHES EVIL THROUGH BUILDINGS.

TALK TO ME WHEN YOUR STAND CAN STOP TIME

 AND YOUR HAT BLENDS INTO YOUR HAIR 💅🧢🖤

BRO WORE THE SAME OUTFIT FOR 10 YEARS AND STILL SLAYED

#STARPLATINUMSUPREMACY #DADMODEUNLOCKED 🐬📚🥊`;
        document.getElementById('left-content').style.visibility = "visible";
       douc
    } else if (diceNumber === 4) {
        document.getElementById('i4').style.visibility = "visible";
        document.body.style.backgroundImage = "url('josuke.gif')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "500px 260px";
          document.getElementById('left-content').textContent = `FUCK YEAH THE POMPADOUR PRINCE IS HERE

SAY SOMETHING BAD ABOUT HIS HAIR? YOU’RE DEAD.

STAND THAT HEALS BUT HANDS THAT HURT 😤😤😤

SMOOTHEST BOY IN MORIOH CITY I’D TRUST HIM 
WITH MY LIFE AND MY MOM’S CREDIT CARD

#DONTTOUCHTHEHAIR #CRAZYDIAMONDCRAZIERHEART 💎🌀❤️`;
        document.getElementById('left-content').style.visibility = "visible";

    } else if (diceNumber === 5) {
        document.getElementById('i5').style.visibility = "visible";
        document.body.style.backgroundImage = "url('giorno.gif')";
        document.body.style.backgroundPosition = "center center";
         document.body.style.backgroundSize = "500px 260px";
           document.getElementById('left-content').textContent = `I HAVE A DREAM????? YES KING WE ALL DO 😭😭😭

LITERAL 15-YEAR-OLD TURNED MAFIA BOSS WHO TURNED
 DEATH INTO LIFE AND DRIP INTO LAW 
 🧥🌟🕊️

BRO HAD REQUIEM BEFORE IT WAS COOL

HE’S NOT JUST THE MAIN CHARACTER HE’S THE FINAL BOSS

#DONUTEDBUTNEVERDEFEATED #GOLDENEXPERIENCEREQUIEM 
💛🌼👑`;
        document.getElementById('left-content').style.visibility = "visible";

    } else if (diceNumber === 6) {
        document.getElementById('i6').style.visibility = "visible";
        document.body.style.backgroundImage = "url('jolyne.gif')";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "500px 260px";
          document.getElementById('left-content').textContent = `FUCKING ICONIC FIRST FEMALE JOJO-JAIL? SHE MADE IT A RUNWAY

STAND? LITERALLY A THREAD OF DESTINY 🧵🦋

CARRIED THE ENTIRE UNIVERSE ON HER BACK IN PRISON CROCS

DADDY ISSUES? FIXED THEM BY BECOMING THE GOAT

#STONEFREEFOREVER #JOLYNEWINSINALLTIMELINES 🔗💚💫`;
        document.getElementById('left-content').style.visibility = "visible";

    }
}
)

