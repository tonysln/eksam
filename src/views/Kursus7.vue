<template>
  <div class="grid--content">
    <h2 class="content-title">VII. Funktsioonid. Arvjadad</h2>
    <hr class="thinhr" />
    <h3 id="subm1">Funktsiooni mõiste ja üldtähis</h3>
    <p>
      Funktsioon määrab viisi, millel on sõltuv muutuja seotud sõltumatu
      muutujaga ning iga sõltumatu väärtusele vastab ainult üks sõltuva muutuja
      väärtus.
    </p>
    <p>$$ y = f(x) $$</p>
    <!-- <h3 id='subm2'>Funktsiooni esitusviisid</h3> -->
    <h3 id="subm3">Funktsiooni määramis- ja muutumispiirkond</h3>
    <p>
      Kõik muutuja \(x\) väärtused, mille korral on võimalik funktsiooni
      väärtust arvutada nimetatakse määramispiirkonnaks. Tähis on \(X\).
    </p>
    <p>
      Muutumispiirkonda \(Y\) moodustavad kõik \(y\) väärtused, mis vastavad
      muutuja \(x\) väärtustele funktsiooni muutumispiirkonnast.
    </p>
    <p>$$ X = (-\infty;\infty) = R$$</p>
    <h3 id="subm4">Paaris- ja paaritu funktsioon</h3>
    <p>
      Paarisfunktsiooni puhul kehtib seos: \(\displaystyle f(-x) = f(x)\) ning
      funktsiooni graafik on alati sümmeetriline
      <strong> y-telje</strong> suhtes.
    </p>
    <p>
      Paaritu funktsiooni puhul kehtib seos: \(\displaystyle f(-x) = -f(x)\)
      ning funktsiooni graafik on alati sümmeetriline
      <strong>koordinaatide alguspunkti </strong> suhtes.
    </p>
    <p>Kõik ülejäänud funktsioonid ei ole paaris ega paaritu funktsioonid.</p>
    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p>Antud funktsioon \(\displaystyle y = f(x) = x^2 -4\).</p>
      <p>Leiame väärtuse kohal \(\displaystyle -x\).</p>
      <p>$$ f(-x) = (-x)^2 -4 = x^2 -4 = f(x) $$</p>
      <p>Antud funktsioon on paarisfunktsioon.</p>
    </div>
    <h3 id="subm5">
      Funktsiooni nullkohad, positiivsus- ja negatiivsuspiirkond
    </h3>
    <p>
      <strong>Nullkohtades</strong> lõikub funktsiooni graafik x-teljega.
      Nullkohtade leidmiseks tuleb lahendada võrrand \(\displaystyle f(x)=0\).
    </p>
    <p>
      <strong>Positiivsuspiirkonnas</strong> \(\displaystyle X^+\) asub
      funktsiooni graafiku osa, mis on x-teljest ülalpool. Selle leidmiseks
      tuleb lahendada võrrand \(\displaystyle f(x) \gt 0\).
    </p>
    <p>
      <strong>Negatiivsuspiirkonnas</strong> \(\displaystyle X^-\) asub
      funktsiooni graafiku osa, mis on x-teljest allpool. Selle leidmiseks tuleb
      lahendada võrrand \(\displaystyle f(x) \lt 0\).
    </p>
    <h3 id="subm6">Funktsiooni kasvamine ja kahanemine</h3>
    <p>$$ y' \gt 0 $$</p>
    <p>$$ y' \lt 0 $$</p>
    <h3 id="subm7">Funktsiooni ekstreemum</h3>
    <p>$$ y' = 0 $$</p>
    <h3 id="subm8">Astmefunktsioon</h3>
    <p>$$ y = x^n $$</p>
    <h3 id="subm9">Funktsioonide ... graafikud ja omadused</h3>
    <p>y = x, y = x2, y = x3, y = x – 1, y = , y= , y = x – 2, y = |x|</p>
    <p>
      Funktsioonide y = f (x), y = f (x) + a, y = f (x + a), y = f (ax), y = a f
      (x) graafikud arvutil.
    </p>
    <!-- <h3 id='subm10'>Arvjada mõiste, jada üldliige, jadade liigid</h3> -->
    <h3 id="subm11">Aritmeetiline jada, selle omadused</h3>
    <p>
      Aritmeetilises arvjadas iga liikme <strong>vahe</strong> on jääv (jada
      vahe - \(d\)) ehk iga jada liige erineb eelmisest sama arvu võrra.
    </p>
    <h3 id="subm12">
      Aritmeetilise jada üldliikme valem ning esimese n liikme summa valem
    </h3>
    <p>
      Üldliikme valem on \(\displaystyle a_n = a_1 + (n-1)d\). <br />
      Alternatiivselt \(\displaystyle a_n = a_{n-1}+d\).
    </p>
    <p>Jada \(n\) liikme summa arvutatakse järgmiselt:</p>
    <p>
      $$ S_n = \frac{2a_1 + (n-1)d}{2} \cdot n \ \text{ ehk } \ S_n = \frac{a_1
      + a_n}{2} \cdot n $$
    </p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
    </div>

    <h3 id="subm13">Geomeetriline jada, selle omadused</h3>
    <p>
      Geomeetrilises arvjadas iga liikme <strong>jagatis</strong> on jääv (jada
      tegur - \(q\)).
    </p>
    <h3 id="subm14">
      Geomeetrilise jada üldliikme valem ning esimese n liikme summa valem
    </h3>
    <p>
      Üldliikme valem on \(\displaystyle a_n = a_1 \cdot q^{n-1}\). <br />
      Alternatiivselt \(\displaystyle a_n = a_{n-1}+d\).
    </p>
    <p>Summa arvutamiseks:</p>
    <p>$$ S_n = \frac{a_1(q^n-1)}{q-1}$$</p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
    </div>

    <h3 id="subm15">Hääbuv geomeetriline jada, selle summa</h3>
    <p>
      Kui jada tegur on negatiive ehk \(|q| \lt 1\), tegemist on
      <strong>hääbuva</strong>
      geomeetrilise jadaga.
    </p>
    <p>Liikmete summa</p>
    <p>$$ S = \frac{a_1}{1-q} $$</p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
    </div>

    <h3 id="subm16">Arvjada piirväärtus. Piirväärtuse arvutamine</h3>
    <p>\(\lim\)</p>
    <h3 id="subm17">Arv e piirväärtusena</h3>
    <h3 id="subm18">Ringjoone pikkus ja ringi pindala piirväärtusena, arv π</h3>
    <h3 id="subm19">Rakendusülesanded</h3>
  </div>
</template>
