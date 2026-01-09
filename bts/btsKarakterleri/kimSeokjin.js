let anaSayfa=document.getElementById('container');

let donguyeDevamEt=document.getElementById('donguyeDevamEt');
let yeniDonguyeBasla=document.getElementById('yeniDonguyeBasla');
let zamanCizelgesi=document.getElementById('zamanCizelgesi');
let ekstralar=document.getElementById('ekstralar');

let kimSeokjinBolum1 = [
    {
        karakter: "Pilot",
        metin: "Sevgili yolcularımız... Kısa süre içerisinde Los Angeles'tan olan uçuşumuz Incheon Uluslararası Havaalanına iniş yapacaktır.",
        arkaPlan: "url('.../img/bts/btsImages/ucak.jpg')"
    },
    {
        karakter: "Kim Seokjin",
        metin: "İki yıl oldu. Sanki çok uzun süredir yoktum değil ama... Evdeymiş gibi hissetmiyorum.",
        arkaPlan: "url('.../img/bts/btsImages/ucak.jpg')",
        karakterResim: "url(.../img/bts/btsImages/kimSeokjinDuruyor.png)"
    },
    {
        karakter: "Araba Radyosu",
        metin: "Bugün 11 Nisan ve bu sizin trafik uyarınız. Eminim ki çoğunuz bu haftasonu piknik yapmaya gideceksiniz. Yani ana otobanların hepsinde ağır trafiğe hazırlıklı olun.",
    },
    {
        karakter: "Kim Seokjin",
        metin: "Liseden beri buraya ilk defa geldim."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Jungkook?!"
    },
    {
        karakter: "Disiplinci",
        metin: "Aynı ortaokul gibi, hala o tembel alışkanlıklar var, hah? Tam orada durun! Hepinizin bu öğleden sonra cezası var!"
    },
    {
        karakter: "Jung Hoseok",
        metin: "Ahk! Yine olmasın."
    },
    {
        karakter:"Disiplinci",
        metin: "Sen burada bekle."
    },
    {
        karakter: "Kim Seokjin",
        metin: "O günden sonra, orası gizli yerimiz olarak kaldı. Orada çok eğlendik. O boğucu okulun içinde gülebildiğimiz ve eğlenebildiğimiz tek yer orasıydı."
    },
    {
        karakter: "Benzinci",
        metin: "Hay ananı, neden buraya koyuyorlar ki?!"
    },
    {
        karakter: "Kim Seokjin",
        metin: "Namjoon...?"
    },
    {
        karakter: "Benzinci",
        metin: "Efendim? Başka bir şeye ihtiyacınız var mı?"
    },
    {
        karakter: "Kim Seokjin",
        metin: "Hayır."
    },
    {
        karakter: "Benzinci",
        metin: "Çıkış şurası, efendim."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Acaba nasıllar. Belki o zaman yanlarına yürümeliydim."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Afedersiniz. Namjoon sizin çalışanlarınızdan mı?"
    },
    {
        karakter: "Benzinci",
        metin: "Ah Namjoon mu? Şu anda burda değil gerçi."
    },
    {
        karakter: "Kim Seokjin",
        metin: "En azından onun numarasını alabilir miyim? Liseden onun arkadaşıyım."
    },
    {
        karakter: "Benzinci",
        metin: "Ah... öyle mi? Şu anda gözaltında."
    },
    {
        karakter: "Polis",
        metin: "Girebilirsiniz. On dakikan var."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Namjoon. Burada olduğunu duydum. Çalıştığın benzin istasyonu söyledi."
    },
    {
        karakter: "Kim Namjoon",
        metin: "...Seokjin. Uzun süre oldu."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Ne olduğunu duydum. Böyle olmasına gerek olmadığını söylediler. Eğer herhangi bir şeye ihtiyacın olursa ya da benim yapabileceğim bir şey varsa..."
    },
    {
        karakter: "Kim Namjoon",
        metin: "Yapabileceğin hiçbir şey yok. Her şey çoktan anlaşıldı."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Duyduğuma göre her şey bu anlaşmayla ilgiliymiş."
    },
    {
        karakter: "Kim Namjoon",
        metin: "Seni fakir piç! Bir anlaşmayı bile karşılayamıyor musun?! Dedi. Dövdüğüm kişi, yani."
    },
    {
        karakter: "Kim Namjoon",
        metin: "Nasıl ödemek istersiniz, efendim?"
    },
    {
        karakter: "Dövülen Adam",
        metin: "La al artık!"
    },
    {
        karakter: "Kim Namjoon",
        metin: "Tamam efendim. Özür dilerim efendim."
    },
    {
        karakter: "Dövülen Adam",
        metin: "Lan göt! Bu arabanın ne kadar olduğunu biliyor musun?!"
    },
    {
        karakter: "Kim Namjoon",
        metin: "Özür dilerim efendim."
    },
    {
        karakter: "Dövülen Adam",
        metin: "Paramı geri ver. Ben boklara para vermem."
    },
    {
        karakter: "Kim Namjoon",
        metin: "..."
    },
    {
        karakter: "Dövülen Adam",
        metin: "Sağır mısın? Paramı geri ver dedim! Ne, bir anda açgözlülük mü yapmaya karar verdin? Seni fakir piç!"
    },
    {
        karakter: "Polis",
        metin: "Bak, o kadar yaralanmış bile görünmüyorsun. İki haftada biter. Anlaşalım ve bitirelim, olur mu?"
    },
    {
        karakter: "Dövülen Adam",
        metin: "Anlaşmak mı? Ha! Anlaşmayı karşılayabilir misin bile be? Hehe."
    },
    {
        karakter: "Kim Namjoon",
        metin: "Anlaşmıyorum."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Ve Namjoon bu şekilde hapse düştü. Bu Nisan 11'di. Onu benzin istasyonunda görüp, yanından geçtiğim gün."
    },
    {
        karakter: "Kim Namjoon",
        metin: "Olacağı varmış. Fakirim, değil mi hyung? Olacakmış olmuş yani. Benim için endişelenme. Sadece git."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Diğerleri biliyor mu?"
    },
    {
        karakter: "Kim Namjoon",
        metin: "..."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Herkes nasıl durumda? Hâlâ onlarla iletişimdesin, değil mi?"
    },
    {
        karakter: "Kim Namjoon",
        metin: "Hayır, artık değil."
    },
    {
        karakter: "Kim Seokjin",
        metin: "..."
    },
    {
        karakter: "Kim Namjoon",
        metin: "Oh, bilmiyorsun. Jungkook öldü. Yoongi de. Hoseok hastanede. Kötü bir trafik kazası geçirdi. Taehyung ve Jimin'den haberim yok. Uzun bir süredir iletişimde değiliz."
    },
    {
        karakter: "Polis",
        metin: "Ziyaret zamanı bitti. Lütfen odadan çıkın."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Eğer... Eğer o gece Namjoon ile konuşsaydım, belki de onunla hapishanede konuşmazdık."
    },
    {
        karakter: "Gazeteci -1-",
        metin: "Neden babanı öldürdün?"
    },
    {
        karakter: "Gazeteci -2-",
        metin: "Kız kardeşinin dediğine göre, baban siz ikinizi küçüklükten beri taciz ediyormuş! Neden bunun hakkında hiçbir şey söylemedin?!"
    },
    {
        karakter: "Kim Seokjin",
        metin: "...!"
    },
    {
        karakter: "Gazeteci -3-",
        metin: "Olay yerini ne zaman inceleyecekler biliyor musun?"
    },
    {
        karakter: "Kim Seokjin",
        metin: "TAEHYUNG!!"
    },
    {
        karakter: "Kim Seokjin",
        metin: "Yedimizin beraber mutlu olduğu bir zaman vardı, birbirimize sahip olduğumuzu bilmek."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Nerede işler yanlışa gitti? Herkesin sonu kötü oldu. Ayrıldıktan sonra herhangi birimiz mutlu muyduk ki? O zamanlar, sadece beraber olmak bizi mutlu etmek için yeterli bir sebepti. Ama neden... Bize ne oldu?"
    },
    {
        karakter: "Kedi",
        metin: "Eğer zamanı geri döndürebilsen, hataları ve yanlışları düzeltip... Herkesi kurtarabileceğine inanıyor musun?"
    },
    {
        karakter: "Kim Seokjin",
        metin: "Halüsinasyon mu görüyorum...? Fark etmez. Eğer zamanı geri döndürebilsem, eğer hataları ve yanlışları düzeltip, hepimizi eskisi gibi mutlu yapabilme yetkisine sahip olsam, her şeyi yapardım."
    },
    {
        karakter: "Kim Seokjin",
        metin: "Galiba rüya gördüm... Hatırlayamıyorum..."
    }
];

