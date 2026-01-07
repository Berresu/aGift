let evreneGecisButonu = document.getElementById('submit');

evreneGecisButonu.addEventListener('click', function(){
    let btsIsim = document.getElementById('isim').value;
    let btsSoyisim = document.getElementById('soyisim').value;

    localStorage.setItem('btsOyuncuIsim', btsIsim);
    localStorage.setItem('btsOyuncuSoyisim', btsSoyisim);
})
