---
title: Jak działa HTTPS - na przykładzie gołębi pocztowych
description: Najbardziej obrazowe wytłumaczenie protokołu HTTPS, jak tylko się da.
date: 2023-01-04
forceShow: true
translation: true
language: pl
original:
  title: HTTPS explained with carrier pigeons
  url: https://baida.dev/articles/https-explained-with-carrier-pigeons
  author:
    name: Andrea Zanin
tags:
  - internet
  - translation
  - polish
---

Kryptografia to trudna dziedzina. Roi się w niej od dowodów matematycznych. Ale jeżeli nie zajmujesz się tworzeniem systemów kryptograficznych, to nie potrzebujesz znać wszystkich wewnętrznych zawiłości do wysokopoziomego zrozumienia ich działania.

Jeżeli czytasz ten artykuł z nadzieją, że zbudujesz następcę protokołu HTTPS, to mam dla Ciebie złą wiadomość: gołębie pocztowe mogą nie wystarczyć. A jeżeli nie - nastaw sobie kawę i czytaj dalej.

## Alicja, Robert i... gołębie?

Każda Twoja aktywność w internecie (lektura tego artykułu, zakup na Allegro, wrzucenie zdjęcia śniadania na Instagrama) polega w istocie na wysyłaniu i odbieraniu wiadomości do i z serwera.

Może to brzmieć nieco abstrakcyjnie, więc wyobraźmy sobie, że te wiadomości są dostarczane przez **gołębie pocztowe**. Tak, wiem, że to trudne do wyobrażenia, ale zaufaj mi - HTTPS dokładnie tak działa, tylko o wiele szybciej.

Ponadto, zamiast rozmawiać o serwerach, klientach i hakerach, bohaterami naszej historyjki będą Alicja, Robert i Łukasz. Jeżeli nie jest to Twój pierwszy raz z kryptografią, to dwa z tych imion powinny brzmieć znajomo - są one często stosowane w literaturze fachowej.

## Pierwsza naiwna próba komunikacji

Alicja postanawia wysłać wiadomość do Roberta. W tym celu przywiązuje karteczkę z jej treścią do nóżki gołębia pocztowego i wysyła go do Roberta. Robert odbiera wiadomość i odczytuje ją. Wszystko gra.

Ale co się stanie, jeśli Łukasz przechwyci gołębia Alicji i podmieni wiadomość? Robert nie dowie się, że wiadomość wysłana przez Alicję została po drodze zmodyfikowana.

Tak właśnie działa **HTTP**. Przerażające, co? Nie wiem, jak Ty, ale ja nie odważyłbym się wysłać mojego hasła do banku przez HTTP.

## Tajny szyfr

A teraz wyobraźmy sobie, że Alicja i Robert są przebiegli. Umówili się, że od teraz będą pisać do siebie z użyciem tajnego szyfru. Każdą literę wiadomości będą przesuwać o 3 miejsca do tyłu w polskim alfabecie. Na przykład: D → A, E → B, L → I. W ten sposób zwrot "tajna wiadomość" zapisany zwykłym tekstem zamieni się w "wcłóc zlcfqoqvę".

Teraz, gdy Łukaszowi uda się złapać gołębia, nie da rady zamienić wiadomości na cokolwiek sensownego ani zrozumieć jej treści, ponieważ nie zna szyfru. Z kolei Robert może z powodzeniem użyć kodowania w odwrotną stronę i odczytać wiadomość, w której A → D, B → E, I → L. I tak zakodowany tekst "wcłóc zlcfqoqvę" zamieni się z powrotem w "tajna wiadomość".

Udało się!

Nazywa się to **kryptografią symetryczną** - jeżeli umiesz zaszyfrować wiadomość, to umiesz także ją odszyfrować.

Szyfr opisany powyżej jest powszechnie znany jako **szyfr Cezara**. W prawdziwym życiu używamy bardziej wyrafinowanych technik, ale ogólna idea pozostaje taka sama.

## Jak przekazać klucz?

Kryptografia symetryczna jest bezpieczna, jeżeli nikt poza nadawcą i odbiorcą nie wie, jaki klucz został użyty. W szyfrowaniu Cezara **kluczem jest liczba liter, o jaką przesuwą się każdą literę wiadomości**. W naszym przykładzie było to 3, ale moglibyśmy też użyć 4 albo 12.

Ale problem w tym, że jeśli Alicja i Robert nie spotkają się ze sobą przed wysyłaniem do siebie wiadomości gołębiami pocztowymi, to nie mają możliwości bezpiecznego ustalenia klucza. Jeśli wyślą go w treści wiadomości, Łukasz bez trudu przechwyci tę wiadomość i pozna klucz - w efekcie czego będzie mógł odczytywać i dowolnie modyfikować wiadomości bez wiedzy Alicji i Roberta.

