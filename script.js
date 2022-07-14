window.sr = ScrollReveal({reset: true});

sr.reveal('.title-quemsoueu',{ duration: 1000});

sr.reveal('.video-quemsoueu',{ duration: 2000});

sr.reveal('.title-capa',{ duration: 1000});

sr.reveal('.p-capa-2',{ duration: 1300});

sr.reveal('.botaocapa',{ duration: 1500});

sr.reveal('.content-etapas-1',{ duration: 1000});

sr.reveal('.content-etapas-2',{ duration: 2000});

sr.reveal('.content-etapas-3',{ duration: 3000});



var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '315',
width: '560', // Pode ser configurado em % - por exemplo 100% para se adequar em qualquer largura de tela.
videoId: 'Tp1ZGCqqEuU',
});
}



