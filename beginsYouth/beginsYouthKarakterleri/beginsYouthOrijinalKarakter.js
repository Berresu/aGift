let evreneGecisButonu = document.getElementById('submit');

evreneGecisButonu.addEventListener('click', function(){
    let beginsYouthIsim = document.getElementById('isim').value;
    let beginsYouthSoyisim = document.getElementById('soyisim').value;

    localStorage.setItem('beginsYouthOyuncuIsim', beginsYouthIsim);
    localStorage.setItem('beginsYouthOyuncuSoyisim', beginsYouthSoyisim);
    ekraniGuncelle(beginsYouthIsim, beginsYouthSoyisim);
});

window.onload = function() {
    let beginsYouthSaklananIsim = localStorage.getItem('beginsYouthOyuncuIsim');
    let beginsYouthSaklananSoyisim = localStorage.getItem('beginsYouthOyuncuSoyisim');

    if(beginsYouthSaklananIsim && beginsYouthSaklananSoyisim) {
        ekraniGuncelle(beginsYouthSaklananIsim, beginsYouthSaklananSoyisim);
    }
};

function ekraniGuncelle(beginsYouthIsim, beginsYouthSoyisim) {
    let beginsYouthOrijinalKarakterAnaSayfa = document.getElementById('container');
    beginsYouthOrijinalKarakterAnaSayfa.innerHTML = "";

    beginsYouthOrijinalKarakterAnaSayfa.innerHTML = `
    <div id="container">
        <div id="background">
            <img src="/beginsYouth/beginsYouthImages/beginsYouthOrijinalKarakterBackground.jpg" alt="Orijinal Karakter">
        </div>

        <div id="beginsYouthOrijinalKarakterAnaSayfa">
            <p id="beginsYouthOrijinalKarakterIkonikSoz">BTS Evreni'ne Hoş Geldin ${beginsYouthIsim} ${beginsYouthSoyisim}.</p>

            <div id="beginsYouthOrijinalKarakterButonlar">
                <button id="donguyeDevamEt">Döngüye Devam Et</button>
                <button id="yeniDonguyeBasla">Yeni Döngü Başlat</button>
                <button id="zamanCizelgesi">Zaman Çizelgesi</button>
                <button id="ekstralar">Ekstralar</button>
                <button id="karakteriSifirla">Karakteri Sıfırla</button>
            </div>

            <div id="beginsYouthKarakterSecimButonu">
                <a href="/beginsYouth/beginsYouth.html">Karakter Seçim Ekranına Dön</a>
            </div>
        </div>
    </div>`;
}

document.addEventListener('click', function(e) {
    if(e.target && e.target.id == 'karakteriSifirla'){
        localStorage.removeItem('beginsYouthOyuncuIsim');
        localStorage.removeItem('beginsYouthOyuncuSoyisim');
        
        location.reload();
    }
});
