var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { header: 'PROGRAM', menuLink:
    "a(href='/').active PROGRAM" });
});

router.get('/ofestiwalu', function(req, res) {
    res.render('ofestiwalu', { header: 'O FESTIWALU' });
});

router.get('/bilety', function(req, res) {
    res.render('bilety', { header: 'BILETY' });
});

router.get('/kontakt', function(req, res) {
    res.render('kontakt', { header: 'KONTAKT' });
});

router.get('/program/wydarzeniatowarzyszace', function(req, res) {
    res.render('wydarzeniatowarzyszace', { header: 'PROGRAM / WYDARZENIA TOWARZYSZĄCE' });
});

router.get('/program/:eventName', function(req, res) {
    if(req.params.eventName == 'najmniejszybalswiata'){
        res.render('event', {
            header: 'PROGRAM / NAJMNIEJSZY BAL ŚWIATA',
            date: '18.09 CZWARTEK g.12:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Duża',
            author: 'Malina Prześluga',
            event: req.params.eventName,
            title: 'Najmniejszy bal świata',
            performers: 'Teatr Zagłębia w Sosnowcu',
            director: 'Aneta Głuch-Klucznik',
            scenography: 'Aleksander Maksymiak',
            music: 'Tomasz Łuc',
            actors: 'Agnieszka Bałaga-Okońska / Agnieszka Bieńkowska, Michał Bałaga, Maria Bieńkowska, Piotr Bułka, Beata Deutschman, Przemysław Kania, Krzysztof Korzeniowski, Edyta Ostojak',
            duration: '80min',
            description: 'Dobra zabawa z morałem. W tekście jednej z najważniejszych dziś autorek sztuk dla dzieci – Maliny Prześlugi – słychać echa Podróży Guliwera, ale także komediowego ducha pamiętnego Kingsajzu. Gdy królewna Migawka – mieszkanka miniaturowego państwa – zaczarowuje swoich rodziców, rusza na ich poszukiwanie do świata XXL. Feeria świetlnych efektów, plastyczna wyobraźnia i brawurowe aktorstwo – wszystko to składa się na spektakl, którego dzieci długo nie zapomną. Angażujący wszystkie zmysły i całą przestrzeń sosnowieckiego teatru Najmniejszy bal świata to świetna propozycja dla najmłodszych.',
            prizes: 'WYRÓŻNIENIE 20. Ogólnopolskiego Konkursu na Wystawienie Polskiej Sztuki Współczesnej dla Edyty Ostojak za rolę Migawki',
            targetAge: 'spektakl dla dzieci w wieku 6-11 lat',
            extraInfo: 'Widzów zapraszamy do przyjścia w kostiumach balowych.',
            review: '(…) Inteligentna i zabawna opowieść Maliny Prześlugi oraz błyskotliwa reżyseria Anety Głuch-Klucznik złożyły się na fenomenalne widowisko, dalekie od banalnego dydaktyzmu i kiczowatej wyobraźni. Autorzy zaufali spostrzegawczości dzieci; przyjęli, że każde z nich odbiera i rozumie świat na swój indywidualny sposób. (…) Wielki sukces „Najmniejszego balu świata” bierze się w znacznej mierze stąd, że twórcy (…) wyciągnęli wnioski z tego, co wiedzą o dzisiejszym małym widzu, przede wszystkim o jego aktywności we współczesnym świecie, łatwości obsługi komputerów, iPadów etc. (…) Udało się wykreować na scenie nierzeczywisty, ale zrozumiały, wiarygodny świat, który dzieci z łatwością rozumieją i bezbłędnie rozpoznają jego elementy.',
            reviewOrigin:'Marta Bryś, „Dziecko to nie przedmiot',
            imgsNames: ['najmniejszybalswiata2','najmniejszybalswiata3','najmniejszybalswiata4','najmniejszybalswiata5'],
            trailerLink: 'http://www.youtube.com/embed/88RPuWrLAKM'
        });
    }
    if(req.params.eventName == 'ony'){
        res.render('event', {
            header: 'PROGRAM /ONY',
            date: '18.09 CZWARTEK g.19:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Duża',
            author: 'Marta Guśniowska',
            event: req.params.eventName,
            title: 'Ony',
            performers: 'Teatr im. Juliusza Osterwy w Gorzowie Wielkopolskim',
            director: 'Alina Moś-Kerger',
            scenography: 'Alina Moś-Kerger',
            music: '-',
            actors: 'Bartosz Bandura, Beata Chorążykiewicz, Joanna Ginda, Marta Karmowska, Jan Mierzyński, Artur Nełkowski, Kamila Pietrzak-Polakiewicz, Krzysztof Tuchalski',
            duration: '85min',
            description: 'Myśleliście, że teatr dla gimnazjalistów nie istnieje? Albo – że to tylko lektury szkolne w malowanych dekoracjach? Powitajcie więc Onego – i posłuchajcie jego historii. Z typową dla siebie językową wyobraźnią, dramatopisarka Marta Guśniowska snuje bajkę o ludzkim życiu. Bardzo dojrzałą, choć widzianą oczyma dojrzewającego dziecka. Kilkadziesiąt lat drogi, zawiedzione nadzieje, miłość i poszukiwanie szczęścia – wszystko w jednym wyjątkowym spektaklu. Nie tylko dla piętnastolatków.',
            targetAge: 'spektakl dla młodzieży w wieku 13-16 lat',
            review: '(…) Spektakl ma wymiar egzystencjalnego traktatu o drodze człowieka, który stopniowo traci dziecięce złudzenia, czy może raczej – dziecięcą optykę. Bohater sztuki został nazwany przez autorkę Ony, więc ani to on, ani ona, ani dziecko, ani dorosły, chciałoby się rzec filozoficznie – i chyba nie będzie w tym wiele przesady – Każdy. Bardziej przemawiająca wydaje się jednak zawarta w tym słowie próba określenia trudno definiowalnej, bo właśnie w tym wieku się definiującej, tożsamości głównego bohatera, ale jednocześnie także adresata tej sztuki – już nie dziecka, jeszcze nie dorosłego, zaczynającego postrzegać świat zupełnie innym niż do tej pory, uczącego się co w relacjach międzyludzkich oznacza jego płciowość, etc. (…) Reżyserka „Onego”, Alina Moś-Kerger (…) doskonale czuje złożoną wrażliwość swojej publiczności. W tym spektaklu kumuluje się wiele zalet teatru dla młodzieży – na czele z przemożną potrzebą komunikacji z młodym widzem.',
            reviewOrigin:'Szymon Kazimierczak, "Homo viator"',
            imgsNames: ['ony2','ony3','ony4','ony5'],
            trailerLink: 'http://www.youtube.com/embed/ad461OX6N5M'
        });
    }
    if(req.params.eventName == 'tatoniewraca'){
        res.render('event', {
            header: 'PROGRAM / TATO NIE WRACA',
            date: '18.09 CZWARTEK g.21:00',
            place: 'Teatr WARSawy',
            author: 'Piotr Rowicki',
            event: req.params.eventName,
            title: 'Tato nie wraca',
            performers: 'Teatr WARSawy',
            director: 'Piotr Ratajczak',
            scenography: '-',
            music: '-',
            actors: 'Agnieszka Przepiórska',
            duration: '50min',
            description: 'Przejmująca opowieść o radzeniu sobie z traumą i odzyskiwaniu siły. Agnieszka Przepiórska – Pani Prezydent z kabaretu Pożar w Burdelu – w roli trzydziestoletniej kobiety sukcesu, w której gabinecie nagle zjawia się  tajemniczy nieznajomy. Czy to naprawdę nie widziany od lat ojciec? Rozpoczyna się monolog, w którym tęsknota miesza się z oskarżeniami. Do czego doprowadzi ta parada wspomnień?',
            prizes: 'NAGRODA 20. Ogólnopolskiego Konkursu na Wystawienie Polskiej Sztuki Współczesnej dla Agnieszki Przepiórskiej',
            review: '(…) Styl tekstu Rowickiego pozbawiony jest zbędnych ozdobników, znajduje się w nim jednak miejsce na kpinę z korporacyjnej nowomowy czy fantazji o azylu rodzinnego szczęścia. Autor nie porywa się też na estetyzację traumy, walczy raczej o zbudowanie na widowni wspólnoty – z członków społeczeństwa, które żegna się z mitem o tradycyjnym, silnym ojcostwie, a z rozmaitych społecznych przyczyn – często z ojcostwem i ojcem jako takim. Siłą ma być więc w pewnym sensie przeciętność – historia jakich wiele, opowieść o krzywdzie podawana chwilami z zaskakującą – niemal psychotyczną – lekkością.',
            reviewOrigin:'Witold Mrozek "Po ojcu"',
            imgsNames: ['tatoniewraca2','tatoniewraca3','tatoniewraca4','tatoniewraca5'],
            trailerLink: 'http://www.youtube.com/embed/QlFEdGXAKpU'
        });
    }
    if(req.params.eventName == 'wladcaskarpetek'){
        res.render('event', {
            header: 'PROGRAM / WŁADCA SKARPETEK',
            date: '19.09 PIĄTEK g.12:00',
            place: 'Instytut Teatralny im. Zbigniewa Raszewskiego',
            author: 'Jacek Timingeriu',
            event: req.params.eventName,
            title: 'Władca Skarpetek',
            performers: 'Teatr Lalki i Aktora w Wałbrzychu',
            director: 'Jacek Timingeriu',
            scenography: 'Katarzyna Karmańska i Jacek Timingeriu',
            music: 'Krzysztof Pachołek',
            songsTexts: 'Ewa Zielińska',
            actors: 'Zbigniew Koźmiński, Seweryn Mrożkiewicz, Bożena Oleszkiewicz, Urszula Raczkowska, Natalia Wieciech',
            duration: '50min',
            description: 'Kto z nas nie pamięta walki ze sprzątaniem dziecinnego pokoju? Bałagan bywa nie do opanowania. Mały Jaś musi tymczasem wyruszyć w sam jego środek – na poszukiwanie zaginionej skarpetki. Po drodze napotka tabuny zaczarowanych przedmiotów. Pralka, książka, słoik czy zwykły ogryzek od jabłka nie tylko uczą porządku, ale też śpiewają. Świat Władcy Skarpetek jest pełen humoru, sugestywnych obrazów i niecodziennych dźwięków. To teatr lalkowy, za którym tęskniliście.',
            prizes: 'NAGRODA 20. Ogólnopolskiego Konkursu na Wystawienie Polskiej Sztuki Współczesnej dla Jacka Timingeriu',
            targetAge: 'spektakl dla dzieci w wieku 3-6 lat',
            review: '(…) „Władca skarpetek” to teatr dla dzieci trochę staromodny w budowaniu narracji, ale rewelacyjny od strony teatralnej i chciałoby się, żeby więcej spektakli w tak zabawny i mądry sposób zajmowało się wspieraniem rodziców w trudzie wychowania. Należy się również cieszyć, że w teatrze dla młodych widzów pojawił się kolejny ciekawy twórca. (…) To przykład „teatru rodzinnego”, w którym każda grupa wiekowa może znaleźć coś dla siebie: jest i regularna baśń z przesłaniem, i zgrabnie, inteligentnie, dowcipnie napisane dialogi. Dla tych lepiej osadzonych w rzeczywistości kulturowej pojawiają się takie klejnociki, jak homar Homer czy krewetka, która pod wpływem psychodelicznej chmury zmienia imię z Sushi San na Wasabi. Inscenizacja dodaje do tego inne konteksty, jak wystylizowanie baru, w którym spotykają się główni bohaterowie, na ten znany z filmu „Gwiezdne wojny”.',
            reviewOrigin:'Joanna Ostrowska "Po co jest teatr dla młodego widza?"',
            imgsNames: ['wladcaskarpetek2','wladcaskarpetek3','wladcaskarpetek4'],
            trailerLink: 'http://www.youtube.com/embed/JkY6x8n0M4A'
        });
    }
    if(req.params.eventName == 'piszczyk'){
        res.render('event', {
            header: 'PROGRAM / PISZCZYK',
            date: '19.09 PIĄTEK g.19:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Duża',
            author: 'Jan Czapliński, Piotr Rowicki',
            event: req.params.eventName,
            dramaturgy: 'Jan Czapliński',
            costumes: 'grupa Mixer',
            scenicMovement: 'Arkadiusz Buszko',
            lightDirector: 'Bary',
            videoProjections: 'Aleksander Grzebalski',
            directorAssistent: 'Piotr Kaźmierczak',
            title: 'Piszczyk',
            performers: 'Teatr Polski w Poznaniu',
            director: 'Piotr Ratajczak',
            scenography: 'Aleksander Maksymiak',
            music: 'Piotr Ratajczak',
            actors: 'Mariusz Adamski, Łukasz Chrzuszcz, Piotr B. Dąbrowski, Michał Kaleta, Teresa Kwiatkowska, Piotr Kaźmierczak, Barbara Prokopowicz, Anna Sandowicz, Andrzej Szubski, Wiesław Zanowicz',
            duration: '100min',
            description: 'Jan Piszczyk powraca po sześciu dekadach. Ze swoim zezowatym szczęściem. Tym razem zamiast wplątać się między manifestacje piłsudczyków i endeków, bohater kultowego filmu Munka trafi na bezdroża III RP. Nie ominie go ani blask opozycyjnej legendy, ani czujne oko lustratorów. Będzie nosił teczkę za wyznawcami Balcerowicza, stanie na barykadzie z Lepperem, zawita na biskupim dworze. W spektaklu Piotra Ratajczaka śmieszno-straszne perypetie nadwiślańskiego everymana kryją sen o innej Polsce.',
            prizes: 'NAGRODA 20. Ogólnopolskiego Konkursu na Wystawienie Polskiej Sztuki Współczesnej dla Łukasza Chrzuszcza za rolę Jana Piszczyka',
            review: '(…) Nie trzeba koniecznie być byłym powstańcem, żeby czuć się ofiarą gloryfikacji narodowego tragizmu. Klęska romantycznej powinności przechodzi na kolejne pokolenia, także dzisiejszych trzydziestolatków. Śledząc dyskusje o polskiej polityce historycznej można ulec wrażeniu, że tradycja wychowania w duchu bohaterskim nigdy się u nas nie skończy i chyba tylko żart, pusta w środku zabawka, która wydaje dźwięk, gdy na nią nadepnąć, może wreszcie rozbroić tę nadętą narrację. Piszczyk, którego dziś oglądamy na scenie (…) wchodzi w każdą sytuację jak w masło, nie z musu, nie z przekonania, lecz z prostej chęci, by się spróbować, ale też drobnomieszczańsko pokazać.',
            reviewOrigin:'Adriana Prodeus, "Dreamlinerem"',
            imgsNames: ['piszczyk2','piszczyk3','piszczyk4','piszczyk5'],
            trailerLink: 'http://www.youtube.com/embed/5aZVL5YfvS0'
        });
    }
    if(req.params.eventName == 'misterd'){
        res.render('event', {
            header: 'PROGRAM / MISTERD',
            date: '19.09 PIĄTEK g.22:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Mała',
            event: req.params.eventName,
            title: 'MISTER D.',
            bandMembers: 'Piotr Gwadera, Marcin Macuk, Dorota Masłowska, Kuba Wandachowicz',
            description: 'Mister D. to muzyczne wcielenie Doroty Masłowskiej, pisarki i autorki tekstów często wystawianych na polskich scenach. Spektakle na podstawie jej dramatów były kilkakrotnie nagradzane w Ogólnopolskim Konkursie na Wystawienie Polskiej Sztuki Współczesnej. Album Mister D. pt. Społeczeństwo jest niemiłe wydany w lutym 2014 roku nakładem Galerii Raster jest autorską, domową mieszanką rapu, punka i muzyki tanecznej. W warstwie tekstowej to psychodeliczny zlep opowieści z popularnej prasy, wyrażony statystycznie polskim językiem i właściwym mu sposobem rozumowania.',
            trailerLink: 'http://www.youtube.com/embed/-1-z48cJDbc'
        });
    }
    if(req.params.eventName == 'pancerni'){
        res.render('event', {
            header: 'PROGRAM / PANCERNI',
            date: '20.09 SOBOTA g.19:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Duża',
            author: 'Paweł Demirski',
            event: req.params.eventName,
            title: 'Pancerni (wg tekstu Niech żyje wojna!)',
            performers: 'Akademia Teatralna im. Aleksandra Zelwerowicza w Warszawie Wydział Sztuki Lalkarskiej w Białymstoku',
            director: 'Konrad Dworakowski',
            scenography: 'Marika Wojciechowska',
            directorAssistent: 'Justyna Rożko',
            music: 'Piotr Klimek',
            actors: 'Katarzyna Gacal, Filip Gurłacz, Paulina Moś, Małgorzata Patryn, Helena Radzikowska, Paweł Rutkowski, Emilia Sulej, Katarzyna Szczodrowska, Eliasz Waszczuk, Piotr Wiktorko',
            duration: '180min. (1 przerwa)',
            description: 'Demirski bez Strzępki. Wywrotowe przepisanie serialu o przygodach czterech pancernych i jednego psa to głos przeciwko polityce historycznej wszystkich czasów. Tekst, na którym opierał się jeden z najważniejszych spektakli radykalnego duetu – Niech żyje wojna!, doczekał się nowego wystawienia. Białostoccy studenci przenieśli polityczną groteskę w świat militarnej rewii. A  Konrad Dworakowski – jeden z najciekawszych dziś reżyserów teatru lalkowego – wszystko to ubrał w ramę castingu. Młodzi artyści rywalizują o to, kto najatrakcyjniej pokaże narodowe traumy i zwycięstwa. W końcu widz na to czeka.',
            review: 'RECENZJA: (…) Gdy wychodziłem do teatru, przez ekran telewizora w pokoju hotelowym leciały czerwone paski mówiące o koncentracji wojsk na stosunkowo niedalekiej granicy, o niezidentyfikowanych grupach bojowych operujących na terytorium suwerennego państwa, o trosce dużego kraju z dużą armią, który czuje się w obowiązku przyjść z pomocą swoim obywatelom na terenie sąsiedniego małego kraju z marną armią. (…) A co, jeżeli nic już nie będzie tak pięknie – czego nie doceniacie – jak jest dziś? Jeśli dialogi Stalina z Mikołajczykiem przestaną być zadaniem aktorskim, tylko staną się – już się stają – przedmiotem doniesień agencji informacyjnej? Jeśli nie da się położyć spać jak najwcześniej i spać jak najdłużej, bo niegumowe czołgi i samoloty strasznie hałasują? Jeśli nie da się kpić z filmowej pirotechniki, bo pirotechnika będzie prawdziwa i będą od niej ginąć ludzie? Niechby i za miedzą – ale naprawdę za miedzą, a nie w telewizorze czy w teatrze? I kłopoty, jakie by teraz przedstawienie przygotować i, zwłaszcza, skąd wziąć na nie kasę, staną się nagle jakieś takie nie na miejscu? Żenujące kto wie czy nie w takim samym stopniu, jak tamta żołnierska, skłamana, propagandowa i manipulatorska polsko sowiecka bajęda? Niech diabli wezmą wojnę. Jak najprędzej.',
            reviewOrigin:'Jacek Sieradzki, "Czołg dmuchany"',
            imgsNames: ['pancerni2','pancerni3','pancerni4','pancerni5'],
            trailerLink: 'http://www.youtube.com/embed/W-YuA9gs0rU'
        });
    }
    if(req.params.eventName == 'thedumplings'){
        res.render('event', {
            header: 'PROGRAM / THE DUMPLINGS',
            date: '20.09 SOBOTA g.22:00',
            place: 'Klubokawiarnia Dwa Osiem',
            event: req.params.eventName,
            title: 'The Dumplings',
            bandMembers: 'Kuba Karaś (muzyka), Justyna Święs (śpiew, muzyka)',
            description: 'The Dumplings to nie tylko zespół okrzyknięty odkryciem ostatniego sezonu. Młodzi muzycy są również twórcami muzyki do spektaklu Ony, który prezentowany jest podczas tegorocznej NÓWKI SZTUKI. The Dumplings łączy w swojej twórczości młodość z bezkompromisowością, pokoleniowe teksty ze świeżym spojrzeniem na elektronikę, chwytliwe melodie z tanecznym smutkiem. Duet Święs-Karaś otrzymał nagrody magazynu Hiro w kategoriach: Przyszłość Roku i Odkrycie Roku. Aktualnie zespół promuje swój debiutancki album No Bad Days.',
            trailerLink: 'http://www.youtube.com/embed/qsODEfkIJu0'
        });
    }
    if(req.params.eventName == 'sam'){
        res.render('event', {
            header: 'PROGRAM / SAM, czyli przygotowanie do życia w rodzinie',
            date: '21.09 NIEDZIELA g.17:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Mała',
            author: 'Maria Wojtyszko',
            event: req.params.eventName,
            title: 'SAM, czyli przygotowanie do życia w rodzinie',
            performers: 'Wrocławski Teatr Lalek',
            director: 'Jakub Krofta',
            scenography: 'Anna Chadaj',
            music: 'Grzegorz Mazoń',
            actors: 'Kamila Chruściel, Radosław Kasiukiewicz, Marek Koziarczyk, Agata Kucińska, Konrad Kujawski, Marta Kwiek, Patrycja Łacina-Miarka, Grzegorz Mazoń',
            duration: '80min',
            description: 'Dobra zabawa z morałem. W tekście jednej z najważniejszych dziś autorek sztuk dla dzieci – Maliny Prześlugi – słychać echa Podróży Guliwera, ale także komediowego ducha pamiętnego Kingsajzu. Gdy królewna Migawka – mieszkanka miniaturowego państwa – zaczarowuje swoich rodziców, rusza na ich poszukiwanie do świata XXL. Feeria świetlnych efektów, plastyczna wyobraźnia i brawurowe aktorstwo – wszystko to składa się na spektakl, którego dzieci długo nie zapomną. Angażujący wszystkie zmysły i całą przestrzeń sosnowieckiego teatru Najmniejszy bal świata to świetna propozycja dla najmłodszych.',
            prizes: 'NAGRODA ZA NAJLEPSZY SPEKTAKL 20. Ogólnopolskiego Konkursu na Wystawienie Polskiej Sztuki Współczesnej',
            targetAge: 'spektakl dla młodzieży w wieku 13-16 lat',
            review: '(…) Eksperyment Wrocławskiego Teatru Lalek dowodzi, że odpowiednio przemyślany język i problematyka spektaklu pozwalają bez trudu nawiązać porozumienie z młodą widownią, unikając protekcjonalnego i dydaktycznego tonu. (…) Widownia wydawała się niekiedy skonsternowana aktualnością tematu i tym, jak bardzo przedstawienie odbiega od sztampowych inscenizacji Fredry czy Słowackiego, które obowiązkowo szkoła musi zaliczyć, a które skutecznie odstraszają młodzież od teatru. Napisany zrozumiałym językiem „SAM…”, odwołując się do współczesnej wyobraźni wysyła prostą informację, że teatr może mówić do nich i o nich.',
            reviewOrigin:'Marta Bryś, "Przygotowanie do życie w czasach popkultury"',
            imgsNames: ['sam2','sam3','sam4','sam5'],
            trailerLink: 'http://www.youtube.com/embed/GdzPkrNGWFw'
        });
    }
    if(req.params.eventName == 'naboga'){
        res.render('event', {
            header: 'PROGRAM / NA BOGA!',
            date: '21.09 NIEDZIELA g.19:00',
            place: 'Teatr Powszechny im.Zygmunta Hubnera - Scena Duża',
            author: 'Jarosław Murawski',
            event: req.params.eventName,
            title: 'Na Boga!',
            performers: 'Teatr Dramatyczny im. Jerzego Szaniawskiego w Wałbrzychu',
            director: 'Marcin Liber',
            dramaturgy:'Michał Pabian',
            scenography: 'Grupa Mixer',
            costumes: 'Grupa Mixer',
            lights: 'Mirek Kaczmarek',
            music: 'Aleksandra Gryka',
            musicArrangement: 'Małgorzata Sarbak',
            directorAssistent: 'omasz Kaczorowski',
            actors: 'Małgorzata Białek, Angelika Cegielska, Sara Celler-Jezierska, Włodzimierz Dyła, Rafał Kosowski, Karolina Krawiec, Joanna Łaganowska, Małgorzata Łakomska, Rozalia Mierzicka, Piotr Mokrzycki, Filip Perkowski, Dariusz Skowroński, Czesław Skwarek, Piotr Tokarz, Ryszard Węgrzyn, Irena Wójcik, Mirosława Żak',
            duration: '195min (2 przerwy)' ,
            description: 'A co, jeśli Bóg wcale nie upatrzył sobie Polaków na nowy naród wybrany? Historia księdza, który postanawia walczyć z antysemickim zwyczajem „wodzenia Judosza” w małej śląskiej miejscowości kończy się dramatem na kosmiczną skalę, w którym istotną rolę odegra sam Książę Ciemności. Współczesna sztuka Jarosława Murawskiego napisana jest trzynastozgłoskowcem. Jedyny w swoim rodzaju koktajl łączy ludowe misterium i publicystykę, South Park z Dziadami. Nie oszczędza ani papieża, ani salonowych antyklerykałów. Wszystko naszkicowane grubą, satyryczną kreską, w charakterystycznym stylu wałbrzyskiego teatru.',
            review: '(…) Fabuła spektaklu nawiązuje do znanych konfliktów na tle polityczno-religijnym, jak chociażby ostry spór o obecność krzyża pod Pałacem Prezydenckim, ale wydaje się, że Murawski próbuje poszerzyć perspektywę i przeprowadzić diagnozę napięć społecznych w kontekście religii. Przygląda się konsekwencjom używania jej jako szantażu w debacie publicznej i utożsamiania z wartościami narodowymi. (…)Konflikt ideologiczny, nietożsamy przecież ze sporami teologicznymi, doprowadził do sytuacji, w której nie ma przestrzeni na dyskusję, a każdy głos odbierany jest jako atak. ',
            reviewOrigin:'Marta Bryś, "Jak krzyż, to biało-czerwony"',
            imgsNames: ['naboga2','naboga3','naboga4','naboga5'],
            trailerLink: 'http://www.youtube.com/embed/bmTCfDyFhn0'
        });
    }
    if(req.params.eventName == 'wsamopoludnie'){
        res.render('event', {
            header: 'PROGRAM / W SAMO POŁUDNIE',
            date: '22.09 PONIEDZIAŁEK g.19:00',
            place: 'Teatr Żydowski im. Estery Rachel i Idy Kamińskich',
            author: 'Sebastian Liszka i Wojtek Ziemilski',
            event: req.params.eventName,
            title: 'W samo południe',
            performers: 'Teatr Dramatyczny im. Jerzego Szaniawskiego w Wałbrzychu',
            director: 'Wojtek Ziemilski',
            dramaturgy: 'Sebastian Liszka',
            dramaturgyCoop: 'Sara Celler-Jezierska',
            lightDirector: 'Karolina Gębska',
            directorAssistent: 'Katarzyna Lemańska, Karolina Wycisk',
            actors: 'Sara Celler-Jezierska, Małgorzata Łakomska, Rozalia Mierzicka, Piotr Mokrzycki, Piotr Tokarz, Ryszard Węgrzyn',
            duration: '80min',
            description: '4 czerwca 1989 z perspektywy Wałbrzycha. Aktorzy w roli dokumentalistów usiłują przeprowadzić historyczne śledztwo. Poszukiwani: wałbrzyscy kandydaci z pierwszych „częściowo wolnych” wyborów. Partyjni i solidarnościowi, słynni i zapomniani. Spektakl Wojtka Ziemilskiego – artysty z pogranicza teatru, tańca i sztuk wizualnych – zderza ze sobą historie uczestników wydarzeń sprzed ćwierć wieku, prywatne wspomnienia samych aktorów, wreszcie: pamięć widzów. Historyczny triumf czy stracona szansa? W samo południe unika gotowych odpowiedzi.',
            review: '(…) Wałbrzyski zespół w spektaklu przypomina, że marzymy o dobrym szeryfie za każdym razem, idąc na wybory. Tymczasem po latach zostaje lament skarg jak w litanii zlikwidowanych w regionie zakładów: elektrociepłowni, kopalń, fabryk, zakładów odzieżowych. Pokaz slajdów tych miejsc robi wrażenie nie tylko dlatego, że właśnie kandydat z 1989, Ryszard Najsznerski był ich jedynym syndykiem. Także dlatego, że widok z Wałbrzycha na pobojowisko przemysłu przypomina dziś prerię z westernu. Istnieje jeden lek na alergię, nie tylko na teatr, ale też zaczadzenie ideą. Ziemilski stosuje go ze świetnymi efektami – to po prostu myślenie.',
            reviewOrigin:'Adriana Prodeus, "Kowboj czyli kto? Teatr dla uczulonych"',
            imgsNames: ['wsamopoludnie2','wsamopoludnie3','wsamopoludnie4','wsamopoludnie5'],
            trailerLink: 'http://www.youtube.com/embed/dKohYelQDvU'
        });
    }
    else{
        res.status(err.status || 404);
        res.render('error', {
            message: 'Ta strona nie istnieje. Prawdopodobnie wpisano błędny adres...'
        });
    }
});


module.exports = router;
