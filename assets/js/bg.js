(() => {

    if (screen.width > 650) {
        var londonbtn = document.getElementById("londonbtn")
        var video1 = document.getElementById('bg-vid1');
        var video2 = document.getElementById('bg-vid2');

        video1.innerHTML = '<source id="bg-vid1-src" src="images/bg1.mp4" type="video/mp4">'
        video2.innerHTML = '<source id="bg-vid2-src" src="images/bg2.mp4" type="video/mp4">'

        video1.onended = () => {
            video2.play()
            video2.classList.toggle('hidden')
        };
        londonbtn.onclick = (e) => {
            e.preventDefault()
            video3.play()
            video3.classList.toggle('hidden')
            video1.classList.toggle('hidden')
            video2.classList.toggle('hidden')
        };
        } else {
        var background = document.getElementById('bg-mobile');
        background.innerHTML = '<img id="bg-mobile-pic" class="fullscreen-bg-pic" src="https://cdn.elken.io/site/bg/bg-mobile.jpg">'
    }    
    
            var video3 = document.getElementById('bg-vid3');
            video3.innerHTML = '<source id="bg-vid3-src" src="images/bg3.mp4" type="video/mp4">'



})();

