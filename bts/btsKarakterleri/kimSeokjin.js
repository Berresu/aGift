let anaSayfa=document.getElementById('container');

let donguyeDevamEt=document.getElementById('donguyeDevamEt');
let yeniDonguyeBasla=document.getElementById('yeniDonguyeBasla');
let zamanCizelgesi=document.getElementById('zamanCizelgesi');
let ekstralar=document.getElementById('ekstralar');

let kimSeokjinBolum1Metinleri = [
    {
        id: "kimSeokjinUcak1",
        karakter: "Pilot",
        metin: "Sevgili yolcularımız... Kısa süre içerisinde Los Angeles'tan olan uçuşumuz Incheon Uluslararası Havaalanına iniş yapacaktır.",
        arkaPlan: "url('/bts/btsImages/ucak.jpg')"
    },
    {
        id: "kimSeokjinDiyalog1",
        karakter: "Kim Seokjin",
        metin: "İki yıl oldu. Sanki çok uzun süredir yoktum değil ama... Evdeymiş gibi hissetmiyorum.",
        arkaPlan: "url('/bts/btsImages/ucakIci.jpg')"
    },
    {
        id: "kimSeokjinAraba1",
        karakter: "Araba Radyosu",
        metin: "Bugün 11 Nisan ve bu sizin trafik uyarınız. Eminim ki çoğunuz bu haftasonu piknik yapmaya gideceksiniz. Yani ana otobanların hepsinde ağır trafiğe hazırlıklı olun.",
        arkaPlan: "url('/bts/btsImages/arabaIci.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog2",
        karakter: "Kim Seokjin",
        metin: "Liseden beri buraya ilk defa geldim.",
        arkaPlan: "url('/bts/btsImages/songjuLisesi.jpg')"
    },
    {
        id: "kimSeokjinDiyalog3",
        karakter: "Kim Seokjin",
        metin: "Jungkook?!",
        arkaPlan: "url('/bts/btsImages/songjuLisesi.jpg')"
    },
    {
        id: "kimSeokjinTarih1",
        karakter: "",
        metin: "Yıl 19, Lise Anısı",
        arkaPlan: "url('/bts/btsImages/songjuLiseArkaBahce.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDisiplinci1",
        karakter: "Disiplinci",
        metin: "Aynı ortaokul gibi, hala o tembel alışkanlıklar var, hah? Tam orada durun! Hepinizin bu öğleden sonra cezası var!",
        arkaPlan: "url('/bts/btsImages/songjuLiseArkaBahce.jpg')"
    },
    {
        id: "kimSeokjinJungHoseok1",
        karakter: "Jung Hoseok",
        metin: "Ahk! Yine olmasın.",
        arkaPlan: "url('/bts/btsImages/songjuLiseArkaBahce.jpg')"
    },
    {
        id: "kimSeokjinDisiplinci2",
        karakter:"Disiplinci",
        metin: "Sen burada bekle.",
        arkaPlan: "url('/bts/btsImages/depoDaginik.jpg')"
    },
    {
        id: "kimSeokjinDepo1",
        karakter: "",
        metin: "",
        arkaPlan: "url('/bts/btsImages/depoDaginik.jpg')"
    },
    {
        id: "kimSeokjinDepo2",
        karakter: "",
        metin: "",
        arkaPlan: "url('/bts/btsImages/depoToplu.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog4",
        karakter: "Kim Seokjin",
        metin: "O günden sonra, orası gizli yerimiz olarak kaldı. Orada çok eğlendik. O boğucu okulun içinde gülebildiğimiz ve eğlenebildiğimiz tek yer orasıydı.",
        arkaPlan: "url('/bts/btsImages/depoToplu.jpg')"
    },
    {
        id: "kimSeokjinKorna1",
        karakter: "",
        metin: "HONK! HONK!",
        arkaPlan: "url('/bts/btsImages/songjuLisesi.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinBenzinci1",
        karakter: "Benzinci",
        metin: "Hay ananı, neden buraya koyuyorlar ki?!",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog5",
        karakter: "Kim Seokjin",
        metin: "Namjoon...?",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinBenzinci2",
        karakter: "Benzinci",
        metin: "Efendim? Başka bir şeye ihtiyacınız var mı?",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinDiyalog6",
        karakter: "Kim Seokjin",
        metin: "Hayır.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinBenzinci3",
        karakter: "Benzinci",
        metin: "Çıkış şurası, efendim.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinTarih2",
        karakter: "",
        metin: "22 Mayıs, Yıl 22",
        arkaPlan: "url('/bts/btsImages/kimSeokjinOda.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog7",
        karakter: "Kim Seokjin",
        metin: "Acaba nasıllar. Belki o zaman yanlarına yürümeliydim.",
        arkaPlan: "url('/bts/btsImages/kimSeokjinOda.jpg')"
    },
    {
        id: "kimSeokjinDiyalog8",
        karakter: "Kim Seokjin",
        metin: "Afedersiniz. Namjoon sizin çalışanlarınızdan mı?",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGunduz.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinBenzinci4",
        karakter: "Benzinci",
        metin: "Ah Namjoon mu? Şu anda burda değil gerçi.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGunduz.jpg')"
    },
    {
        id: "kimSeokjinDiyalog9",
        karakter: "Kim Seokjin",
        metin: "En azından onun numarasını alabilir miyim? Liseden onun arkadaşıyım.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGunduz.jpg')"
    },
    {
        id: "kimSeokjinBenzinci5",
        karakter: "Benzinci",
        metin: "Ah... öyle mi? Şu anda gözaltında.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGunduz.jpg')"
    },
    {
        id: "kimSeokjinPolis1",
        karakter: "Polis",
        metin: "Girebilirsiniz. On dakikan var.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog10",
        karakter: "Kim Seokjin",
        metin: "Namjoon. Burada olduğunu duydum. Çalıştığın benzin istasyonu söyledi.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon1",
        karakter: "Kim Namjoon",
        metin: "...Seokjin. Uzun süre oldu.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinDiyalog11",
        karakter: "Kim Seokjin",
        metin: "Ne olduğunu duydum. Böyle olmasına gerek olmadığını söylediler. Eğer herhangi bir şeye ihtiyacın olursa ya da benim yapabileceğim bir şey varsa...",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon2",
        karakter: "Kim Namjoon",
        metin: "Yapabileceğin hiçbir şey yok. Her şey çoktan anlaşıldı.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinDiyalog12",
        karakter: "Kim Seokjin",
        metin: "Duyduğuma göre her şey bu anlaşmayla ilgiliymiş.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon3",
        karakter: "Kim Namjoon",
        metin: "Seni fakir piç! Bir anlaşmayı bile karşılayamıyor musun?! Dedi. Dövdüğüm kişi, yani.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinTarih3",
        karakter: "",
        metin: "11 Nisan, Yıl 22",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinKimNamjoon4",
        karakter: "Kim Namjoon",
        metin: "Nasıl ödemek istersiniz, efendim?",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinDovulenAdam1",
        karakter: "Dövülen Adam",
        metin: "La al artık!",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon5",
        karakter: "Kim Namjoon",
        metin: "Tamam efendim. Özür dilerim efendim.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinCarpma1",
        karakter: "",
        metin: "Crack!",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinDovulenAdam2",
        karakter: "Dövülen Adam",
        metin: "Lan göt! Bu arabanın ne kadar olduğunu biliyor musun?!",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon6",
        karakter: "Kim Namjoon",
        metin: "Özür dilerim efendim.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinDovulenAdam3",
        karakter: "Dövülen Adam",
        metin: "Paramı geri ver. Ben boklara para vermem.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon7",
        karakter: "Kim Namjoon",
        metin: "...",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinDovulenAdam4",
        karakter: "Dövülen Adam",
        metin: "Sağır mısın? Paramı geri ver dedim! Ne, bir anda açgözlülük mü yapmaya karar verdin? Seni fakir piç!",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoonKavga1",
        karakter: "",
        metin: "Kim Namjoon müşteriye saldırır.",
        arkaPlan: "url('/bts/btsImages/benzinIstasyonuGece.jpg')"
    },
    {
        id: "kimSeokjinPolis2",
        karakter: "Polis",
        metin: "Bak, o kadar yaralanmış bile görünmüyorsun. İki haftada biter. Anlaşalım ve bitirelim, olur mu?",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDovulenAdam5",
        karakter: "Dövülen Adam",
        metin: "Anlaşmak mı? Ha! Anlaşmayı karşılayabilir misin bile be? Hehe.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon8",
        karakter: "Kim Namjoon",
        metin: "Anlaşmıyorum.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinTarih4",
        karakter: "",
        metin: "22 Mayıs, Yıl 22",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog13",
        karakter: "Kim Seokjin",
        metin: "Ve Namjoon bu şekilde hapse düştü. Bu Nisan 11'di. Onu benzin istasyonunda görüp, yanından geçtiğim gün.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon9",
        karakter: "Kim Namjoon",
        metin: "Olacağı varmış. Fakirim, değil mi hyung? Olacakmış olmuş yani. Benim için endişelenme. Sadece git.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinDiyalog14",
        karakter: "Kim Seokjin",
        metin: "Diğerleri biliyor mu?",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon10",
        karakter: "Kim Namjoon",
        metin: "...",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinDiyalog15",
        karakter: "Kim Seokjin",
        metin: "Herkes nasıl durumda? Hâlâ onlarla iletişimdesin, değil mi?",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon11",
        karakter: "Kim Namjoon",
        metin: "Hayır, artık değil.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinDiyalog16",
        karakter: "Kim Seokjin",
        metin: "...",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinKimNamjoon12",
        karakter: "Kim Namjoon",
        metin: "Oh, bilmiyorsun. Jungkook öldü. Yoongi de. Hoseok hastanede. Kötü bir trafik kazası geçirdi. Taehyung ve Jimin'den haberim yok. Uzun bir süredir iletişimde değiliz.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinPolis3",
        karakter: "Polis",
        metin: "Ziyaret zamanı bitti. Lütfen odadan çıkın.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluIci.jpg')"
    },
    {
        id: "kimSeokjinDiyalog17",
        karakter: "Kim Seokjin",
        metin: "Eğer... Eğer o gece Namjoon ile konuşsaydım, belki de onunla hapishanede konuşmazdık.",
        arkaPlan: "url('/bts/btsImages/polisKarakoluDisi.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinGazeteci1",
        karakter: "Gazeteci -1-",
        metin: "Neden babanı öldürdün?",
        arkaPlan: "url('/bts/btsImages/polisKarakoluDisi.jpg')"
    },
    {
        id: "kimSeokjinGazeteci2",
        karakter: "Gazeteci -2-",
        metin: "Kız kardeşinin dediğine göre, baban siz ikinizi küçüklükten beri taciz ediyormuş! Neden bunun hakkında hiçbir şey söylemedin?!",
        arkaPlan: "url('/bts/btsImages/polisKarakoluDisi.jpg')"
    },
    {
        id: "kimSeokjinDiyalog18",
        karakter: "Kim Seokjin",
        metin: "...!",
        arkaPlan: "url('/bts/btsImages/polisKarakoluDisi.jpg')"
    },
    {
        id: "kimSeokjinGazeteci3",
        karakter: "Gazeteci -3-",
        metin: "Olay yerini ne zaman inceleyecekler biliyor musun?",
        arkaPlan: "url('/bts/btsImages/polisKarakoluDisi.jpg')"
    },
    {
        id: "kimSeokjinDiyalog19",
        karakter: "Kim Seokjin",
        metin: "TAEHYUNG!!",
        arkaPlan: "url('/bts/btsImages/polisKarakoluDisi.jpg')"
    },
    {
        id: "kimSeokjinDiyalog20",
        karakter: "Kim Seokjin",
        metin: "Yedimizin beraber mutlu olduğu bir zaman vardı, birbirimize sahip olduğumuzu bilmek.",
        arkaPlan: "url('/bts/btsImages/mutluBts.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog21",
        karakter: "Kim Seokjin",
        metin: "Nerede işler yanlışa gitti? Herkesin sonu kötü oldu. Ayrıldıktan sonra herhangi birimiz mutlu muyduk ki? O zamanlar, sadece beraber olmak bizi mutlu etmek için yeterli bir sebepti. Ama neden... Bize ne oldu?",
        arkaPlan: "url('/bts/btsImages/sahil.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinKedi1",
        karakter: "Kedi",
        metin: "Eğer zamanı geri döndürebilsen, hataları ve yanlışları düzeltip... Herkesi kurtarabileceğine inanıyor musun?",
        arkaPlan: "url('/bts/btsImages/sahil.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinDiyalog22",
        karakter: "Kim Seokjin",
        metin: "Halüsinasyon mu görüyorum...? Fark etmez. Eğer zamanı geri döndürebilsem, eğer hataları ve yanlışları düzeltip, hepimizi eskisi gibi mutlu yapabilme yetkisine sahip olsam, her şeyi yapardım.",
        arkaPlan: "url('/bts/btsImages/sahil.jpg')"
    },
    {
        id: "kimSeokjinDiyalog23",
        karakter: "Kim Seokjin",
        metin: "Galiba rüya gördüm... Hatırlayamıyorum...",
        arkaPlan: "url('/bts/btsImages/kimSeokjinOda.jpg')",
        gecis: true
    },
    {
        id: "kimSeokjinTarih5",
        karakter: "",
        metin: "11 Nisan, Yıl 22",
        arkaPlan: "url('/bts/btsImages/kimSeokjinOda.jpg')"
    }
];

