const questions = [
  {
    "id": 1,
    "question": "Mikä seuraavista kuuluu erityisryhmien kuljettamiseen liittyviin turvallisuustoimiin?",
    "userAnswer": "Pyörätuoli kiinnitetään rungosta neljästä pisteestä",
    "correctAnswer": "Pyörätuoli kiinnitetään rungosta neljästä pisteestä",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 1,
    "category": "Accessibility"
  },
  {
    "id": 2,
    "question": "Vuorovaikutustilanteessa asiakas on hyvin vihainen ja korottaa ääntään. Mikä on oikea toimintatapa?",
    "userAnswer": "Pysy rauhallisena ja kohteliaana",
    "correctAnswer": "Pysy rauhallisena ja kohteliaana",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 2,
    "category": "Customer service"
  },
  {
    "id": 3,
    "question": "Jos pyörätuoliasiakkaalla on mukanaan henkilökohtainen avustaja, kenen vastuulla on varmistaa, että pyörätuoli on kiinnitetty ajoneuvoon oikein ennen matkan alkua?",
    "userAnswer": "Taksinkuljettajan, koska hän vastaa ajoneuvon turvallisuudesta.",
    "correctAnswer": "Taksinkuljettajan, koska hän vastaa ajoneuvon turvallisuudesta.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 3,
    "category": "Accessibility"
  },
  {
    "id": 4,
    "question": "Olet juuri saanut kyytiin iäkkään asiakkaan, jolla on vaikeuksia muistaa määränpäätä. Mitä teet?",
    "userAnswer": "Pyrin selvittämään asiakkaan määränpään mahdollisimman ystävällisesti esimerkiksi kyselemällä lisätietoja tai tarkentavia kysymyksiä.",
    "correctAnswer": "Pyrin selvittämään asiakkaan määränpään mahdollisimman ystävällisesti esimerkiksi kyselemällä lisätietoja tai tarkentavia kysymyksiä.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 4,
    "category": "Customer service"
  },
  {
    "id": 5,
    "question": "Miten varmistat näkövammaisen asiakkaan turvallisuuden autoon noustessa?",
    "userAnswer": "Annan asiakkaan mennä itse autoon.",
    "correctAnswer": "Tarjoan apua ja käsivartta autoon nousemista varten.",
    "result": "Virheellinen",
    "source": "Mock Exam 1",
    "originalNumber": 5,
    "category": "Accessibility"
  },
  {
    "id": 6,
    "question": "Mikä seuraavista tilanteista oikeuttaa Kela-korvaukseen taksimatkasta?",
    "userAnswer": "Asiakkaalla on terveydellinen syy, joka estää muun kulkuneuvon käytön",
    "correctAnswer": "Asiakkaalla on terveydellinen syy, joka estää muun kulkuneuvon käytön",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 6,
    "category": "Kela"
  },
  {
    "id": 7,
    "question": "Olet ajanut asiakkaan keskustasta lähiöön. Matkan päätyttyä asiakas vaikuttaa välttelevältä eikä ota lompakkoaan esiin. Hän sanoo \"maksavansa myöhemmin\" ja pyrkii poistumaan autosta maksamatta. Miten toimit kuljettajana oikein?",
    "userAnswer": "Soitan hätänumeroon ja kutsun poliisin paikalle selvittämään tilanteen.",
    "correctAnswer": "Soitan hätänumeroon ja kutsun poliisin paikalle selvittämään tilanteen.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 7,
    "category": "Emergency and first aid"
  },
  {
    "id": 8,
    "question": "Sinulle annetaan työvuorollasi yllättäen tehtäväksi ottaa kyytiin asiakas, joka ei pysty kommunikoimaan suullisesti. Miten kuljettajan tulee toimia tilanteessa?",
    "userAnswer": "Kuljettajan on pyrittävä varmistamaan määränpää ja matkan turvallisuus muilla keinoin kuin puheella.",
    "correctAnswer": "Kuljettajan on pyrittävä varmistamaan määränpää ja matkan turvallisuus muilla keinoin kuin puheella.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 8,
    "category": "Customer service"
  },
  {
    "id": 9,
    "question": "Taksin esteettömyys tarkoittaa:",
    "userAnswer": "Taksissa voi matkustaa pyörätuolissa ilman siirtymistä istuimelle.",
    "correctAnswer": "Taksissa voi matkustaa pyörätuolissa ilman siirtymistä istuimelle.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 9,
    "category": "Accessibility"
  },
  {
    "id": 10,
    "question": "Mikä seuraavista pitää paikkansa alkolukon käytön suhteen?",
    "userAnswer": "Se on pakollinen kaikissa koulukuljetuksissa",
    "correctAnswer": "Se on pakollinen kaikissa koulukuljetuksissa",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 10,
    "category": "Children and school transport"
  },
  {
    "id": 11,
    "question": "Taksinkuljettajan työnkuvaan liittyy erilaisia lakisääteisiä velvoitteita matkustajien turvallisuudesta. Mikä seuraavista väittämistä pitää paikkansa?",
    "userAnswer": "Alle 135 cm pitkä lapsi on kuljetettava takapenkillä taksissa.",
    "correctAnswer": "Alle 135 cm pitkä lapsi on kuljetettava takapenkillä taksissa.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 11,
    "category": "Children and school transport"
  },
  {
    "id": 12,
    "question": "Kuljettaja huomaa, että asiakas ei vaikuta olevan tietoinen ympäristöstään ja vastaa epäloogisesti kysymyksiin. Mikä olisi ensisijainen epäily?",
    "userAnswer": "Asiakkaalla saattaa olla muistisairaus",
    "correctAnswer": "Asiakkaalla saattaa olla muistisairaus",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 12,
    "category": "Customer service"
  },
  {
    "id": 13,
    "question": "Olet liikennevaloissa, kun näet toisen auton törmäävän pyöräilijään. Miten toimit?",
    "userAnswer": "Soitan hätäkeskukseen ja jään paikalle auttamaan.",
    "correctAnswer": "Soitan hätäkeskukseen ja jään paikalle auttamaan.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 13,
    "category": "Emergency and first aid"
  },
  {
    "id": 14,
    "question": "Olet hakemassa perhettä kesäleiriltä Naantalista. Huomaat, että perheeseen kuuluu 2 vuotias lapsi, josta ei ole erikseen ilmoitettu. Sinulla ei ole autossa mukana turvalaitetta lapselle. Miten toimit tilanteessa?",
    "userAnswer": "Kieltäydyn kuljettamasta lasta ilman asianmukaista turvalaitetta ja hankin asiakkaalle sopivan auton.",
    "correctAnswer": "Kieltäydyn kuljettamasta lasta ilman asianmukaista turvalaitetta ja hankin asiakkaalle sopivan auton.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 14,
    "category": "Children and school transport"
  },
  {
    "id": 15,
    "question": "Olet kuljettamassa rouva Nurmea, liikuntarajoitteista asiakasta, tämän lääkärikäynnin jälkeen ystävänsä syntymäpäiväjuhliin. Matkalla hän pyytää sinua pysähtymään Alkon edessä ja hakemaan hänelle kaksi pulloa valkoviiniä, koska hän ei itse pysty liikkumaan vaivatta. Hän tarjoaa myös hieman ylimääräistä vaivanpalkkaa. Miten toimit?",
    "userAnswer": "Kieltäydyn kohteliaasti ja kerron, että laki ei salli minun ostavan tai kuljettavan alkoholia asiakkaan puolesta.",
    "correctAnswer": "Kieltäydyn kohteliaasti ja kerron, että laki ei salli minun ostavan tai kuljettavan alkoholia asiakkaan puolesta.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 15,
    "category": "Accessibility"
  },
  {
    "id": 16,
    "question": "Mikä seuraavista väittämistä on virheellinen taksinkuljettajan toimintaan liittyen?",
    "userAnswer": "Matkustaja ei saa koskaan päättää ajon aikana mahdollisista pysähdyksistä.",
    "correctAnswer": "Matkustaja ei saa koskaan päättää ajon aikana mahdollisista pysähdyksistä.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 16,
    "category": "Customer service"
  },
  {
    "id": 17,
    "question": "Asiakas haluaa jäädä kyydistä noin 5 metriä liikennemerkin jälkeen. Onko tämä sallittua lain mukaan?",
    "userAnswer": "Kyllä",
    "correctAnswer": "Ei",
    "result": "Virheellinen",
    "source": "Mock Exam 1",
    "originalNumber": 17,
    "category": "Traffic rules",
    "image": "assets/mock-exam-sign-1.jpeg"
  },
  {
    "id": 18,
    "question": "Ennen matkan alkua kuljettajan tulee:",
    "userAnswer": "Ilmoittaa asiakkaalle matkan hinta tai hinnan muodostumisen perusteet",
    "correctAnswer": "Ilmoittaa asiakkaalle matkan hinta tai hinnan muodostumisen perusteet",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 18,
    "category": "Payment and pricing"
  },
  {
    "id": 19,
    "question": "Joonas on toiminut taksinkuljettajana tarkalleen 3 vuotta. Hän ei ole uusinut ajolupaa vuosien aikana. Kuinka kauan Joonaksella on taksinkuljettajan ajolupa vielä voimassa, ennen kuin hänen täytyy se käydä uusimassa?",
    "userAnswer": "Kaksi vuotta.",
    "correctAnswer": "Kaksi vuotta.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 19,
    "category": "Licensing and law"
  },
  {
    "id": 20,
    "question": "Saat kyytiin asiakkaan, joka nukahtaa kesken matkan ja ei herää määränpäässä. Mitä teet?",
    "userAnswer": "Yritän herättää hänet ja tarvittaessa otan yhteyttä viranomaisiin.",
    "correctAnswer": "Yritän herättää hänet ja tarvittaessa otan yhteyttä viranomaisiin.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 20,
    "category": "Customer service"
  },
  {
    "id": 21,
    "question": "Asiakkaasi kysyy matkan aikana, voiko hän hakea vakiotaksioikeutta Kela-kyyteihin, koska kokee vaihtuvien kuljettajien aiheuttavan stressiä ja epävarmuutta. Hän ei ole varma, miten asia etenee. Miten neuvot asiakasta?",
    "userAnswer": "Neuvon asiakasta ottamaan yhteyttä Kelan asiakaspalveluun, josta saa ohjeet vakio taksioikeuden hakemiseen.",
    "correctAnswer": "Neuvon asiakasta ottamaan yhteyttä Kelan asiakaspalveluun, josta saa ohjeet vakio taksioikeuden hakemiseen.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 21,
    "category": "Kela"
  },
  {
    "id": 22,
    "question": "Olet ajamassa alueella, jossa on tapahtunut onnettomuus ja liikennettä ohjataan tilapäisesti. Saat eri toimijoilta keskenään ristiriitaisia ohjeita. Keneltä tuleva ohje sitoo sinua ensisijaisesti?",
    "userAnswer": "Toimin poliisin käsimerkkien tai käskyjen mukaan, koska ne ohittavat muut ohjauskeinot.",
    "correctAnswer": "Toimin poliisin käsimerkkien tai käskyjen mukaan, koska ne ohittavat muut ohjauskeinot.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 22,
    "category": "Emergency and first aid"
  },
  {
    "id": 23,
    "question": "Milloin asiakkaalle tulee tarjota kuitti maksusta?",
    "userAnswer": "Lain mukaan aina tulee tarjota kuittia.",
    "correctAnswer": "Lain mukaan aina tulee tarjota kuittia.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 23,
    "category": "Payment and pricing"
  },
  {
    "id": 24,
    "question": "Mikä seuraavista on kuljettajan lakisääteinen avustustehtävä?",
    "userAnswer": "Auttaminen pyörätuolin nostossa ajoneuvoon",
    "correctAnswer": "Auttaminen pyörätuolin nostossa ajoneuvoon",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 24,
    "category": "Accessibility"
  },
  {
    "id": 25,
    "question": "Mikä seuraavista väittämistä EI pidä paikkaansa?",
    "userAnswer": "Alle 3-vuotiasta lasta voidaan kuljettaa ilman turvalaitetta, jos asiakas pyytää",
    "correctAnswer": "Alle 3-vuotiasta lasta voidaan kuljettaa ilman turvalaitetta, jos asiakas pyytää",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 25,
    "category": "Customer service"
  },
  {
    "id": 26,
    "question": "Voitko kääntyä seuraavasta risteyksestä oikealle? Ajoneuvosi on taksiliikenteessä ja siinä on taksikupu asennettuna. Asiakasta ei ole kyydissä.",
    "userAnswer": "Kyllä voin",
    "correctAnswer": "Kyllä voin",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 26,
    "category": "Customer service"
  },
  {
    "id": 27,
    "question": "Kokenut taksinkuljettaja Markus on tehnyt pitkän työviikon ja tuntee itsensä väsyneeksi ja ärtyneeksi. Perjantai-iltana kyytiin nousee iäkäs asiakas, joka kyselee hinnasta ja pyytää hiljentämään musiikkia. Markus kokee asiakkaan vaatimukset rasittavina ja vastaa lyhyesti, jopa tylysti. Hän ei tervehdi eikä vastaa hyvästeihin. Seuraavana päivänä asiakas tekee asiasta kirjallisen valituksen taksiyritykselle. Onko asiakkaalla oikeus valittaa saamastaan palvelusta tällaisessa tilanteessa?",
    "userAnswer": "Kyllä, koska taksinkuljettajan kuuluu aina kohdella asiakkaita kunnioittavasti ja asiallisesti, myös väsyneenä.",
    "correctAnswer": "Kyllä, koska taksinkuljettajan kuuluu aina kohdella asiakkaita kunnioittavasti ja asiallisesti, myös väsyneenä.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 27,
    "category": "Customer service"
  },
  {
    "id": 28,
    "question": "Mikä seuraavista pyörätuolin kiinnittämistä taksiin koskevista väitteistä pitää paikkaansa?",
    "userAnswer": "Kuljettajan tehtävänä on huolehtia, että pyörätuoli on kiinnitetty ajon ajaksi rungosta.",
    "correctAnswer": "Kuljettajan tehtävänä on huolehtia, että pyörätuoli on kiinnitetty ajon ajaksi rungosta.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 28,
    "category": "Accessibility"
  },
  {
    "id": 29,
    "question": "Kuljettajaa epäillään väkivallasta asiakasta kohtaan. Mitä voi seurata?",
    "userAnswer": "Mahdollinen rikostutkinta ja ajoluvan peruminen.",
    "correctAnswer": "Mahdollinen rikostutkinta ja ajoluvan peruminen.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 29,
    "category": "Customer service"
  },
  {
    "id": 30,
    "question": "Mikä seuraavista on taksipalvelun laatuvaatimus?",
    "userAnswer": "Kuljettajan asiallinen käytös ja asiakkaiden yksilöllinen huomiointi.",
    "correctAnswer": "Kuljettajan asiallinen käytös ja asiakkaiden yksilöllinen huomiointi.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 30,
    "category": "Customer service"
  },
  {
    "id": 31,
    "question": "Mikä seuraavista EI kuulu yleensä ensisijaisiin toimiin onnettomuuspaikalla?",
    "userAnswer": "Viedä loukkaantuneet sairaalaan itse",
    "correctAnswer": "Viedä loukkaantuneet sairaalaan itse",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 31,
    "category": "Emergency and first aid"
  },
  {
    "id": 32,
    "question": "Mikä seuraavista väittämistä pitää paikkansa?",
    "userAnswer": "Alkoholi vaikuttaa kuljettajan ajokykyyn, vaikka vaikutukset eivät aina tunnu selvästi.",
    "correctAnswer": "Alkoholi vaikuttaa kuljettajan ajokykyyn, vaikka vaikutukset eivät aina tunnu selvästi.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 32,
    "category": "Customer service"
  },
  {
    "id": 33,
    "question": "Mikä seuraavista vaihtoehdoista edustaa hyvää ja ammattimaista asiakaspalvelua taksinkuljettajalta?",
    "userAnswer": "Kuljettaja tervehtii iloisesti ja antaa asiakkaalle tilaa päättää, haluaako viettää matkan keskustellen vai hiljaisuudessa. Keskustelun aihetta ei tyrkytetä, vaan asiakas saa itse ohjata tunnelmaa.",
    "correctAnswer": "Kuljettaja tervehtii iloisesti ja antaa asiakkaalle tilaa päättää, haluaako viettää matkan keskustellen vai hiljaisuudessa. Keskustelun aihetta ei tyrkytetä, vaan asiakas saa itse ohjata tunnelmaa.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 33,
    "category": "Customer service"
  },
  {
    "id": 34,
    "question": "Kuka on vastuussa siitä, että alle 3-vuotiasta ei kuljeteta ilman turvalaitetta?",
    "userAnswer": "Kuljettaja",
    "correctAnswer": "Kuljettaja",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 34,
    "category": "Customer service"
  },
  {
    "id": 35,
    "question": "Olet viemässä vakiomatkustajaasi, 43-vuotiasta Marikaa, hänen viikoittaiseen toimintaterapiaan kaupungin terveyskeskukseen. Matkan aikana Marika alkaa kouristella takapenkillä. Tiedät, että hän sairastaa epilepsiaa, koska hän on kertonut siitä aiemmin sinulle. Miten toimit oikein ensiaputilanteessa?",
    "userAnswer": "Suojaan asiakkaan pään iskuilta, en yritä estää kouristuksia ja kouristusten loputtua käännän hänet kylkiasentoon varmistaakseni hengitysteiden aukiolon.",
    "correctAnswer": "Suojaan asiakkaan pään iskuilta, en yritä estää kouristuksia ja kouristusten loputtua käännän hänet kylkiasentoon varmistaakseni hengitysteiden aukiolon.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 35,
    "category": "Emergency and first aid"
  },
  {
    "id": 36,
    "question": "Matkan lopussa 10-vuotias lapsi nousee kyydistä eikä vanhempia näy. Tilauksen ohjeena oli jättää lapsi vanhempien luokse. Mitä kuljettajan tulee tehdä?",
    "userAnswer": "Ottaa yhteyttä huoltajiin tai tilaajaan ja odottaa ohjeita",
    "correctAnswer": "Ottaa yhteyttä huoltajiin tai tilaajaan ja odottaa ohjeita",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 36,
    "category": "Children and school transport"
  },
  {
    "id": 37,
    "question": "16-vuotias Elias menee päivittäin jalkapallotreeneihin taksilla. Vastaako kuljettaja vai Elias itse siitä, pitääkö hän turvavyötä päällään?",
    "userAnswer": "Matkustaja itse, koska hän on lain mukaan velvollinen käyttämään turvavyötä.",
    "correctAnswer": "Matkustaja itse, koska hän on lain mukaan velvollinen käyttämään turvavyötä.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 37,
    "category": "Customer service"
  },
  {
    "id": 38,
    "question": "Suuren firman talousjohtaja pyytää sinua ajamaan ylinopeutta sillä olet ollut hieman myöhässä sovitusta noutoajasta. Talousjohtajalla on kiire kokoukseen. Miten toimit?",
    "userAnswer": "Kerron asiakkaalle, että nopeusrajoituksia täytyy noudattaa, ja pyrin valitsemaan nopean mutta turvallisen reitin.",
    "correctAnswer": "Kerron asiakkaalle, että nopeusrajoituksia täytyy noudattaa, ja pyrin valitsemaan nopean mutta turvallisen reitin.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 38,
    "category": "Traffic rules"
  },
  {
    "id": 39,
    "question": "Olet suorittamassa kunnan järjestämää koulukuljetusta ja huomaat, että ajoneuvossa on alkolukko. Miksi tällainen laite on näissä kuljetuksissa pakollinen?",
    "userAnswer": "Se varmistaa, ettei kuljettaja voi käynnistää ajoneuvoa, jos hän on alkoholin vaikutuksen alaisena.",
    "correctAnswer": "Se varmistaa, ettei kuljettaja voi käynnistää ajoneuvoa, jos hän on alkoholin vaikutuksen alaisena.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 39,
    "category": "Children and school transport"
  },
  {
    "id": 40,
    "question": "Mikä taho myöntää taksinkuljettajan ajoluvan?",
    "userAnswer": "Liikenne- ja viestintävirasto Traficom",
    "correctAnswer": "Liikenne- ja viestintävirasto Traficom",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 40,
    "category": "Licensing and law"
  },
  {
    "id": 41,
    "question": "Mikä on suurin sallittu omavastuu yhdensuuntaisesta Kela-korvattavasta matkasta?",
    "userAnswer": "25 €",
    "correctAnswer": "25 €",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 41,
    "category": "Kela"
  },
  {
    "id": 42,
    "question": "Esteettömässä taksiajossa asiakas jää pyörätuoliin matkan ajaksi. Mikä seuraavista kuvaa oikeaa menettelyä pyörätuolin kiinnittämiseksi?",
    "userAnswer": "Kiinnitys tehdään nelipistejärjestelmällä pyörätuolin rungosta.",
    "correctAnswer": "Kiinnitys tehdään nelipistejärjestelmällä pyörätuolin rungosta.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 42,
    "category": "Accessibility"
  },
  {
    "id": 43,
    "question": "Asiakkaasi haluaa jäädä kyydistä pois keskellä ruuhkaista katua, jossa ei ole turvallista pysähtyä. Miten toimit tilanteessa oikein?",
    "userAnswer": "Kerron asiakkaalle, että en voi pysähtyä juuri siihen, mutta etsin lähimmän turvallisen pysähtymispaikan hänen poistumistaan varten.",
    "correctAnswer": "Kerron asiakkaalle, että en voi pysähtyä juuri siihen, mutta etsin lähimmän turvallisen pysähtymispaikan hänen poistumistaan varten.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 43,
    "category": "Traffic rules"
  },
  {
    "id": 44,
    "question": "Olet noutanut pyörätuolilla liikkuvan asiakkaan lääkärikäynniltä. Kun asiakas on siirretty taksiin, hän mainitsee, että vaatteet ovat jääneet epämukavasti jumiin penkin väliin. Hän tarvitsee apua tilanteen korjaamiseen.",
    "userAnswer": "Varmistan, että asiakkaalla on mukava ja turvallinen istuma-asento, ja pyydettäessä autan hienotunteisesti oikaisemaan vaatteet asiakkaan luvalla.",
    "correctAnswer": "Varmistan, että asiakkaalla on mukava ja turvallinen istuma-asento, ja pyydettäessä autan hienotunteisesti oikaisemaan vaatteet asiakkaan luvalla.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 44,
    "category": "Accessibility"
  },
  {
    "id": 45,
    "question": "Asiakas sanoo haluavansa mahdollisimman halvan reitin, mutta ei tiedä itse reittiä. Mitä teet?",
    "userAnswer": "Tarkastan navigaattorista asiakkaalle edullisimman reitin.",
    "correctAnswer": "Tarkastan navigaattorista asiakkaalle edullisimman reitin.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 45,
    "category": "Customer service"
  },
  {
    "id": 46,
    "question": "Mikä seuraavista kuvastaa ammattimaista ja vastuullista viestintälaitteiden käyttöä taksinkuljettajan asiakaspalveluun liittyen?",
    "userAnswer": "Puhelimeen vastaaminen on perusteltua vain silloin, kun se liittyy kuljetukseen ja ei vaaranna liikennettä.",
    "correctAnswer": "Puhelimeen vastaaminen on perusteltua vain silloin, kun se liittyy kuljetukseen ja ei vaaranna liikennettä.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 46,
    "category": "Customer service"
  },
  {
    "id": 47,
    "question": "Eläkeläinen asiakas on varannut matkansa keskitetyn tilausvälityskeskuksen kautta mennäkseen silmälääkärin vastaanotolle. Hän kysyy sinulta etukäteen, paljonko matka hänelle maksaa, kun kyseessä on Kela-korvattava matka. Mikä seuraavista väittämistä pitää paikkansa?",
    "userAnswer": "Asiakas maksaa enintään Kelan vahvistaman omavastuun, joka on 25 euroa yhdensuuntaiselta matkalta.",
    "correctAnswer": "Asiakas maksaa enintään Kelan vahvistaman omavastuun, joka on 25 euroa yhdensuuntaiselta matkalta.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 47,
    "category": "Kela"
  },
  {
    "id": 48,
    "question": "Milloin kuljettajalla on oikeus käyttää taksikaistaa?",
    "userAnswer": "Jos taksikupu on esillä ja ajoneuvo on taksiliikenteessä.",
    "correctAnswer": "Jos taksikupu on esillä ja ajoneuvo on taksiliikenteessä.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 48,
    "category": "Traffic rules"
  },
  {
    "id": 49,
    "question": "Asiakas, jolla on rollaattori, nousee kyytiin kerrostalon pihalta. Hän pyytää apua turvavyön kiinnittämisessä, mutta kuljettajalla on kiire. Miten kuljettajan pitäisi toimia?",
    "userAnswer": "Avustaa asiakasta toiveen mukaan, turvallisuus etusijalla.",
    "correctAnswer": "Avustaa asiakasta toiveen mukaan, turvallisuus etusijalla.",
    "result": "Oikein",
    "source": "Mock Exam 1",
    "originalNumber": 49,
    "category": "Customer service"
  },
  {
    "id": 50,
    "question": "Asiakas pyysi itseään noudettavaksi paikasta, joka on 50 metriä kuvassa olevan liikennemerkin jälkeen. Voitko lain mukaan noutaa asiakkaan sovitulta paikalta?",
    "userAnswer": "Kyllä voin",
    "correctAnswer": "En voi",
    "result": "Virheellinen",
    "source": "Mock Exam 1",
    "originalNumber": 50,
    "category": "Traffic rules",
    "image": "assets/mock-exam-sign-2.jpeg"
  },
  {
    "id": 51,
    "question": "Taksinkuljettajana työskentely vaatii hyvää fyysistä ja henkistä kuntoa. Ennen ajoluvan myöntämistä vaaditaan, että hakija todistaa täyttävänsä tietyt terveysvaatimukset. Miten tämä vaatimus käytännössä varmistetaan?",
    "userAnswer": "Lääkärin tekemällä terveystarkastuksella ja siitä annettavalla virallisella todistuksella.",
    "correctAnswer": "Lääkärin tekemällä terveystarkastuksella ja siitä annettavalla virallisella todistuksella.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 1,
    "category": "Customer service"
  },
  {
    "id": 52,
    "question": "40-vuotias Sanni on aktiivinen sähköpyörätuolin käyttäjä ja nousee taksiisi ostoskeskuksen pihalta. Hän kertoo haluavansa siirtyä itse pyörätuolistaan auton istuimelle. Hän vaikuttaa päättäväiseltä ja tottuneelta toimimaan itsenäisesti. Miten toimit kuljettajana?",
    "userAnswer": "Kunnioitan asiakkaan toivetta, annan hänen siirtyä itsenäisesti ja tarjoan apua vain, jos hän sitä pyytää tai näyttää tarvitsevan.",
    "correctAnswer": "Kunnioitan asiakkaan toivetta, annan hänen siirtyä itsenäisesti ja tarjoan apua vain, jos hän sitä pyytää tai näyttää tarvitsevan.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 2,
    "category": "Accessibility"
  },
  {
    "id": 53,
    "question": "Olet ajamassa normaalia tietä taajama-alueella kohti lentoasemaa, kun näet edessä polkupyöräilijän kaatuvan keskelle ajokaistaa. Pyöräilijä jää makaamaan ajokaistalle. Mikä on ensimmäinen ensiaputoimenpiteesi saapuessasi paikalle?",
    "userAnswer": "Tarkistat, onko henkilö tajuissaan ja avaat tarvittaessa hengitystiet.",
    "correctAnswer": "Tarkistat, onko henkilö tajuissaan ja avaat tarvittaessa hengitystiet.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 3,
    "category": "Emergency and first aid"
  },
  {
    "id": 54,
    "question": "Kiireinen asiakas hyppää kyytiisi rautatieasemalta ja sanoo vain määränpään, mutta ei toivomaansa reittiä. Asiakas toteaa: \"Mene miten parhaaksi näet.\" Matkan hinta määräytyy käytetyn ajan tai matkan pituuden mukaan. Miten toimit?",
    "userAnswer": "Valitsen matkustajan kannalta tarkoituksenmukaisen ja edullisen reitin, ottaen huomioon liikennetilanteen.",
    "correctAnswer": "Valitsen matkustajan kannalta tarkoituksenmukaisen ja edullisen reitin, ottaen huomioon liikennetilanteen.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 4,
    "category": "Payment and pricing"
  },
  {
    "id": 55,
    "question": "Ajaessasi asiakas saa yllättäen sairauskohtauksen, ja sinun täytyy soittaa apua. Mikä on yleinen hätänumero Suomessa?",
    "userAnswer": "112",
    "correctAnswer": "112",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 5,
    "category": "Emergency and first aid"
  },
  {
    "id": 56,
    "question": "Taksinkuljettajan työssä on noudatettava tiukkoja laatuvaatimuksia. Liikenteen palveluista annetun lain mukaan, keihin nämä laatuvaatimukset yleisimmin kohdistuvat?",
    "userAnswer": "Kaikkiin taksinkuljettajiin, jotka tarjoavat taksipalvelua.",
    "correctAnswer": "Kaikkiin taksinkuljettajiin, jotka tarjoavat taksipalvelua.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 6,
    "category": "Customer service"
  },
  {
    "id": 57,
    "question": "Kuka voi peruuttaa taksinkuljettajan ajoluvan viranomaispäätöksellä?",
    "userAnswer": "Poliisi",
    "correctAnswer": "Poliisi",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 7,
    "category": "Licensing and law"
  },
  {
    "id": 58,
    "question": "Olet vastaanottanut taksikyydin, jossa asiakkaalla on mukanaan opaskoira. Hän on näkövammainen, ja tarvitsee koiraa liikkumisen tueksi. Miten sinun tulisi kuljettajana suhtautua tilanteeseen?",
    "userAnswer": "Opaskoira saa kulkea matkustamossa asiakkaan kanssa, ja sille on annettava riittävästi tilaa.",
    "correctAnswer": "Opaskoira saa kulkea matkustamossa asiakkaan kanssa, ja sille on annettava riittävästi tilaa.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 8,
    "category": "Accessibility"
  },
  {
    "id": 59,
    "question": "Kuraisella kelillä otat kyytiin perheen, jossa on lapsia. Lapsien vaatteet ovat kuraiset. Miten toimit tilanteessa?",
    "userAnswer": "Otan asiakkaat kyytiin, suojaan penkin tarvittaessa ja siivoan auton kyydin jälkeen.",
    "correctAnswer": "Otan asiakkaat kyytiin, suojaan penkin tarvittaessa ja siivoan auton kyydin jälkeen.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 9,
    "category": "Children and school transport"
  },
  {
    "id": 60,
    "question": "Olet saanut ajettavaksesi koulukuljetuksen, jossa viet useita alakouluikäisiä lapsia aamulla kouluun ja iltapäivällä takaisin koteihinsa. Lapset ovat iloisia ja levottomia, ja heidän kanssaan vaaditaan malttia ja tarkkaavaisuutta. Mikä seuraavista kuuluu kuljettajan keskeisiin vastuisiin tällaisessa kuljetuksessa?",
    "userAnswer": "Varmistan, että jokaisella lapsella on turvavyö asianmukaisesti kiinnitetty ja toimin esimerkkinä liikenneturvallisuudessa.",
    "correctAnswer": "Varmistan, että jokaisella lapsella on turvavyö asianmukaisesti kiinnitetty ja toimin esimerkkinä liikenneturvallisuudessa.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 10,
    "category": "Children and school transport"
  },
  {
    "id": 61,
    "question": "Katja ajaa taksia, ja hänelle tarjoutuu mahdollisuus alkaa toimia vakiotaksinkuljettajana kuntoutusmatkoissa, joissa matkustajana on pyörätuolia käyttävä 15-vuotias lapsi. Kyyditys olisi säännöllistä ja tapahtuisi useita kertoja viikossa. Millä ehdoin Katja voi toimia lapsen vakiotaksinkuljettajana?",
    "userAnswer": "Ennen aloittamista on varmistettava työnantajalta tai kuljetuspalvelun tilaajalta, voiko toimia vakiokuljettajana.",
    "correctAnswer": "Ennen aloittamista on varmistettava työnantajalta tai kuljetuspalvelun tilaajalta, voiko toimia vakiokuljettajana.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 11,
    "category": "Accessibility"
  },
  {
    "id": 62,
    "question": "Mikä on ennakoivan ajotavan tärkein tavoite?",
    "userAnswer": "Välttää vaaratilanteet.",
    "correctAnswer": "Välttää vaaratilanteet.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 12,
    "category": "Customer service"
  },
  {
    "id": 63,
    "question": "Petri sai taksinkuljettajan ajoluvan neljä vuotta sitten, kun hän asui ja työskenteli Lahdessa. Nyt elämäntilanne on muuttunut, ja Petri on muuttamassa pysyvästi Ouluun. Hän on jo sopinut työhaastattelusta oululaisen taksiyrittäjän kanssa. Voiko Petri aloittaa taksinkuljettajan työn Oulussa ilman lisätoimenpiteitä?",
    "userAnswer": "Kyllä, taksinkuljettajan ajolupa oikeuttaa ajamaan taksia koko Manner-Suomen alueella riippumatta siitä, missä kaupungissa lupa on alun perin myönnetty.",
    "correctAnswer": "Kyllä, taksinkuljettajan ajolupa oikeuttaa ajamaan taksia koko Manner-Suomen alueella riippumatta siitä, missä kaupungissa lupa on alun perin myönnetty.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 13,
    "category": "Licensing and law"
  },
  {
    "id": 64,
    "question": "Mikko hyppäsi taksiin rautatieasemalta ja pyysi kuljettajaa viemään hänet hotellille. Matkan lopussa Mikko maksaa kortilla. Tarvitseeko kuljettajan tarjota Mikolle kuittia, vaikka hän ei sitä erikseen pyydä?",
    "userAnswer": "Kuittia täytyy aina tarjota.",
    "correctAnswer": "Kuittia täytyy aina tarjota.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 14,
    "category": "Payment and pricing"
  },
  {
    "id": 65,
    "question": "Taksinkuljettaja Laura on vienyt yövuorollaan asiakkaan tämän antamaan osoitteeseen. Kun hän saapuu määränpäähän, asiakas nukkuu syvässä unessa takapenkillä eikä herää, vaikka Laura yrittää kohteliaasti herätellä häntä useaan otteeseen. Matka on vielä maksamatta. Miten toimit?",
    "userAnswer": "Yritän herättää asiakkaan vielä kerran ja, jos se ei onnistu, otan yhteyttä hätäkeskukseen.",
    "correctAnswer": "Yritän herättää asiakkaan vielä kerran ja, jos se ei onnistu, otan yhteyttä hätäkeskukseen.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 15,
    "category": "Emergency and first aid"
  },
  {
    "id": 66,
    "question": "Milloin taksinkuljettajan nimi ja tunnistetiedot on pidettävä asiakkaan nähtävillä ajoneuvossa?",
    "userAnswer": "Ainoastaan silloin, kun matka tehdään sairaalalle tai viranomaisen määräyksestä.",
    "correctAnswer": "Aina, kun ajossa on maksava asiakas - oli kyse sitten ennakkotilauksesta tai kadulta otetusta kyydistä.",
    "result": "Virheellinen",
    "source": "Mock Exam 2",
    "originalNumber": 16,
    "category": "Payment and pricing"
  },
  {
    "id": 67,
    "question": "Olet lähdössä suorittamaan päiväkotiryhmän aamukuljetusta. Autossa on käytössä alkolukko, kuten lakisääteisesti vaaditaan koululaisten ja varhaiskasvatusikäisten kuljetuksissa. Mihin alkolukko on säädetty reagoimaan näissä kuljetuksissa?",
    "userAnswer": "Jos uloshengitysilmassa on 0,10 mg alkoholia per litra tai enemmän, ajoneuvo ei käynnisty.",
    "correctAnswer": "Jos uloshengitysilmassa on 0,10 mg alkoholia per litra tai enemmän, ajoneuvo ei käynnisty.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 17,
    "category": "Children and school transport"
  },
  {
    "id": 68,
    "question": "Olet ottanut kyytiin asiakkaan pitkän työpäivän jälkeen. Heti alkumatkasta huomaat, että asiakas vaikuttaa väsyneeltä ja vastailee lyhyesti. Taksinkuljettajana pystyt vaikuttamaan merkittävästi siihen, millaiseksi asiakas kokee matkansa. Mitä sinulta odotetaan tässä tilanteessa?",
    "userAnswer": "Havaitsen tilanteen hienovaraisesti ja kunnioitan asiakkaan toivetta rauhallisuudesta",
    "correctAnswer": "Havaitsen tilanteen hienovaraisesti ja kunnioitan asiakkaan toivetta rauhallisuudesta",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 18,
    "category": "Customer service"
  },
  {
    "id": 69,
    "question": "Olet hakeutumassa kuljettamaan koulun ja varhaiskasvatuksen kuljetuksia. Sinulle kerrotaan, että työ lasten kanssa edellyttää rikosrekisteriotteen esittämistä. Kuka vastaa rikosrekisteriotteen hankkimisesta tällöin?",
    "userAnswer": "Kuljettaja itse on velvollinen hankkimaan rikosrekisteriotteen ennen työn aloittamista.",
    "correctAnswer": "Kuljettaja itse on velvollinen hankkimaan rikosrekisteriotteen ennen työn aloittamista.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 19,
    "category": "Licensing and law"
  },
  {
    "id": 70,
    "question": "On viides ajopäiväsi uudessa työpaikassa. Sinut ohjataan noutamaan 72-vuotias Eeva, joka odottaa kyytiä terveysasemalta kotiin. Saapuessasi näet hänen seisovan rauhallisesti sisäänkäynnin läheisyydessä valkoinen keppi kädessään. Hän ei reagoi katsekontaktiin eikä viittoiluun, mutta näyttää tarkkailevan ääniä ympärillään. Mikä on ammatillisesti oikea tapa kohdata tämä asiakas?",
    "userAnswer": "Lähestyt Eevaa rauhallisesti ja kerrot selkeästi suullisesti, kuka olet ja mitä varten olet tullut, sekä kysyt, miten voit auttaa häntä turvallisesti autoon.",
    "correctAnswer": "Lähestyt Eevaa rauhallisesti ja kerrot selkeästi suullisesti, kuka olet ja mitä varten olet tullut, sekä kysyt, miten voit auttaa häntä turvallisesti autoon.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 20,
    "category": "Accessibility"
  },
  {
    "id": 71,
    "question": "Olet aloittamassa työvuoroasi taksiyrityksessä, jossa toimit työsuhteessa. Ennen ajoa sinua muistutetaan ajopäiväkirjan täyttämisestä. Mitä siihen tulee muun muassa merkitä?",
    "userAnswer": "Ajetut kilometrit, työvuoron alkamis- ja päättymisaika sekä pidetyt tauot.",
    "correctAnswer": "Ajetut kilometrit, työvuoron alkamis- ja päättymisaika sekä pidetyt tauot.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 21,
    "category": "Customer service"
  },
  {
    "id": 72,
    "question": "Voitko jättää asiakkaan pois kyydistä liikennemerkin vasemmalla puolella alkavalle tielle?",
    "userAnswer": "Kyllä voin",
    "correctAnswer": "En voi",
    "result": "Virheellinen",
    "source": "Mock Exam 2",
    "originalNumber": 22,
    "category": "Traffic rules",
    "image": "assets/mock-exam-sign-3.jpeg"
  },
  {
    "id": 73,
    "question": "Saat asiakkaaksi pyörätuolia käyttävän henkilön, joka saapuu taksillesi yhdessä avustajansa kanssa. Mukanaan heillä on useita laukkuja ja apuvälineitä. Matka on varattu ennakkoon esteettömällä kalustolla. Miten kuljettajan tulee toimia tilanteessa?",
    "userAnswer": "Kuljettaja tarjoaa aktiivisesti apua asiakkaan siirtymisessä autoon ja huolehtii siitä, että matkatavarat ja apuvälineet on lastattu turvallisesti.",
    "correctAnswer": "Kuljettaja tarjoaa aktiivisesti apua asiakkaan siirtymisessä autoon ja huolehtii siitä, että matkatavarat ja apuvälineet on lastattu turvallisesti.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 23,
    "category": "Accessibility"
  },
  {
    "id": 74,
    "question": "Olet lähdössä ajamaan viikonloppuyönä keskustasta kotiin useamman hengen seurueen kanssa. Kaikki istumapaikat autossa ovat täynnä, mutta yksi matkustajista ehdottaa, että \"yksi voi ihan hyvin seistä tai istua syliin, ei ole pitkä matka.\" Miten toimit?",
    "userAnswer": "En ota enempää matkustajia kuin ajoneuvoon on rekisteröity istumapaikkoja, koska ylimääräisten matkustajien kuljettaminen on kielletty.",
    "correctAnswer": "En ota enempää matkustajia kuin ajoneuvoon on rekisteröity istumapaikkoja, koska ylimääräisten matkustajien kuljettaminen on kielletty.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 24,
    "category": "Customer service"
  },
  {
    "id": 75,
    "question": "Olet saapunut asiakkaan noutopaikalle. Näet iäkkään henkilön lähestyvän autoa hitaasti, selvästi varoen askeliaan. Hänellä ei ole saattajaa mukana. Miten toimit tilanteessa?",
    "userAnswer": "Poistun ajoneuvosta ja kohteliaasti kysyn, voisinko avustaa asiakkaan turvallisesti kyytiin.",
    "correctAnswer": "Poistun ajoneuvosta ja kohteliaasti kysyn, voisinko avustaa asiakkaan turvallisesti kyytiin.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 25,
    "category": "Customer service"
  },
  {
    "id": 76,
    "question": "Miro on ajanut osa-aikaisesti taksia opiskelujensa ohella jo reilut kolme ja puoli vuotta. Nyt hän on elämäntilanteen muutoksen takia muuttamassa toiselle paikkakunnalta ja aikoo lopettaa taksityöt. Mikä on Miron lakisääteinen irtisanomisaika?",
    "userAnswer": "14 päivää",
    "correctAnswer": "14 päivää",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 26,
    "category": "Customer service"
  },
  {
    "id": 77,
    "question": "Huomaat asiakkaasi (pörssiyhtiön toimitusjohtaja) juoksevan kohti taksia puhelin korvalla ja salkku auki. Hän hyppää kyytiin ja sanoo ”nyt talla pohjaan, yhtiökokous alkaa kymmenen minuutin päästä”. Tiedät, ettei matkaa voi suorittaa ajoissa ilman ylinopeutta. Kun kerrot tilanteesta, asiakas vaatii sinua ajamaan ylinopeutta ja lupaa maksaa kaikki sakot. Miten toimit tällaisessa tilanteessa?",
    "userAnswer": "Kerrot asiakkaalle ystävällisesti, että et voi rikkoa liikennesääntöjä, mutta ajat nopeinta mahdollista reittiä turvallisesti.",
    "correctAnswer": "Kerrot asiakkaalle ystävällisesti, että et voi rikkoa liikennesääntöjä, mutta ajat nopeinta mahdollista reittiä turvallisesti.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 27,
    "category": "Traffic rules"
  },
  {
    "id": 78,
    "question": "8-vuotias Inka nousee taksiisi koulun pihasta. Hän kertoo heti, ettei aio käyttää turvavyötä, koska \"se painaa ikävästi vatsaa\" ja isä kuulemma sanoi, ettei vyön käyttö ole niin tarkkaa. Kuinka toimit?",
    "userAnswer": "Varmistan, että Inka kiinnittää turvavyön asianmukaisesti ja kerron ystävällisesti, että turvavyön käyttö on aina pakollista lapselle, huoltajan mielipiteestä riippumatta.",
    "correctAnswer": "Varmistan, että Inka kiinnittää turvavyön asianmukaisesti ja kerron ystävällisesti, että turvavyön käyttö on aina pakollista lapselle, huoltajan mielipiteestä riippumatta.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 28,
    "category": "Children and school transport"
  },
  {
    "id": 79,
    "question": "Kuinka pitkäksi aikaa rattijuopumuksesta tuomitulla on ajo-oikeus estettynä ennen kuin hän voi hakea taksinkuljettajan ajolupaa uudelleen?",
    "userAnswer": "Enintään 1 vuoden.",
    "correctAnswer": "Vähintään 5 vuotta.",
    "result": "Virheellinen",
    "source": "Mock Exam 2",
    "originalNumber": 29,
    "category": "Licensing and law"
  },
  {
    "id": 80,
    "question": "Olet liikenteessä asiakkaan kanssa, ja matka etenee normaalisti. Yhtäkkiä kuulet puhelimesi soivan ja huomaat, että handsfree-laitteesi jäi toimistolle. Mikä seuraavista tavoista toimia on oikein?",
    "userAnswer": "Jos puheluun vastaaminen on ajon kannalta välttämätöntä, pysäytän auton turvalliseen paikkaan ja vastaan siihen.",
    "correctAnswer": "Jos puheluun vastaaminen on ajon kannalta välttämätöntä, pysäytän auton turvalliseen paikkaan ja vastaan siihen.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 30,
    "category": "Customer service"
  },
  {
    "id": 81,
    "question": "Mikä seuraavista neljästä väittämästä voi olla syynä taksinkuljettajan ajoluvan peruuttamiselle?",
    "userAnswer": "Kuljettaja ei pidä turvavyötä päällä työvuoron aikana.",
    "correctAnswer": "Kuljettaja on syyllistynyt rattijuopumukseen.",
    "result": "Virheellinen",
    "source": "Mock Exam 2",
    "originalNumber": 31,
    "category": "Customer service"
  },
  {
    "id": 82,
    "question": "Voitko lain mukaan noutaa asiakkaan kyseisen liikennemerkin vaikutusalueelta?",
    "userAnswer": "En voi",
    "correctAnswer": "Kyllä voin",
    "result": "Virheellinen",
    "source": "Mock Exam 2",
    "originalNumber": 32,
    "category": "Traffic rules"
  },
  {
    "id": 83,
    "question": "Taksinkuljettaja Sami saa kyytiin asiakkaan, jolla on valkoinen keppi. Mitä on hyvä muistaa tällaisten asiakkaiden kanssa toimimisesta?",
    "userAnswer": "Kysyä asiakkaalta, miten hän haluaa tulla autetuksi, ennen kuin tarjoaa apua.",
    "correctAnswer": "Kysyä asiakkaalta, miten hän haluaa tulla autetuksi, ennen kuin tarjoaa apua.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 33,
    "category": "Accessibility"
  },
  {
    "id": 84,
    "question": "Olet ajamassa varhaiskasvatusikäisten lasten kuljetusta päiväkotiin. Lapset saattavat olla väsyneitä, levottomia tai jännittyneitä. Vanhemmat ja hoitajat luottavat siihen, että toimit tilanteessa ammattimaisesti. Mikä seuraavista parhaiten kuvaa taksinkuljettajan vastuullista roolia tällaisessa kuljetuksessa?",
    "userAnswer": "Kuljettajan tulee käyttäytyä rauhallisesti ja johdonmukaisesti, toimien turvallisena aikuisena ja esimerkkinä lapsille.",
    "correctAnswer": "Kuljettajan tulee käyttäytyä rauhallisesti ja johdonmukaisesti, toimien turvallisena aikuisena ja esimerkkinä lapsille.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 34,
    "category": "Children and school transport"
  },
  {
    "id": 85,
    "question": "Asiakas nousee kyytiin juna-asemalta ja mainitsee määränpään, jota et osaa paikantaa. Miten toimit ammattimaisesti?",
    "userAnswer": "Hyödynnän käytössäni olevaa navigointilaitetta ja kysyn samalla asiakkaalta lisätietoja tarvittaessa.",
    "correctAnswer": "Hyödynnän käytössäni olevaa navigointilaitetta ja kysyn samalla asiakkaalta lisätietoja tarvittaessa.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 35,
    "category": "Customer service"
  },
  {
    "id": 86,
    "question": "Milloin taksiajoneuvossa on pakollista olla alkolukko?",
    "userAnswer": "Silloin, kun ajetaan kunnan tilaamia koulu- ja päiväkotikuljetuksia.",
    "correctAnswer": "Silloin, kun ajetaan kunnan tilaamia koulu- ja päiväkotikuljetuksia.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 36,
    "category": "Children and school transport"
  },
  {
    "id": 87,
    "question": "Mikä seuraavista väittämistä on virheellinen taksinkuljettajan velvollisuuksien näkökulmasta?",
    "userAnswer": "Kuljettaja ei ole vastuussa matkustajien turvallisuudesta ajon aikana.",
    "correctAnswer": "Kuljettaja ei ole vastuussa matkustajien turvallisuudesta ajon aikana.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 37,
    "category": "Customer service"
  },
  {
    "id": 88,
    "question": "Tommi on uusi kuljettaja ja on onnistunut viemään asiakkaan määränpäähän. Kuitenkin maksussa syntyy ongelma. Asiakas pystyy maksamaan vain käteisellä ja Tommilla on vain korttilaite käytössä. Mitkä maksun välineet ovat lain mukaan käytössä?",
    "userAnswer": "Asiakas voi maksaa matkansa käteisellä sekä yleisimmillä pankki- ja luottokorteilla, koska taksin tulee hyväksyä vähintään nämä maksutavat.",
    "correctAnswer": "Asiakas voi maksaa matkansa käteisellä sekä yleisimmillä pankki- ja luottokorteilla, koska taksin tulee hyväksyä vähintään nämä maksutavat.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 38,
    "category": "Payment and pricing"
  },
  {
    "id": 89,
    "question": "Kenellä on vastuu 15 vuotta täyttäneen asiakkaan turvavyön käytöstä?",
    "userAnswer": "Asiakkaalla.",
    "correctAnswer": "Asiakkaalla.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 39,
    "category": "Customer service"
  },
  {
    "id": 90,
    "question": "Olet saattanut asiakkaan kotiovelle kiireisen kaupunkikierroksen jälkeen. Noin kymmenen minuuttia myöhemmin huomaat takapenkin jalkatilassa lompakon, jonka sisällä on edellisen asiakkaan henkilökortti. Mitä teet vastuullisena taksinkuljettajana?",
    "userAnswer": "Yritän tavoittaa asiakkaan välittömästi. Ellei se onnistu, toimitan laukun viipymättä poliisin löytötavaratoimistoon, kuten laki edellyttää.",
    "correctAnswer": "Yritän tavoittaa asiakkaan välittömästi. Ellei se onnistu, toimitan laukun viipymättä poliisin löytötavaratoimistoon, kuten laki edellyttää.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 40,
    "category": "Licensing and law"
  },
  {
    "id": 91,
    "question": "Eräänä iltapäivänä ajat taksiasi Helsingin keskustassa, kun kyydissä oleva asiakas pyytää sinua pysähtymään suoraan raitiovaunupysäkille, jossa on selkeästi pysähtymiskielto. Mitä teet?",
    "userAnswer": "Kerron ystävällisesti asiakkaalle, että pysähtyminen on liikennemerkin mukaan kiellettyä, ja etsin heti lähimmän laillisen pysähdyspaikan.",
    "correctAnswer": "Kerron ystävällisesti asiakkaalle, että pysähtyminen on liikennemerkin mukaan kiellettyä, ja etsin heti lähimmän laillisen pysähdyspaikan.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 41,
    "category": "Traffic rules"
  },
  {
    "id": 92,
    "question": "Voitko jättää asiakkaan pois kyydistä kyseisen liikennemerkin vaikutusalueelle?",
    "userAnswer": "Kyllä voin",
    "correctAnswer": "Kyllä voin",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 42,
    "category": "Traffic rules",
    "image": "assets/mock-exam-sign-4.jpeg"
  },
  {
    "id": 93,
    "question": "On tammikuun lopun yö Pohjois-Suomessa. Ulkona on -34 astetta pakkasta ja lumipyry heikentää näkyvyyttä. Olet hakenut asiakkaan juna-asemalta, ja huomaat heti tämän olevan väsynyt ja päihtynyt. Matka sujuu rauhallisesti, mutta perillä asiakas nousee autosta horjuen ja vaikuttaa eksyneeltä suunnasta. Hän lähtee kävelemään väärään suuntaan, vaikka kertoi aiemmin asuvansa samassa talossa, jonka eteen pysähdyit. Miten toimit vastuullisena kuljettajana?",
    "userAnswer": "Nousen autosta ja varmistan, että asiakas tietää mitä on tekemässä ja näytän, missä hänen asuntonsa sijaitsee.",
    "correctAnswer": "Nousen autosta ja varmistan, että asiakas tietää mitä on tekemässä ja näytän, missä hänen asuntonsa sijaitsee.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 43,
    "category": "Customer service"
  },
  {
    "id": 94,
    "question": "Aamuvuorosi alkaa varhain, ja työnantajasi on ilmoittanut sinulle rekisterinumeron mukaan, mikä auto on käytössäsi. Saapuessasi autolle huomaat, että yksi etuvaloista ei toimi, ja renkaiden kulutuspinnat ovat heikot. Kuka on vastuussa siitä, että auto täyttää tieliikennekelpoisuuden vaatimukset ennen ajoon lähtöä?",
    "userAnswer": "Kuljettaja, koska hän on vastuussa siitä, että ajoneuvo on ajokunnossa ennen liikenteeseen lähtöä.",
    "correctAnswer": "Kuljettaja, koska hän on vastuussa siitä, että ajoneuvo on ajokunnossa ennen liikenteeseen lähtöä.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 44,
    "category": "Customer service"
  },
  {
    "id": 95,
    "question": "Olet ajamassa säännöllistä koulukuljetusta, jossa kulkee sekä alakouluikäisiä että esikoululaisia. Lapset nousevat kyytiin eri pysäkeiltä, ja osa tarvitsee muistutuksia käytöksestä ja turvallisuudesta. Eräs lapsi yrittää matkustaa ilman turvavyötä. Mikä seuraavista pitää paikkansa?",
    "userAnswer": "Kuljettajan tulee itse käyttää turvavyötä ja huolehtia siitä, että myös kaikki lapset ovat asianmukaisesti kiinnitettyinä.",
    "correctAnswer": "Kuljettajan tulee itse käyttää turvavyötä ja huolehtia siitä, että myös kaikki lapset ovat asianmukaisesti kiinnitettyinä.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 45,
    "category": "Children and school transport"
  },
  {
    "id": 96,
    "question": "Missä seuraavista tilanteista taksinkuljettajalla on oikeus kieltäytyä ottamasta kyytiä?",
    "userAnswer": "Kyyti aiheuttaisi sen, että kuljettajan lakisääteinen työaika ylittyisi.",
    "correctAnswer": "Kyyti aiheuttaisi sen, että kuljettajan lakisääteinen työaika ylittyisi.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 46,
    "category": "Work time and equipment"
  },
  {
    "id": 97,
    "question": "Taksinkuljettaja Jari on ajovuorossa klo 07–17. Aamulla ennen ensimmäistä asiakasta hän tarkistaa auton kunnon ja siistii matkustamon. Iltapäivällä Jari pitää tunnin tauon, jonka aikana hän jää autoon odottamaan mahdollisia tilauksia. Mikä seuraavista väittämistä EI pidä paikkaansa hänen työajastaan?",
    "userAnswer": "Tunnin taukoa, jonka aikana kuljettaja odottaa uusia tilauksia, ei lasketa työaikaan.",
    "correctAnswer": "Tunnin taukoa, jonka aikana kuljettaja odottaa uusia tilauksia, ei lasketa työaikaan.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 47,
    "category": "Work time and equipment"
  },
  {
    "id": 98,
    "question": "Miksi taksinkuljettajalta edellytetään riittävää kielitaitoa viranomaisvaatimusten mukaisesti? Valitse vaihtoehto, joka on eniten oikein.",
    "userAnswer": "Koska kuljettajan täytyy pystyä ymmärtämään asiakkaan tarpeet, antaa tarvittavat tiedot ja varmistaa matkustamisen sujuvuus ja turvallisuus.",
    "correctAnswer": "Koska kuljettajan täytyy pystyä ymmärtämään asiakkaan tarpeet, antaa tarvittavat tiedot ja varmistaa matkustamisen sujuvuus ja turvallisuus.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 48,
    "category": "Customer service"
  },
  {
    "id": 99,
    "question": "Seuraavassa on neljä väittämää, jotka liittyvät taksinkuljettajan vastuisiin ja matkustajien turvallisuuteen. Mikä seuraavista pitää paikkansa?",
    "userAnswer": "Turvavyön käytön vastuu on yli 15-vuotiaalla asiakkaalla itsellään, eikä kuljettajalla.",
    "correctAnswer": "Turvavyön käytön vastuu on yli 15-vuotiaalla asiakkaalla itsellään, eikä kuljettajalla.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 49,
    "category": "Customer service"
  },
  {
    "id": 100,
    "question": "Eräänä päivänä taksinkuljettaja Ville keskustelee kolleegansa kanssa, joka väittää, että työaikalaki ei koske taksinkuljettajia lainkaan. Miten asia oikeasti on?",
    "userAnswer": "Kyllä, työaikalaki koskee myös taksinkuljettajia.",
    "correctAnswer": "Kyllä, työaikalaki koskee myös taksinkuljettajia.",
    "result": "Oikein",
    "source": "Mock Exam 2",
    "originalNumber": 50,
    "category": "Work time and equipment"
  },
  {
    "id": 101,
    "question": "Ajamasi sedan-mallinen taksi on hyväksytty kuljettamaan henkilöliikenteessä matkustajia normaalin taksiluvan puitteissa. Sinun kyytiin on tulossa 2 aikuista ja 2 lasta. Mietit, voitko ottaa heidät kaikki mukaan lain ja turvallisuuden puitteissa.",
    "userAnswer": "Kyllä, mikäli autossa on turvavyö kaikille ja lapset voidaan kuljettaa lain mukaisesti turvaistuimilla tai ilman niitä, iästä ja pituudesta riippuen.",
    "correctAnswer": "Kyllä, mikäli autossa on turvavyö kaikille ja lapset voidaan kuljettaa lain mukaisesti turvaistuimilla tai ilman niitä, iästä ja pituudesta riippuen.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 1,
    "category": "Children and school transport"
  },
  {
    "id": 102,
    "question": "Leena aloittaa työvuoronsa klo 4.30 ja ajaa aamuisin aikaisia kyytejä työpaikoille. Leena työvuoro jatkuu iltapäivän puolelle asti. Milloin hänen on pidettävä ensimmäinen taukonsa työvuoron aikana?",
    "userAnswer": "Viimeistään klo 10.00, koska yhtämittainen työaika saa kestää korkeintaan 5,5 tuntia.",
    "correctAnswer": "Viimeistään klo 10.00, koska yhtämittainen työaika saa kestää korkeintaan 5,5 tuntia.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 2,
    "category": "Work time and equipment"
  },
  {
    "id": 103,
    "question": "Suoritat aamulla sosiaalihuollon järjestämän kuljetuksen. Määränpäähän saavuttaessa, asiakas kertoo unohtaneensa lompakkonsa ja kyselee, pitääkö omavastuu maksaa nyt vai myöhemmin. Mikä seuraavista pitää paikkansa?",
    "userAnswer": "Omavastuun määrä ilmoitetaan normaalisti jo tilausvaiheessa, ja kuljettajan tehtävänä on periä se matkustajalta matkan päättyessä.",
    "correctAnswer": "Omavastuun määrä ilmoitetaan normaalisti jo tilausvaiheessa, ja kuljettajan tehtävänä on periä se matkustajalta matkan päättyessä.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 3,
    "category": "Kela"
  },
  {
    "id": 104,
    "question": "Helena on lähdössä lääkäriasemalle ja on oikeutettu Kelan korvaamaan taksimatkaan. Hänellä ei kuitenkaan ole vakiotaksioikeutta. Helena ei ole aiemmin tilannut Kelan matkaa ja haluaa toimia oikein saadakseen korvauksen matkasta. Miten Helenan tulee tilata taksimatka?",
    "userAnswer": "Soittamalla Kelan alueelliseen tilausvälityskeskukseen, josta matka tilataan ja korvaus muodostuu oikein.",
    "correctAnswer": "Soittamalla Kelan alueelliseen tilausvälityskeskukseen, josta matka tilataan ja korvaus muodostuu oikein.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 4,
    "category": "Kela"
  },
  {
    "id": 105,
    "question": "Mistä iästä lähtien turvavyön käytön vastuu siirtyy kuljettajalta asiakkaalle?",
    "userAnswer": "15-vuotias tai yli.",
    "correctAnswer": "15-vuotias tai yli.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 5,
    "category": "Customer service"
  },
  {
    "id": 106,
    "question": "Taksinkuljettaja Sami ottaa kyytiin asiakkaan, joka alkaa matkan aikana käyttäytyä uhkaavasti ja lopulta käy käsiksi kuljettajaan. Sami on tilanteessa yksin ja joutuu tekemään nopeita päätöksiä sekä oman turvallisuutensa että lain noudattamisen kannalta. Mikä seuraavista pitää paikkansa kuljettajan toimivallasta tilanteessa, jossa asiakas käyttäytyy väkivaltaisesti?",
    "userAnswer": "Kuljettajalla on oikeus ottaa kiinni väkivaltainen asiakas ja luovuttaa hänet poliisille. Tämä perustuu yleiseen kiinniotto-oikeuteen. Tärkeintä on kuitenkin hätänumeroon soittaminen.",
    "correctAnswer": "Kuljettajalla on oikeus ottaa kiinni väkivaltainen asiakas ja luovuttaa hänet poliisille. Tämä perustuu yleiseen kiinniotto-oikeuteen. Tärkeintä on kuitenkin hätänumeroon soittaminen.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 6,
    "category": "Emergency and first aid"
  },
  {
    "id": 107,
    "question": "Mitä vuorokausilepoa koskevaa poikkeusta voidaan soveltaa taksinkuljettajaan erityistehtävissä, kuten satunnaisissa tai tilapäisissä kuljetuksissa?",
    "userAnswer": "Tietyissä poikkeustilanteissa vuorokausilepo voidaan enintään kahdesti seitsemän vuorokauden aikana lyhentää vähintään seitsemään tuntiin, jos kuljetustehtävä sitä edellyttää.",
    "correctAnswer": "Tietyissä poikkeustilanteissa vuorokausilepo voidaan enintään kahdesti seitsemän vuorokauden aikana lyhentää vähintään seitsemään tuntiin, jos kuljetustehtävä sitä edellyttää.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 7,
    "category": "Work time and equipment"
  },
  {
    "id": 108,
    "question": "Modernit taksiautot ovat varustettu ajonvakautusjärjestelmillä, luistonestoilla ja muilla ajonhallintalaitteilla. Ne tukevat kuljettajaa erityisesti liukkailla keleillä. Mikä seuraavista väitteistä pitää paikkansa?",
    "userAnswer": "Elektroniset järjestelmät parantavat ajoturvallisuutta, mutta eivät poista liukkauden vaikutusta. Kuljettajan on itse arvioitava tilanteeseen sopiva ajonopeus.",
    "correctAnswer": "Elektroniset järjestelmät parantavat ajoturvallisuutta, mutta eivät poista liukkauden vaikutusta. Kuljettajan on itse arvioitava tilanteeseen sopiva ajonopeus.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 8,
    "category": "Customer service"
  },
  {
    "id": 109,
    "question": "Olet noutamassa aamun ensimmäistä asiakasta. Helena Niemi, 61-vuotias sokeana syntynyt nainen odottaa sinua noutopaikalla. Hän käyttää valkoista keppiä ja opaskoiraa liikkumiseen. Et ole aikaisemmin kuljettanut Helenaa.",
    "userAnswer": "Lähestyt Helenaa rauhallisesti, esittelet itsesi, kerrot taksin saapuneen ja kuvailet taksin sijainnin. Kysyt myös, millä penkillä hän haluaa autossa matkustaa.",
    "correctAnswer": "Lähestyt Helenaa rauhallisesti, esittelet itsesi, kerrot taksin saapuneen ja kuvailet taksin sijainnin. Kysyt myös, millä penkillä hän haluaa autossa matkustaa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 9,
    "category": "Accessibility"
  },
  {
    "id": 110,
    "question": "Olet ajanut asiakkaan sovittuun osoitteeseen. Matkan hinnasta oli keskusteltu ennen ajoa, mutta nyt maksun yhteydessä asiakas kiistää sovitun hinnan ja väittää toista summaa kuin sinä. Taksamittaria ei käytetty, eikä hintaa ole dokumentoitu kirjallisesti. Maksua ei ole vielä suoritettu. Kumman puolelle viranomainen yleensä asettuu tällaisessa sanan sanaa vastaan -tilanteessa?",
    "userAnswer": "Asiakkaan, koska kuljettajalla on vastuu osoittaa hinnan perusteet ja dokumentaatio puuttuu.",
    "correctAnswer": "Asiakkaan, koska kuljettajalla on vastuu osoittaa hinnan perusteet ja dokumentaatio puuttuu.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 10,
    "category": "Payment and pricing"
  },
  {
    "id": 111,
    "question": "Koulukuljetuksissa turvallisuus on kaikki kaikessa. Mitä kuljetuksissa on hyvä muistaa turvavyön käytöstä?",
    "userAnswer": "Kuljettajan on huolehdittava siitä, että oppilaat käyttävät turvavyötä",
    "correctAnswer": "Kuljettajan on huolehdittava siitä, että oppilaat käyttävät turvavyötä",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 11,
    "category": "Children and school transport"
  },
  {
    "id": 112,
    "question": "Taksinkuljettajana sinun tulee huolehtia sekä omasta että asiakkaidesi turvallisuudesta. Onko sallittua työskennellä ilman taukoja tai lepoaikoja yhtäjaksoisesti jopa 15 tuntia?",
    "userAnswer": "Ei, työaikalainsäädännön mukaan palkansaajan työaika on rajattu turvallisuuden vuoksi.",
    "correctAnswer": "Ei, työaikalainsäädännön mukaan palkansaajan työaika on rajattu turvallisuuden vuoksi.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 12,
    "category": "Work time and equipment"
  },
  {
    "id": 113,
    "question": "Taksinkuljettajille tarjotaan koulutusta erityisryhmien, kuten liikunta- tai aistivammaisten henkilöiden, turvalliseen ja laadukkaaseen kuljettamiseen. Mikä seuraavista väittämistä ei pidä paikkaansa koulutuksen suhteen?",
    "userAnswer": "Koulutuksen tavoitteena on kehittää kuljettajan osaamista erityistä tukea tarvitsevien asiakkaiden kohtaamisessa ja avustamisessa.",
    "correctAnswer": "Koulutus on pakollinen kaikille taksinkuljettajille ja sen suorittaminen on edellytys ajoluvan saamiselle.",
    "result": "Virheellinen",
    "source": "Mock Exam 3",
    "originalNumber": 13,
    "category": "Customer service"
  },
  {
    "id": 114,
    "question": "Marja on saanut uuden ajotehtävän, jossa hän kuljettaa koululaisia aamuisin ja iltapäivisin pienellä maaseutupaikkakunnalla. Ensimmäisellä ajopäivänään hän pohtii, millä nopeudella saa lain mukaan ajaa, kun kyseessä on koulukuljetus?",
    "userAnswer": "Samalla nopeudella kuin tiekohtainen nopeusrajoitus.",
    "correctAnswer": "Samalla nopeudella kuin tiekohtainen nopeusrajoitus.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 14,
    "category": "Children and school transport"
  },
  {
    "id": 115,
    "question": "Jari on toiminut taksinkuljettajana kolme vuotta. Hänen työviikkonsa sisältää usein sekä päivä- että yövuoroja. Viime aikoina Jari on huomannut olevansa erityisen väsynyt yön jälkeen, eikä keskittymiskyky tahdo aina pysyä riittävällä tasolla. Hän haluaa nyt pohtia, miten voisi paremmin huolehtia jaksamisestaan vuorotyössä. Mikä seuraavista on paras keino tukea työjaksamista?",
    "userAnswer": "Riittävän unensaannin varmistaminen sekä työpäivien ruokailujen suunnittelu, erityisesti yövuoroissa.",
    "correctAnswer": "Riittävän unensaannin varmistaminen sekä työpäivien ruokailujen suunnittelu, erityisesti yövuoroissa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 15,
    "category": "Customer service"
  },
  {
    "id": 116,
    "question": "Kello on neljä aamuyöllä. Saat kyytiin voimakkaasti päihtyneen asiakkaan, joka ei puhu paljoa matkan aikana. Määränpäässä asiakas nousee autosta maksamatta, hoipertelee pari askelta ja kaatuu lumihankeen, johon hän sammuu. Mitä teet?",
    "userAnswer": "Varmistan, ettei asiakas jää vaaraan, soitan hätäkeskukseen ja selvittelen asian poliisin kanssa.",
    "correctAnswer": "Varmistan, ettei asiakas jää vaaraan, soitan hätäkeskukseen ja selvittelen asian poliisin kanssa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 16,
    "category": "Emergency and first aid"
  },
  {
    "id": 117,
    "question": "Taksinkuljettaja Kari noutaa äidin ja vauvan neuvolasta. Äidillä on mukanaan selkä menosuuntaan asennettava turvaistuin. Hän kysyy Karilta, mihin istuin olisi parasta asentaa turvallisuuden kannalta. Miten vastaat?",
    "userAnswer": "Takapenkille, mieluiten auton keskipaikalle, koska se on törmäyksissä turvallisin paikka.",
    "correctAnswer": "Takapenkille, koska se on turvallisin paikka lapselle.",
    "result": "Virheellinen",
    "source": "Mock Exam 3",
    "originalNumber": 17,
    "category": "Children and school transport"
  },
  {
    "id": 118,
    "question": "Minkälaisia ominaisuuksia ja valmiuksia vaaditaan kuljettajalta, joka ajaa Kelan korvaamia kuljetuksia?",
    "userAnswer": "Kuljettajan on oltava koulutettu avustaviin tehtäviin, toimittava huomaavaisesti ja noudatettava tarkasti Kelan ohjeistuksia.",
    "correctAnswer": "Kuljettajan on oltava koulutettu avustaviin tehtäviin, toimittava huomaavaisesti ja noudatettava tarkasti Kelan ohjeistuksia.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 18,
    "category": "Kela"
  },
  {
    "id": 119,
    "question": "9-vuotias Aino käy viikoittain Kelan järjestämässä fysioterapiassa, joka on osa hänen lääkinnällistä kuntoutustaan. Hän käyttää pyörätuolia eikä pysty liikkumaan itsenäisesti. Ainon isä kysyy sinulta, voisiko Aino saada aina saman kuljettajan Kela kyyteihin helpottamaan arkea ja lisäämään turvallisuutta. Miten vastaat?",
    "userAnswer": "Kyllä, perustelluissa tapauksissa Kela voi myöntää oikeuden vakiotaksiin, jolloin kuljetukset hoidetaan mahdollisuuksien mukaan saman kuljettajan tai yrityksen kautta.",
    "correctAnswer": "Kyllä, perustelluissa tapauksissa Kela voi myöntää oikeuden vakiotaksiin, jolloin kuljetukset hoidetaan mahdollisuuksien mukaan saman kuljettajan tai yrityksen kautta.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 19,
    "category": "Kela"
  },
  {
    "id": 120,
    "question": "Kuljetat iäkästä asiakasta, joka tarvitsee apua liikkumisessa. Päätepisteenä on hoitolaitos, jonka edessä ei ole henkilökuntaa vastassa. Mikä seuraavista tavoista toimia on oikea ja ammattimainen?",
    "userAnswer": "Varmistat, että asiakas pääsee turvallisesti hoitolaitoksen sisään asti, ja tarvittaessa odotat, että henkilökunta ottaa hänet vastaan.",
    "correctAnswer": "Varmistat, että asiakas pääsee turvallisesti hoitolaitoksen sisään asti, ja tarvittaessa odotat, että henkilökunta ottaa hänet vastaan.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 20,
    "category": "Customer service"
  },
  {
    "id": 121,
    "question": "Missä maantieteellisesti taksinkuljettajan ajolupa oikeuttaa ajamaan taksia?",
    "userAnswer": "Koko Manner-Suomen alueella.",
    "correctAnswer": "Koko Manner-Suomen alueella.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 21,
    "category": "Licensing and law"
  },
  {
    "id": 122,
    "question": "Muistisairaita asiakkaita kuskatessa on hyvä pitää mielessä tiettyjä asioita. Mikä seuraavista pitää paikkansa?",
    "userAnswer": "Asiakas voi vaikuttaa hämmentyneeltä tai toistaa samoja kysymyksiä. Pidän rauhallisen ilmapiirin, varmistan määränpään ja en koskaan jätä asiakasta yksin.",
    "correctAnswer": "Asiakas voi vaikuttaa hämmentyneeltä tai toistaa samoja kysymyksiä. Pidän rauhallisen ilmapiirin, varmistan määränpään ja en koskaan jätä asiakasta yksin.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 22,
    "category": "Customer service"
  },
  {
    "id": 123,
    "question": "Mikä seuraavista ei pidä paikkaansa koskien taksinkuljettajan ajopäiväkirjaa?",
    "userAnswer": "Kuljettajan ei tarvitse merkitä taukojen ajankohtia, jos niitä ei ehdi kirjoittaa muistiin kiireisessä työvuorossa.",
    "correctAnswer": "Kuljettajan ei tarvitse merkitä taukojen ajankohtia, jos niitä ei ehdi kirjoittaa muistiin kiireisessä työvuorossa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 23,
    "category": "Work time and equipment"
  },
  {
    "id": 124,
    "question": "Missä seuraavista tilanteista tapahtuu onnettomuuksia eniten?",
    "userAnswer": "Pysäköitäessä parkkipaikoilla.",
    "correctAnswer": "Pysäköitäessä parkkipaikoilla.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 24,
    "category": "Traffic rules"
  },
  {
    "id": 125,
    "question": "Koulukuljetuksessa kuljettaja saapuu sovittuun noutopaikkaan, mutta oppilasta ei näy. Miten kuljettajan tulee asianmukaisesti toimia oppilaan turvallisuuden ja ohjeiden mukaisesti?",
    "userAnswer": "Kuljettajan tulee viipymättä olla yhteydessä oppilaan huoltajaan tai kuljetuksen järjestäjään ennen kuin jatkaa reittiä.",
    "correctAnswer": "Kuljettajan tulee viipymättä olla yhteydessä oppilaan huoltajaan tai kuljetuksen järjestäjään ennen kuin jatkaa reittiä.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 25,
    "category": "Children and school transport"
  },
  {
    "id": 126,
    "question": "Taksiyrittäjä Leena on hankkimassa uutta autoa käyttöönsä, ja hän haluaa varmistaa, millaisissa kuljetuksissa lainsäädäntö edellyttää alkolukon käyttöä ajoneuvossa. Missä seuraavista kuljetuksista on oltava alkolukko lain mukaan käytössä?",
    "userAnswer": "Muun muassa koulukuljetuksissa.",
    "correctAnswer": "Muun muassa koulukuljetuksissa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 26,
    "category": "Children and school transport"
  },
  {
    "id": 127,
    "question": "Saat kyytiin asiakkaan, joka vaikuttaa ärtyneeltä jo alussa ja sanoo edellisen taksikokemuksensa olleen huono. Hän epäilee, tuleeko tämäkään matka sujumaan kunnolla. Miten taksinkuljettajana varmistat, että palvelusi on yhdenmukaista ja ammattimaista kaikille asiakkaillesi?",
    "userAnswer": "Pidän asenteeni neutraalina, toimin rauhallisesti ja varmistan asiakkaan turvallisen ja sujuvan matkan.",
    "correctAnswer": "Pidän asenteeni neutraalina, toimin rauhallisesti ja varmistan asiakkaan turvallisen ja sujuvan matkan.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 27,
    "category": "Customer service"
  },
  {
    "id": 128,
    "question": "Taksillesi tulee tilaus lauantaiaamuna osoitteeseen Meritie 42. Tilauksen tiedoista näkyy, että kyytiin on tulossa kaksi aikuista. Saapuessasi paikalle huomaat, että yksi matkustajista pitää sylissään noin 2-vuotiasta lasta, eikä heillä ole mukana turvaistuinta tai istuinkoroketta. Miten toimit tilanteessa?",
    "userAnswer": "Kieltäydyn kuljettamasta asiakkaita, koska alle 3-vuotias lapsi ei saa matkustaa taksissa ilman asianmukaista turvalaitetta. Tilaan heille turvalaitteella varustetun taksin.",
    "correctAnswer": "Kieltäydyn kuljettamasta asiakkaita, koska alle 3-vuotias lapsi ei saa matkustaa taksissa ilman asianmukaista turvalaitetta. Tilaan heille turvalaitteella varustetun taksin.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 28,
    "category": "Children and school transport"
  },
  {
    "id": 129,
    "question": "Taksi saapuu aamulla palvelutalon eteen, josta useampi kehitysvammainen asiakas on lähdössä työtoimintaan eri puolille kaupunkia. Kuljettaja näkee, että osa asiakkaista tarvitsee enemmän ohjausta ja aikaa siirtymiseen, ja yksi heistä lähestyy autoa selvästi innostuneena, mutta ei vielä osaa kertoa määränpäätään. Miten sinun tulisi kuljettajana suhtautua tilanteeseen?",
    "userAnswer": "Kohtelen jokaista asiakasta yksilöllisesti ja kärsivällisesti, huomioiden heidän tarpeensa ja kommunikointitapansa.",
    "correctAnswer": "Kohtelen jokaista asiakasta yksilöllisesti ja kärsivällisesti, huomioiden heidän tarpeensa ja kommunikointitapansa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 29,
    "category": "Customer service"
  },
  {
    "id": 130,
    "question": "Taksinkuljettaja Jari ottaa kyytiin asiakkaan, joka pyytää ajamaan kiireesti lentokentälle. Asiakas ehdottaa, että Jari käyttäisi moottoritien varrella olevaa linja-autokaistaa, koska \"kyllä taksit siinä aina ajavat\". Taksissa ei ole taksikupua esillä. Miten Jarin tulisi toimia?",
    "userAnswer": "Kieltäytyä ajamasta linja-autokaistaa, koska taksilla ei ole siihen oikeutta ilman taksikupua.",
    "correctAnswer": "Kieltäytyä ajamasta linja-autokaistaa, koska taksilla ei ole siihen oikeutta ilman taksikupua.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 30,
    "category": "Traffic rules"
  },
  {
    "id": 131,
    "question": "Kuljettajan henkilökohtaisten mielipiteiden, esimerkiksi poliittisten näkemysten esille tuominen voi vaikuttaa asiakaskokemukseen. Mikä seuraavista on totta?",
    "userAnswer": "Kuljettajan tulee pidättäytyä henkilökohtaisten näkemysten esittämisestä, ellei asiakas itse ota aihetta esiin tai toivo keskustelua aiheesta.",
    "correctAnswer": "Kuljettajan tulee pidättäytyä henkilökohtaisten näkemysten esittämisestä, ellei asiakas itse ota aihetta esiin tai toivo keskustelua aiheesta.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 31,
    "category": "Customer service"
  },
  {
    "id": 132,
    "question": "Olet ajovuorossa isossa invataksissa, jossa ei tällä hetkellä ole pyörätuoliasiakkaita. Olet käyttänyt pyörätuolin kiinnityshihnoja edellisessä kuljetuksessa ja olet säilyttänyt niitä nyt irrallaan lattialla istuimien alla. Mikä on oikea tapa käsitellä pyörätuolin kiinnitystarvikkeita tyhjien kuljetusten aikana ja miksi se on tärkeää?",
    "userAnswer": "Kiinnityshihnat tulee säilyttää ajon aikana turvallisesti kiinnitettyinä tai omassa säilytyspaikassaan, jotta ne eivät aiheuta vaaraa äkkijarrutustilanteessa.",
    "correctAnswer": "Kiinnityshihnat tulee säilyttää ajon aikana turvallisesti kiinnitettyinä tai omassa säilytyspaikassaan, jotta ne eivät aiheuta vaaraa äkkijarrutustilanteessa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 32,
    "category": "Accessibility"
  },
  {
    "id": 133,
    "question": "Kolme henkilöä hakee taksinkuljettajan ajolupaa, ja jokaisella on erilainen tausta. Tarkastele seuraavia tapauksia ja päättele, mikä väite ei pidä paikkaansa.",
    "userAnswer": "Mari on henkilöliikenneluvan haltija ja taksiyrittäjä. Hän ei tarvitse erillistä taksinkuljettajan ajolupaa ajaakseen itse taksia.",
    "correctAnswer": "Mari on henkilöliikenneluvan haltija ja taksiyrittäjä. Hän ei tarvitse erillistä taksinkuljettajan ajolupaa ajaakseen itse taksia.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 33,
    "category": "Licensing and law"
  },
  {
    "id": 134,
    "question": "Miten taksinkuljettajan tulee toimia auttaessaan pyörätuoliasiakasta siirtymisessä henkilöauton etuistuimelle?",
    "userAnswer": "Kuljettajan on toimittava asiakkaan ohjeiden mukaisesti ja avustettava siirtymisessä siten, että asiakas tuntee olonsa turvalliseksi ja arvostetuksi.",
    "correctAnswer": "Kuljettajan on toimittava asiakkaan ohjeiden mukaisesti ja avustettava siirtymisessä siten, että asiakas tuntee olonsa turvalliseksi ja arvostetuksi.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 34,
    "category": "Accessibility"
  },
  {
    "id": 135,
    "question": "Taksinkuljettajalla on perjantai-illan viimeinen kyyti menossa ja hän saapuu asiakkaan kanssa määränpäähän. Asiakas kieltäytyy tässä vaiheessa maksamasta. Miten toimit tilanteessa?",
    "userAnswer": "Soitan hätäkeskuksen kautta poliisit paikalle selvittämään asiaa.",
    "correctAnswer": "Soitan hätäkeskuksen kautta poliisit paikalle selvittämään asiaa.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 35,
    "category": "Emergency and first aid"
  },
  {
    "id": 136,
    "question": "Erimielisyyksien välttämiseksi taksikuljetuksissa on hyvä ymmärtää yleisimmät erimielisyyksien syyt. Mikä seuraavista on tyypillisin syy, jonka vuoksi asiakas on eri mieltä kuljettajan kanssa?",
    "userAnswer": "Matkan hinta on asiakkaan mielestä liian korkea.",
    "correctAnswer": "Matkan hinta on asiakkaan mielestä liian korkea.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 36,
    "category": "Payment and pricing"
  },
  {
    "id": 137,
    "question": "Millä seuraavista tavoista kannattaa mieluiten hälyttää apua paikalle onnettomuustilanteessa?",
    "userAnswer": "Soittamalla 112 Suomi -sovelluksen kautta, koska se välittää automaattisesti soittajan tarkan sijaintitiedon hätäkeskukselle",
    "correctAnswer": "Soittamalla 112 Suomi -sovelluksen kautta, koska se välittää automaattisesti soittajan tarkan sijaintitiedon hätäkeskukselle",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 37,
    "category": "Emergency and first aid"
  },
  {
    "id": 138,
    "question": "Miten taksiliikenteen hinnoittelun on lakisääteisesti toimittava asiakkaan näkökulmasta?",
    "userAnswer": "Asiakkaalle on ilmoitettava hinnat etukäteen selkeästi ennen matkan alkamista, ellei käytetä taksamittaria.",
    "correctAnswer": "Asiakkaalle on ilmoitettava hinnat etukäteen selkeästi ennen matkan alkamista, ellei käytetä taksamittaria.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 38,
    "category": "Payment and pricing"
  },
  {
    "id": 139,
    "question": "Kuinka pitkä on taksinkuljettajan pisin sallittu ajoaika ilman lepoa tai taukoja?",
    "userAnswer": "5,5 tuntia",
    "correctAnswer": "5,5 tuntia",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 39,
    "category": "Work time and equipment"
  },
  {
    "id": 140,
    "question": "Taksinkuljettaja Mira on aloittamassa uutta vuoroa. Ensimmäinen asiakas nousee autoon hiljaisena, eikä sano mitään. Mira miettii, miten asiakaskohtaaminen kannattaa aloittaa, kun hän haluaa antaa ammattimaisen ja ystävällisen ensivaikutelman. Mikä seuraavista on hyvä perussääntö tervehtimisessä?",
    "userAnswer": "Kuljettajan tulee esitellä itsensä nimeltä ennen kuin asiakas ehtii sanoa mitään.",
    "correctAnswer": "Kuljettaja tervehtii asiakasta ensimmäisenä kohteliaasti ja selkeästi.",
    "result": "Virheellinen",
    "source": "Mock Exam 3",
    "originalNumber": 40,
    "category": "Customer service"
  },
  {
    "id": 141,
    "question": "Taksin ratissa työskentelevän kuljettajan turvallisuus on ensisijaisen tärkeää. Mikä seuraavista tekijöistä lisää eniten riskiä vakavaan loukkaantumiseen liikenneonnettomuudessa?",
    "userAnswer": "Turvavyön pois jättäminen ajon aikana.",
    "correctAnswer": "Turvavyön pois jättäminen ajon aikana.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 41,
    "category": "Emergency and first aid"
  },
  {
    "id": 142,
    "question": "Mikä seuraavista kuuluu lakisääteisiin taksamittarin teknisiin vaatimuksiin Suomessa?",
    "userAnswer": "Mittarin on oltava helppo lukea, jotta kuljettaja ja matkustaja voivat seurata hinnanmuutoksia.",
    "correctAnswer": "Mittarin on oltava helppo lukea, jotta kuljettaja ja matkustaja voivat seurata hinnanmuutoksia.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 42,
    "category": "Payment and pricing"
  },
  {
    "id": 143,
    "question": "Ennen taksinkuljettajan ajoluvan myöntämistä on varmistettava, että hakijalla on riittävästi kokemusta henkilöauton kuljettamisesta. Kuinka kauan hakijan on pitänyt omistaa B-luokan ajo-oikeus ennen taksinkuljettajan ajolupahakemuksen käsittelyä?",
    "userAnswer": "Vähintään yhden vuoden verran.",
    "correctAnswer": "Vähintään yhden vuoden verran.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 43,
    "category": "Licensing and law"
  },
  {
    "id": 144,
    "question": "Miksi ajoneuvon siisteys on tärkeä osa asiakkaan kohtaamista taksiliikenteessä?",
    "userAnswer": "Koska siisti auto edistää asiakkaan viihtyisyyttä, luottamusta ja turvallisuuden tunnetta koko matkan ajan.",
    "correctAnswer": "Koska siisti auto edistää asiakkaan viihtyisyyttä, luottamusta ja turvallisuuden tunnetta koko matkan ajan.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 44,
    "category": "Customer service"
  },
  {
    "id": 145,
    "question": "Mikä/kuka seuraavista on vastuussa taksissa tapahtuvan asiakaspalvelun laadusta?",
    "userAnswer": "Taksinkuljettaja, koska hänen täytyy täyttää hyvän asiakaspalvelun vaatimukset.",
    "correctAnswer": "Taksinkuljettaja, koska hänen täytyy täyttää hyvän asiakaspalvelun vaatimukset.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 45,
    "category": "Customer service"
  },
  {
    "id": 146,
    "question": "22-vuotiasta liikuntavammaista asiakasta haettaessa huomaat hänellä olevan mukanaan avustaja. Miten toimit tilanteessa?",
    "userAnswer": "Kysyt asiakkaalta, miten voit auttaa, ja varmistat, että myös avustaja mahtuu turvallisesti kyytiin.",
    "correctAnswer": "Kysyt asiakkaalta, miten voit auttaa, ja varmistat, että myös avustaja mahtuu turvallisesti kyytiin.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 46,
    "category": "Customer service"
  },
  {
    "id": 147,
    "question": "Leena on saanut aamuksi koulukuljetustehtävän. Hän lähtee hakemaan alakoululaisia haja-asutusalueelta. Aamulla tallilla hän näkee auton takakontissa koulukyytikuvun ja pohtii, pitäisikö se asentaa jo valmiiksi, vaikka ensimmäinen pysäkki on vasta kymmenien kilometrien päässä. Päivällä Leena ajaa myös muita asiakkaita. Miten taksi tulee merkitä tässä tilanteessa?",
    "userAnswer": "Kuljetuksessa käytettävä merkintä, kuten koulukyytikupu tai -kyltti, on asetettava näkyviin vain koulukuljetuksen aikana ja poistettava heti kuljetuksen päätyttyä.",
    "correctAnswer": "Kuljetuksessa käytettävä merkintä, kuten koulukyytikupu tai -kyltti, on asetettava näkyviin vain koulukuljetuksen aikana ja poistettava heti kuljetuksen päätyttyä.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 47,
    "category": "Children and school transport"
  },
  {
    "id": 148,
    "question": "Miten toimit, jos asiakkaasi kertoo haluavansa matkustaa hiljaisuudessa?",
    "userAnswer": "Kunnioitan asiakkaan toivetta ja keskustelen vain, jos se liittyy matkareittiin tai turvallisuuteen.",
    "correctAnswer": "Kunnioitan asiakkaan toivetta ja keskustelen vain, jos se liittyy matkareittiin tai turvallisuuteen.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 48,
    "category": "Customer service"
  },
  {
    "id": 149,
    "question": "Onko kuljettajan siistillä yleisilmeellä merkitystä asiakaskohtaamisten aikana?",
    "userAnswer": "Kyllä, siisti olemus ja asianmukainen pukeutuminen luovat paremman asiakaspalvelukokemuksen.",
    "correctAnswer": "Kyllä, siisti olemus ja asianmukainen pukeutuminen luovat paremman asiakaspalvelukokemuksen.",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 49,
    "category": "Customer service"
  },
  {
    "id": 150,
    "question": "Voitko pysäköidä taksikuvuttoman, mutta taksiliikenteessä olevan ajoneuvon kyseisen liikennemerkin vaikutusalueelle?",
    "userAnswer": "En voi",
    "correctAnswer": "En voi",
    "result": "Oikein",
    "source": "Mock Exam 3",
    "originalNumber": 50,
    "category": "Traffic rules"
  }
];
