let evreneGecisButonu = document.getElementById('submit');

evreneGecisButonu.addEventListener('click', function(){
    let btsIsim = document.getElementById('isim').value;
    let btsSoyisim = document.getElementById('soyisim').value;

    localStorage.setItem('btsOyuncuIsim', btsIsim);
    localStorage.setItem('btsOyuncuSoyisim', btsSoyisim);

    ekraniGuncelle(btsIsim, btsSoyisim);
});

window.onload = function() {
    let btsSaklananIsim = localStorage.getItem('btsOyuncuIsim');
    let btsSaklananSoyisim = localStorage.getItem('btsOyuncuSoyisim');

    if(btsSaklananIsim && btsSaklananSoyisim) {
        ekraniGuncelle(btsSaklananIsim, btsSaklananSoyisim);
    }
};

function ekraniGuncelle(btsIsim, btsSoyisim) {
    let btsOrijinalKarakterAnaSayfa = document.getElementById('container');
    btsOrijinalKarakterAnaSayfa.innerHTML = "";

    btsOrijinalKarakterAnaSayfa.innerHTML = `
    <div id="container">
        <div id="background">
            <img src="/bts/btsImages/btsOrijinalKarakterBackground.jpg" alt="Orijinal Karakter">
        </div>

        <div id="btsOrijinalKarakterAnaSayfa">
            <p id="btsOrijinalKarakterIkonikSoz">BTS Evreni'ne Hoş Geldin ${btsIsim} ${btsSoyisim}.</p>
            
            <div id="btsOrijinalKarakterButonlar">
                <button id="donguyeDevamEt">Döngüye Devam Et</button>
                <button id="yeniDonguyeBasla">Yeni Döngü Başlat</button>
                <button id="zamanCizelgesi">Zaman Çizelgesi</button>
                <button id="ekstralar">Ekstralar</button>
                <button id="karakteriSifirla">Karakteri Sıfırla</button>
            </div>

            <div id="btsKarakterSecimButonu">
                <a href="/bts/bts.html">Karakter Seçim Ekranına Dön</a>
            </div>
        </div>
    </div>`;
}

document.addEventListener('click', function(e) {
    if(e.target && e.target.id == 'karakteriSifirla'){
        localStorage.removeItem('btsOyuncuIsim');
        localStorage.removeItem('btsOyuncuSoyisim');
        
        location.reload();
    }
});
