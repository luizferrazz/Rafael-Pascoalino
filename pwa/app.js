if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => console.log("Service Worker registrado!", reg))
    .catch((err) => console.log("Service Worker nao foi registrado...", err))
}