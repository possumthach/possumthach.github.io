window.addEventListener("load", (event) => {
    document.getElementById('navReplace').innerHTML = ` <div class="nbTabsCont">
            <a href="/"><div class="tab">home</div></a>
            <a href="/about"><div class="tab">about</div></a>
            <a href="/projects"><div class="tab">projects</div></a>
            <a href="/funlinks"><div class="tab">fun links</div></a>
            <div class="tabQ dropdown">
                <span style="margin:auto;">SHOP</span> <div class="dropdownContent">
                    <a class="ddLink" href="https://www.redbubble.com/people/Quadriformis/shop?asc=u"> REDBUBBLE</a><a class="ddLink" href="/products"> MORE INFO</a>
                </div></div>
            <div class="tabQ dropdown">
                <span style="margin:auto;">OTHER PLACES</span> <div class="dropdownContent">
                    <a class="ddLink" href="https://spikehunter.tumblr.com/"> TUMBLR</a>  
                    <a class="ddLink" href="https://www.youtube.com/@onewordconvo">YOUTUBE</a>  
                    <a class="ddLink" href="https://onewordconversation.bandcamp.com/">BANDCAMP</a> 
                </div></div>
        </div>`
  });