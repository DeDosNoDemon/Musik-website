let BTNs = document.querySelectorAll(`.song-btn`);
let BTN_imgs = document.querySelectorAll(`.song-btn-img`);
let allSongs = document.querySelectorAll(`.audio`);
let volume = document.querySelector(`.volumeInp`);
let volume_txt = document.querySelector(`.volumeNum`);

function audioCheck(a){
    for(let i=0;i<allSongs.length;i++){
        allSongs[i].pause(); allSongs[i].currentTime = 0;
        BTN_imgs[i].src = `../assets/play.png`;
        if(i!=a)BTNs[i].checked = false;
    }
}

for(let i=0; i<BTNs.length; i++){
    BTNs[i].addEventListener(`change`, function(e){
        let song = allSongs[i];
        if(e.target.checked) {
            audioCheck(i);
            BTN_imgs[i].src = `../assets/pause.png`;
            song.play();
        }
        else {
            BTN_imgs[i].src = `../assets/play.png`;
            song.pause(); song.currentTime = 0;
        };
    });
}
volume.addEventListener(`input`, function(e){
    volume_txt.innerHTML=e.target.value+`%`
    for(let i=0;i<allSongs.length;i++){
        allSongs[i].volume = e.target.value/100
    }
});