let diyalogSirasi = 0;

donguyeDevamEt.addEventListener('click', function() {
    let anaIcerik = document.getElementById('kimSeokjinAnaSayfa');
    let sabitArkaPlan = document.getElementById('background');

    anaIcerik.classList.add('oyunModu');

    document.body.style.backgroundColor = "rgb(12, 12, 12)";

    if (sabitArkaPlan) {
        sabitArkaPlan.style.display = "none"; 
    }

    anaSayfa.style.backgroundColor = "rgb(12, 12, 12)";

    anaIcerik.innerHTML = `
        <div id="diyalogSistemi">
            <h2 id="konusanKarakter"></h2>
            <p id="kimSeokjinMetinler">Yükleniyor...</p>
            <button id="devamEtButonu" style="visibility: hidden">Devam Et</button> 
        </div>
    `;

    document.getElementById('devamEtButonu').addEventListener('click', kimSeokjinBolum1);
    kimSeokjinBolum1();
});

yeniDonguyeBasla.addEventListener('click', function() {
    let anaIcerik = document.getElementById('kimSeokjinAnaSayfa');
    let sabitArkaPlan = document.getElementById('background');

    anaIcerik.classList.add('oyunModu');

    document.body.style.backgroundColor = "rgb(12, 12, 12)";

    if (sabitArkaPlan) {
        sabitArkaPlan.style.display = "none"; 
    }

    anaSayfa.style.backgroundColor = "rgb(12, 12, 12)";

    anaIcerik.innerHTML = `
        <div id="diyalogSistemi">
            <h2 id="konusanKarakter"></h2>
            <p id="kimSeokjinMetinler">Yükleniyor...</p>
            <button id="devamEtButonu" style="visibility: hidden">Devam Et</button> 
        </div>
    `;

    document.getElementById('devamEtButonu').addEventListener('click', kimSeokjinBolum1);
    kimSeokjinBolum1();
});

