var quotes = new Array ("Yeah my mom was gossiping with your mom and she wont let me hangout with you because YOUR TOO GAY","the pot smotker becomes the POT","You put the egg in the chinbg nkkbdke and make it sloppt","im gonna reduce you to an essential oil if you dont pay up","HEY YOU KNOW IS VERY GOOD","Rotten putrid existence permeates the 1’s and 0’s of this digital realm","worms?? yes!!","looks like you two want to get banned from this website.","u woud say that cos ure a zombie","THE HOGBEAR GOT YOU DIDN'T HE !!!!!!!!","whats ur favorite dinosaurs NO SEX","THATS STUPIDITIC","i have more organs than anyone i know bro","he looks so fly even if he has anxiety problems","thank you for not being horny :)","MAN BORN WITHOUT ASS","'I Hate gay peple' Said jesus Homophobically","Lately people call me scoop life.","most wanted criminal everywhere!","i would of been jugging hella nutella","do you get any mileage out of this? is this funny to you ?","hey man dry those peepers","the frickin e-mail!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!","im TERRIFIED out of my wits, and gradnma doesn't understand i suffer frm GOTHIC DEPRESSION","names for criminal fraternity?","no time for house","All of the bad things have happened.","Mint chip Ice cream","I can kill a good time/vibe like when I come in there is a vibe change.","he was killed into ham when he was 6","Kiss back you pathetic snail","nothing’s worse then being alone a getting killed by a nightmare demon","really trying but also not","They’re lauphing at us because we’re idiots.","your a boring bich and I am seven","they call me dracula the way im so sucks","all we gotta do is light em and smoke him","Im a kid that rock","I'm 13 but I literally have seen everything","I was doing the egg thing for money!","I listened to them on Myspace before they got big.","Well if it isn’t the little bitch himself.","i heard the GOVERNMENT put guns and bomb in his fat gay ass and esploded him. SAD.","holy moly that's a lot of dead pals","LET ME BE YOUR MUUUUSE, INTERNET","you will be KILL BY DEMON","Yeah no one thinks like this, you're a broken person","This has to be mental illness...","the reminiscence of a boner long gone","lmao old man *breaks all his bones*","brings me back to the worst time of my life lol. I love it.","100 million nasty germs crawling all over it right now.","Try not to obsess over telling your boyfriend that you want to have sex.","If he wants to watch it with me it has to go through the vortex.","IMMEDIATELY KILLED BY SHADOW PEOPLE","holy fuck yippy doddle!!!!","BONE GIRTH SMASHED AND SLAMMED!!!","just such a top not ch lad like man what a fella, like a real stellar guy","hi fuck you","am am a robot am a a killer","Wiki is right he is in fact a little motehrfucker","Also, your scythe sucks lol","Does anybody hear the bigfoot calls in the background?","I'm shitting it I really am","Driving around in Fucking trucks! ","this wacky world isn't even wacky at all","Grind Me Into Sludge 😂","So. Funny. And. Hilarios!","Im a creepy pasta im not done being created","Maaan, they don't pay me enough to not make it evil.","Are we friends now or are you trying to trap me in some kind of ritual","I am a boring person with no interesting qualities!","You’ve given me more cereal related information than I know what to do with","a normal human being with feelings who is not weird or evil","spiders are the superior species","you may still be skeptical of the existence of 'the Internet.'","there is a wizardy bit where it’s hard to get started","You’re good enough to be a future gender, yeah","I have never heard the phrase 'a big fan of rhombuses' in my life","It’s an open question whether fish people will be safe in their homes during quarantine.","a small, unpretentious zoonotic disease music-making project","I am totally not creepy, no","had the misfortune of seeing some damn birds outside while walking to the bathroom");

var i = Math.floor(83*Math.random())

document.getElementById("subhead-quote").innerHTML = (quotes[i]);


function toggleDark() {
   var element = document.body;
 element.classList.toggle("dark-mode");
  const collection = document.getElementsByClassName("darkable");
  for (let i = 0; i < collection.length; i++) {
  collection[i].classList.toggle("dark-mode");
  }}

function toggleOnline() {
  const collection = document.getElementsByClassName("users-online");
  for (let i = 0; i < collection.length; i++) {
  collection[i].classList.toggle("online-hidden");
  }}

var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      document.getElementById("collapse-arrow").innerHTML = "▼";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      document.getElementById("collapse-arrow").innerHTML = "▲";
    }
  });
}