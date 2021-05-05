<template>
  <div class="grid--content">
    <h2 class="content-title">V. Vektor tasandil. Joone võrrand</h2>
    <hr class="thinhr" />
    <h3 id="subm1">Vektori mõiste ja tähistamine</h3>
    <p>
      Vektor on <strong>suunatud lõik</strong> ning tähistamiseks kasutatakse
      selle otspunkte, näiteks \( \overrightarrow{AB} \) või lühedamalt
      \(\displaystyle \vec{a}\). Vektori alguspunkt kirjutatakse alati esimesena
      ja lõpp-punkt teisena. Peale suuna on vektoril ka siht, mis on määratud
      sirgega.
    </p>
    <h3 id="subm3">Vektorite võrdsus ja kollineaarsus</h3>
    <p>
      Vektorid on võrdsed, kui neil on üks ja sama suund, siht ja võrdne pikkus.
      Kui vektorid on võrdsed, siis on ka võrdsed nende vastavad koordinaadid.
    </p>
    <p>
      <strong>Kollineaarsed</strong> vektorid on samasihilised, ehk
      paralleelsed. Samasihilised vektorid võivad olla samasuunalised ja
      vastassuunalised. Tähistamiseks kasutatakse \(\vec{a} \uparrow \uparrow
      \vec{b}\) ja \(\vec{a} \uparrow \downarrow \vec{b}\).
    </p>
    <p>Kollineaarsete vektorite puhul kehtib seos</p>
    <p>$$ \frac{x_2}{x_1} = \frac{y_2}{y_1} $$</p>
    <h3 id="subm4">Vektori koordinaadid ja pikkus</h3>
    <p>
      Kui liikuda punktist \(A\) punkti \(B\) vektori \( \overrightarrow{AB} \)
      suunas, siis saame arvutada punkti \(B\) koordinaadid lisades punkti \(A\)
      koordinaatidele nende muudud x-teljel ja y-teljel.
    </p>
    <p>$$ \overrightarrow{AB} = (x_2 - x_1;\ y_2 - y_1) $$</p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p></p>
    </div>

    <p>
      Vektori pikkuse leidmiseks saab kasutada Pythagorase teoreemi. Vektori
      pikkust tähistatakse samuti nagu absoluutväärtust \(\displaystyle |AB|\).
    </p>

    <p>$$ |AB| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$</p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p></p>
    </div>

    <h3 id="subm2">Nullvektor, ühikvektor, vastandvektor</h3>
    <p>
      <strong>Nullvektor</strong> on vektor pikkusega 0. Nullvektoril puudub
      siht ja suund, kuid võib öelda, et nullvektoril on mis tahes suund.
    </p>
    <p><strong>Ühikvektori</strong> pikkus on 1.</p>
    <p>
      Vektori <strong>vastandvektor</strong> omab sama sihta ja pikkust, kuid
      selle suund on erinev. Vektori \(\vec{a}\) vastandvektori tähistamiseks
      kasutatakse \(-\vec{a}\).
    </p>
    <h3 id="subm6">Vektorite liitmine ja lahutamine</h3>
    <p>
      Kahe vektori summa leidmiseks kasutatakse
      <strong>kolmnurgareeglit.</strong>
    </p>
    <p>Hulknurgareegel...</p>
    <p>Rööpküülikureegel...</p>
    <p>
      Selleks, et lahutada üks vektor teisest, tuleb esimesele liita teise
      vektori vastandvektor.
    </p>
    <p>$$ \vec{u} - \vec{v} = \vec{u} + (-\vec{v}) $$</p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p></p>
    </div>

    <h3 id="subm7">Vektori korrutamine arvuga</h3>
    <p>
      Kui korrutada vektor \(\vec{u}\) positiivse arvuga \(k\), siis saame \(k\)
      korda pikkema vektori, mille siht ja suund on samad, kui vektoril
      \(\vec{u}\).
    </p>
    <p>$$ k \cdot \vec{a} = (k\cdot x_1;\ k\cdot y_1) $$</p>
    <h3 id="subm8">Lõigu keskpunkti koordinaadid</h3>
    <p>$$ M = \left( \frac{x_1 + x_2}{2} ;\ \frac{y_1 + y_2}{2} \right) $$</p>
    <h3 id="subm9">Kahe vektori vaheline nurk</h3>
    <p>
      $$ \cos{\alpha} = \frac{\vec a \cdot \vec b }{|\vec a| \cdot |\vec b|} $$
    </p>
    <h3 id="subm11">
      Kahe vektori skalaarkorrutis, selle rakendusi, vektorite ristseis
    </h3>
    <p>\( \vec a \cdot \vec b = x_1 \cdot x_2 + y_1 \cdot y_2 \)</p>
    <p>
      \(\displaystyle \vec{a} \perp \vec{b} \), kui \(\vec{a} \cdot \vec{b} =
      0\).
    </p>
    <h3 id="subm12">Kolmnurkade lahendamine vektorite abil</h3>
    <h3 id="subm13">Sirge võrrand ja üldvõrrand</h3>
    <h3 id="subm14">Kahe sirge vastastikused asendid tasandil</h3>
    <h3 id="subm15">Nurk kahe sirge vahel</h3>
    <h3 id="subm16">Ringjoone võrrand</h3>
    <h3 id="subm17">Parabool ja hüperbool</h3>
    <h3 id="subm18">Joone võrrandi mõiste</h3>
    <h3 id="subm19">Kahe joone lõikepunkt</h3>
  </div>
</template>
