const caption = document.getElementById('caption');
var text = ['Gambar Ke-1', 'Gambar Ke-2', 'Gambar Ke-3', 'Gambar Ke-4', 'Gambar Ke-5'];
var nomor = 0;



function ganti(angka) {
    nomor = angka;
    gambar(angka);
}


function prev() {
    nomor--;
    if(nomor < 0) nomor = 4;
    gambar(nomor);
}


function next() {
    nomor++;
    if(nomor > 4) nomor = 0;
    gambar(nomor);
}

function gambar(angka){
    var lokasi = '../img/thumbnails/' + angka + '.jpg';
    document.getElementById('gambar').src = lokasi;
    caption.innerHTML = text[angka];
    return false;
}


function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}