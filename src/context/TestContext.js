import { useContext, createContext, useState } from "react";

const TestContext = createContext()

const TestProvider = ({children}) => {
    const mathTest = [
        {
            question: "Cebinde 11 TL'si olan Aslı 7.5 TL ekmeğe verirse kaç TL'si kalır?",
            a: "4 TL",
            b: "3.5 TL",
            c: "5 TL",
            d: "4.5 TL",
            correct: "b",
            answer: ""
        },
        {
            question: "Dolapta 13 yumurta vardı. 5 tanesi kahvaltıda yenildi sonra 24 yeni yumurta alındı. Dolapta kaç yumurta var?",
            a: "33",
            b: "29",
            c: "32",
            d: "22",
            correct: "c",
            answer: ""
        },
        {
            question: "15 tane okunacak kitabı olan Betül 6 tanesini okumuş ve 4 yeni kitap almış. Kaç tane okunacak kitabı var?",
            a: "12",
            b: "10",
            c: "11",
            d: "13",
            correct: "d",
            answer: ""
        },
        {
            question: "İçinde 27 yolcunun olduğu otobüsten 1. durakta 5 yolcu inmiş, 2. durakta 9 yolcu inmiş 5 yolcu binmiş. Kaç yolcu var?",
            a: "18",
            b: "19",
            c: "21",
            d: "22",
            correct: "a",
            answer: ""
        },
        {
            question: "120 TL parası olan Ayşe 240 TL harçlık alırsa kaç TL'si olur?",
            a: "350 TL",
            b: "380 TL",
            c: "340 TL",
            d: "360 TL",
            correct: "d",
            answer: ""
        },
        {
            question: "Kalemliğinde 14 kalemi olan Esra 3 kalemini arkadaşına vermiş ve 2 kalemi kırılmış. Kaç kalem kaldı?",
            a: "11",
            b: "9",
            c: "10",
            d: "8",
            correct: "b",
            answer: ""
        },
        {
            question: "Sabah 2 saat öğlen 1 buçuk saat akşam 2 saat kitap okuyan Furkan toplam kaç saat kitap okumuş olur?",
            a: "4.5 saat",
            b: "5 saat",
            c: "5.5 saat",
            d: "6.5 saat",
            correct: "c",
            answer: ""
        },
        {
            question: "13. kattaki asansör önce 7 kat aşağı sonra 5 kat yukarı sonra yine 4 kat aşağı inerse kaçıncı katta olur?",
            a: "7. kat",
            b: "8. kat",
            c: "6. kat",
            d: "5. kat",
            correct: "a",
            answer: ""
        },
        {
            question: "29 TL parası olan Alper 13 TL'ye dondurma 11TL'ye çikolata almış. Alperin ne kadar parası kalır?",
            a: "6 TL",
            b: "10 TL",
            c: "5 TL",
            d: "9 TL",
            correct: "c",
            answer: ""
        },
        {
            question: "24 tane ekmek olan fırında sırasıyla 4, 6, 3 ekmek satılmış. Fırında kaç ekmek kalır?",
            a: "9",
            b: "14",
            c: "13",
            d: "11",
            correct: "d",
            answer: ""
        }
    ]

    const fleabagTest = [
        {
            question: "Fleabag'in ölen arkadaşının ismi nedir?",
            a: "Lisa",
            b: "Helen",
            c: "Boo",
            d: "Stine",
            correct: "c",
            answer: ""
        },
        {
            question: "Fleabag'in kafesinin teması neydi?",
            a: "Kedi",
            b: "Gine Domuzu",
            c: "Tavşan",
            d: "Kuş",
            correct: "b",
            answer: ""
        },
        {
            question: "Fleabag'in üvey annesinden çaldığı şey neydi?",
            a: "Heykel",
            b: "Vazo",
            c: "Tablo",
            d: "Takı",
            correct: "a",
            answer: ""
        },
        {
            question: "Fleabag'in kardeşi iş için nereye gidecekti?",
            a: "Avusturya",
            b: "Rusya",
            c: "Finlandiya",
            d: "İzlanda",
            correct: "c",
            answer: ""
        },
        {
            question: "Fleabag ile Priest ilk nerede öpüştü?",
            a: "Ev",
            b: "Öpüşmedi",
            c: "Sokak",
            d: "Kilise",
            correct: "d",
            answer: ""
        },
        {
            question: "Fleabag'in eski sevgilisinin evden ayrılırken her seferinde unuttuğu eşyası neydi?",
            a: "Tişört",
            b: "Ayıcık",
            c: "Dinozor",
            d: "Kalemlik",
            correct: "c",
            answer: ""
        },
        {
            question: "Fleabag ile Priest ilk nerede karşılaştı?",
            a: "Kafe",
            b: "Kilise",
            c: "Banka",
            d: "Aile Yemeği",
            correct: "d",
            answer: ""
        },
        {
            question: "Fleabag ilk bölümde hangi amaçla bankaya gidiyordu?",
            a: "Kafesi için kredi almak",
            b: "Ev için kredi almak",
            c: "Borç ödemek için",
            d: "Hesap açmak için",
            correct: "a",
            answer: ""
        },
        {
            question: "Fleabag'in ilk bölümü ne zaman yayınlandı?",
            a: "2014",
            b: "2015",
            c: "2016",
            d: "2017",
            correct: "c",
            answer: ""
        },
        {
            question: "Fleabag'in eski sevgilisinin adı neydi?",
            a: "Sam",
            b: "Harry",
            c: "James",
            d: "Michael",
            correct: "b",
            answer: ""
        }
    ]

    const bbTest = [
        {
            question: "Dizinin ilk bölümünde Walter White'a ne kanseri teşhisi konuldu?",
            a: "Beyin kanseri",
            b: "Mide kanseri",
            c: "Akciğer kanseri",
            d: "Kan Kanseri",
            correct: "c",
            answer: ""
        },
        {
            question: "Walter White Jr.'ın gerçek ismi nedir?",
            a: "Walter",
            b: "Louis",
            c: "Todd",
            d: "Flynn",
            correct: "d",
            answer: ""
        },
        {
            question: "Walter White, Grey Matter Technologies'deki hisselerini kaç paraya sattı?",
            a: "5 bin dolar",
            b: "10 bin dolar",
            c: "12 bin dolar",
            d: "15 bin dolar",
            correct: "a",
            answer: ""
        },
        {
            question: "Gale'i kim öldürdü?",
            a: "Jesse Pinkman",
            b: "Walter white",
            c: "Gus Fring",
            d: "Mike Ehrmantraut",
            correct: "a",
            answer: ""
        },
        {
            question: "Skyler ve Walter'ın kız bebeklerinin adı nedir?",
            a: "Grace",
            b: "Gloria",
            c: "Pam",
            d: "Holly",
            correct: "d",
            answer: ""
        },
        {
            question: "Dizinin logosunda yer alan ve açılış introsunda öne çıkan iki kimyasal element nedir?",
            a: "Erbiyum & Tulyum",
            b: "Bromine & Barium",
            c: "Fermiyum & Nobelyum",
            d: "Osmiyum & Iridyum",
            correct: "b",
            answer: ""
        },
        {
            question: "Walter White'ın ilk bölümlerde çalıştığı ve daha sonrasında satın aldığı araba yıkamacısının adı neydi?",
            a: "Speed Car Wash",
            b: "A1A Car Wash",
            c: "Blue Sky Auto Wash",
            d: "Crystal Clear Car Wash",
            correct: "b",
            answer: ""
        },
        {
            question: "Jesse'nin ilk bölümlerde cesedini küvette asitle yok etmeye çalıştığı kişi kimdi?",
            a: "Tuco Salamanca",
            b: "Krazy 8",
            c: "Hector Salamanca",
            d: "Emilio",
            correct: "d",
            answer: ""
        },
        {
            question: "Jesse Pinkman'ın sevgilisi Jane nasıl ölmüştür?",
            a: "Trafik kazası",
            b: "Silahlı saldırı",
            c: "Uykusunda boğularak",
            d: "Hastaydı, o yüzden",
            correct: "c",
            answer: ""
        },
        {
            question: "Walter’ın evinin çatısına fırlattığı yiyecek hangisiydi?",
            a: "Hamburger",
            b: "Pizza",
            c: "Lazanya",
            d: "Tavuk",
            correct: "b",
            answer: ""
        }
    ]

    const englishTest = [
        {
            question: "Red hangi renktir?",
            a: "Kırmızı",
            b: "Mavi",
            c: "Yeşil",
            d: "Sarı",
            correct: "a",
            answer: ""
        },
        {
            question: "Car ne demek?",
            a: "Ev",
            b: "Araba",
            c: "Kamyon",
            d: "Kalem",
            correct: "b",
            answer: ""
        },
        {
            question: "Day ne demek?",
            a: "Saat",
            b: "Gün",
            c: "Ay",
            d: "Yıl",
            correct: "b",
            answer: ""
        },
        {
            question: "Ten - Seven - Six - Three - Nine, sırasıyla hangi sayıları temsil eder?",
            a: "10-7-6-3-9",
            b: "1-2-3-4-5",
            c: "10-7-6-4-9",
            d: "5-8-3-7-6",
            correct: "a",
            answer: ""
        },
        {
            question: "Cow hangi hayvandır?",
            a: "Kedi",
            b: "Tavşan",
            c: "Kuş",
            d: "İnek",
            correct: "d",
            answer: ""
        },
        {
            question: "Cat hangi hayvandır?",
            a: "Tavşan",
            b: "Kedi",
            c: "Koyun",
            d: "Kuş",
            correct: "b",
            answer: ""
        },
        {
            question: "Yellow hangi renktir?",
            a: "Sarı",
            b: "Pembe",
            c: "Mor",
            d: "Gri",
            correct: "a",
            answer: ""
        },
        {
            question: "Apple hangi meyvedir?",
            a: "Erik",
            b: "Karpuz",
            c: "Elma",
            d: "Şeftali",
            correct: "c",
            answer: ""
        },
        {
            question: "Sea kelime anlamı nedir?",
            a: "Toprak",
            b: "Göl",
            c: "Okyanus",
            d: "Deniz",
            correct: "d",
            answer: ""
        },
        {
            question: "Potato hangi sebzedir?",
            a: "Soğan",
            b: "Salatalık",
            c: "Havuç",
            d: "Patates",
            correct: "d",
            answer: ""
        }
    ]
    
    const mathQuiz = {photos: "../../img/math.png", title: "Math Quiz", numOfQuestion: mathTest.length, difficultyLevel: "2/5", test: mathTest}
    const fleabagQuiz = {photos: "../img/fleabag.jpg", title: "Fleabag Quiz", numOfQuestion: fleabagTest.length, difficultyLevel: "3/5", test: fleabagTest}
    const englishQuiz = {photos: "../img/english.jpeg", title: "English Quiz", numOfQuestion: englishTest.length, difficultyLevel: "4/5", test: englishTest}
    const bbQuiz = {photos: "../img/bb.jpeg", title: "Breaking Bad Quiz", numOfQuestion: bbTest.length, difficultyLevel: "4/5", test: bbTest}

    const [tests, setTests] = useState([mathQuiz, fleabagQuiz, englishQuiz, bbQuiz])

    const values = {tests, setTests}

    return <TestContext.Provider value={values}>{children}</TestContext.Provider>
}

const useTest = () => useContext(TestContext)

export {TestProvider, useTest}