function kimSeokjinBolum1() {
    if (diyalogSirasi < kimSeokjinBolum1Metinleri.length) {
        let suAnKiSahne = kimSeokjinBolum1Metinleri[diyalogSirasi];

        if (suAnKiSahne.gecis) {
            anaSayfa.classList.add('sahne-gecis');

            setTimeout(() => {
                anaSayfa.style.backgroundImage = "none"

                icerigiGuncelle(suAnKiSahne);
                anaSayfa.classList.remove('sahne-gecis');
            }, 800); 
        } else {
            icerigiGuncelle(suAnKiSahne);
        }

        diyalogSirasi++;
    }
}

function icerigiGuncelle(sahne) {
    let metinAlani = document.getElementById('kimSeokjinMetinler');
    let karakterAlani = document.getElementById('konusanKarakter');
    let buton = document.getElementById('devamEtButonu');

    karakterAlani.innerText = sahne.karakter;
    anaSayfa.setAttribute('idSahne', sahne.id);
    anaSayfa.setAttribute('karakter', sahne.karakter);

    if(buton) buton.style.visibility = "hidden";

    if (sahne.metin && sahne.metin !== "") {
        daktiloYazKelime('kimSeokjinMetinler', sahne.metin, 150); 
    } else {
        metinAlani.textContent = "";
        if(buton) buton.style.visibility = "visible";
    }

    if(sahne.arkaPlan) {
        anaSayfa.style.backgroundImage = sahne.arkaPlan;
        anaSayfa.style.backgroundSize = "cover";
        anaSayfa.style.backgroundPosition = "center";
    }
}

let daktiloZamanlayici;

function daktiloYazKelime(elementId, metin, hiz) {
    let kelimeler = metin.split(" ");
    let i = 0;
    let element = document.getElementById(elementId);
    let buton = document.getElementById('devamEtButonu');
    
    if(buton) buton.style.visibility = "hidden";
    element.textContent = ""; 
    
    clearInterval(daktiloZamanlayici);

    daktiloZamanlayici = setInterval(() => {
        if (i < kelimeler.length) {
            element.textContent += (i === 0 ? "" : " ") + kelimeler[i];
            i++;
        } else {
            clearInterval(daktiloZamanlayici);
            if(buton) buton.style.visibility = "visible";
        }
    }, hiz);
}