let diyalogSirasi = 0;

donguyeDevamEt.addEventListener('click', function() {
    let anaIcerik = document.getElementById('kimSeokjinAnaSayfa');
    
    anaIcerik.innerHTML = `
        <div id="diyalog-sistemi">
            <h2 id="konusan-karakter"></h2>
            <p id="kimSeokjinIkonikSoz">Hikaye başlıyor...</p>
            <div id="karakter-resimleri">
                <img id="jin-sprite" src="" style="display:none;">
            </div>
            <button id="devam-btn">Devam Et (Tıkla)</button>
        </div>
    `;

    document.getElementById('devam-btn').addEventListener('click', diyalogIlerlet);

    diyalogIlerlet();
});

function diyalogIlerlet() {
    if (diyalogSirasi < kimSeokjinBolum1.length) {
        let suAnKiSahne = kimSeokjinBolum1[diyalogSirasi];
        
        document.getElementById('konusan-karakter').innerText = suAnKiSahne.karakter;
        document.getElementById('kimSeokjinIkonikSoz').innerText = suAnKiSahne.metin;

        if(suAnKiSahne.arkaPlan) {
            document.body.style.backgroundImage = suAnKiSahne.arkaPlan;
        }

        diyalogSirasi++;
    } else {
        secenekleriGetir();
    }
}