Jest to typowy przykład **ataku "man in the middle"** ("człowiek pośrodku") i jedynym sposobem na jego uniknięcie jest zmiana całego systemu szyfrowania.

## Gołębie przenoszące pudełka

Alicja i Robert wymyślili zatem coś jeszcze lepszego. Gdy Robert zechce wysłać Alicji wiadomość, oboje zastosują następującą procedurę:

- Robert wyśle Alicji gołębia na pusto, bez żadnej wiadomości.

- Alicja odeśle tego gołębia wraz z pudełkiem z otwartą kłódką, ale zatrzyma klucz do kłódki dla siebie.

- Robert umieści wiadomość w pudełku, zatrzaśnie kłódkę i odeśle je do Alicji.

- Alicja odbierze pudełko, otworzy kłódkę kluczem i odczyta wiadomość.

W ten sposób Łukasz nie da rady zmienić wiadomości po schwytaniu gołębia, ponieważ nie posiada klucza. A jeśli Alicja postanowi wysłać wiadomość do Roberta, użyje takiej samej procedury.

Alicja i Robert właśnie wykorzystali koncept powszechnie znany jako **kryptografia asymetryczna**. Nazywamy ją asymetryczną, ponieważ nawet jeśli umiesz zaszyfrować wiadomość (czyli zamknąć ją w pudełku na kłódkę), to i tak nie jesteś w stanie jej odszyfrować (tzn. pudełko po zamknięciu nie da się już otworzyć). W żargonie technicznym pudełko jest nazywane **kluczem publicznym**, zaś klucz do jego otwarcia to **klucz prywatny**.

## Jak zaufać pudełku?

Jeżeli czytasz uważnie, być może zauważysz jeszcze jeden problem. Gdy Robert odbiera otwarte pudełko, skąd może mieć pewność, że ono na pewno pochodzi od Alicji, a Łukasz nie złapał gołębia i nie zabrał pudełka, do którego Alicja ma klucz?

Alicja postanawia podpisać pudełko. W ten sposób, gdy tylko Robert je dostanie, sprawdzi podpis i będzie wiedział, że to na pewno pudełko od Alicji.

Niektórzy z Was mogliby się tutaj zacząć zastanawiać - a skąd Robert będzie wiedział, jak wygląda podpis Alicji? Dobre pytanie. Alicja i Robert też się nad tym głowili i wymyślili rozwiązanie. Pudełko podpisze - zamiast Alicji - Kuba.

A kim jest Kuba? Kuba to człowiek bardzo sławny, powszechnie znany i godny zaufania. Kuba wręczył kopie swojego podpisu każdemu i wszyscy ufają, że będzie on podpisywał pudełka tylko ludziom, których tożsamość zna.

Kuba podpisze pudełko Alicji tylko wtedy, gdy będzie miał pewność, że to faktycznie Alicja poprosiła o podpis. Łukasz nie może zatem przechwycić pudełka Alicji, które wcześniej w jej imieniu podpisał Kuba - Robert zauważy, że to pudełko jest oszukane. Wszak Kuba zawsze prosi o pokazanie dowódu osobistego przed podpisaniem pudełka.

W technicznym żargonie Kuba pełni rolę **urzędu certyfikacji**. Przeglądarka, w której właśnie czytasz ten artykuł, zawiera podpisy różnych urzędów certyfikacji.

A zatem, gdy otwierasz stronę internetową po raz pierwszy, masz zaufanie do pudełka, ponieważ ufasz Kubie. Kuba natomiast potwierdza swoim autorytetem, że pudełko jest oryginalne.

## Pudełka są ciężkie

Alicja i Robert cieszą się teraz niezawodnym systemem komunikacji. Zauważyli jednak, że gołębie przenoszące pudełka latają wolniej od tych, które przenoszą same karteczki z wiadomościami.

Postanawili zatem, że będą używać metody z pudełkami (kryptografii asymetrycznej) tylko po to, żeby wybrać klucz do zaszyfrowania (pamiętasz szyfr Cezara?).

W ten sposób mają to, co najlepsze z obu światów: niezawodność kryptografii asymetrycznej i wydajność kryptografii symetrycznej.

W prawdziwym świecie nie ma czegoś takiego jak powolne gołębie. Jednak prawdą jest, że szyfrowanie wiadomości za pomocą kryptografii asymetrycznej trwa dłużej. Dlatego używamy jej tylko do wymiany kluczy do szyfrowania.

Teraz już wiesz jak działa **HTTPS**. I Twoja kawa też powinna już być gotowa. Śmiało napij się, zasługujesz. ;)
