<template>
  <div class="grid--content">
    <h2 class="content-title">II. Võrrandid ja võrrandisüsteemid</h2>
    <hr class="thinhr" />
    <h3 id="subm1">Võrdus, võrrand</h3>
    <p>
      Tõene ehk <strong>samane</strong> arvvõrdus on tõene muutujate kõikide
      väärtuste korral.
    </p>
    <p>
      <strong>Võrrand</strong> on muutujaid sisaldav võrdus, mille üks või mitu
      muutujat on tundmatud. Leitud muutuja väärtusi nimetatakse lahenditeks ja
      nende hulka lahendihulgaks.
    </p>
    <h3 id="subm2">Võrrandite samaväärsus</h3>
    <p>
      Kaks võrrandit on <strong>samaväärsed</strong>, kui nende lahendid on
      ühised või puuduvad. Samaväärsuse märkimiseks kasutatakse sümbolit \(
      \Leftrightarrow\).
    </p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p>$$ (x-1)(2 x+1)=0\ \Leftrightarrow \ 2 x^{2}-x-1=0 $$</p>
      <p>
        Antud võrrandid on samaväärsed, kuna neil on võrdsed lahendid \(x_1 =
        -0.5, \ x_2 = 1\).
      </p>
    </div>

    <h3 id="subm3">Lineaar-, ruut-, murd- ja juurvõrrandid</h3>
    <p>
      <strong>Lineaarvõrrandi</strong> normaalkuju on \( ax + b = 0 \), kus \(
      ax \) on lineaarliige ja \( b \) on vabaliige.
    </p>
    <p>
      Lahendid puuduvad, kui \( a=0 \) ja \( b \neq 0 \) <br />
      Lahendeid on lõpmatu hulk, kui \( a=0 \) ja \( b = 0 \) <br />
      Lahend on üks, kui \( a \neq 0 \) ja see on kujul \( \displaystyle
      x=-\frac{b}{a} \)
    </p>
    <p>
      <strong>Ruutvõrrandi</strong> normaalkuju on \( ax^2 + bx + c = 0 \), kus
      \(a\) on ruutliikme kordaja, \(b\) lineaarliikme kordaja ning \(c\) on
      vabaliige.
    </p>
    <p>Ruutvõrrandi lahendivalem on</p>
    <p>\[ x_{1,\ 2}=\frac{-b \pm \sqrt{b^{2}-4 a c}}{2 a} \]</p>
    <p>Avaldist \( b^2-4ac \) nimetatakse diskriminandiks (\(D\)).</p>
    <p>
      Lahendeid on kaks erinevat, kui \( D \gt 0 \) <br />
      Lahendeid on kaks võrdset, kui \( D = 0 \) <br />
      Lahendid puuduvad, kui \( D \lt 0 \)
    </p>
    <p>
      <strong>Taandatud ruutvõrrandi</strong> \(x^{2}+p x+q=0\) lahendamiseks on
      olemas:
    </p>
    <p>
      Viete'i valem \(x_{1}+x_{2}=-p \text { ja } x_{1} \cdot x_{2}=q\) ja
      lahendivalem
    </p>
    <p>
      \[ x_{1,\ 2}=-\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^{2}-q} \]
    </p>
    <p>
      <strong>Murdvõrrandi</strong> \( \displaystyle \frac{F(x)}{G(x)} = 0 \)
      lahendamiseks kasutame tingimust
    </p>
    <p>
      \[ \left\{\begin{array}{l}{F(x)=0} \\ {G(x) \neq 0}\end{array}\right. \]
    </p>
    <p>
      <strong>Juurvõrrandi</strong> lahendamisel tuleb kindlasti teha kontroll,
      sest võrrandi poolte paarisarvulise astendajaga astendamisel võivad
      tekkida võõrlahendid.
    </p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p><em>Lahenda võrrand</em> \(x+\sqrt{x^{2}-x+10}=7\).</p>
      <p>\(\sqrt{x^{2}-x+10}=7-x\left|( )^{2}\right.\)</p>
      <p>\(x^{2}-x+10=(7-x)^{2}\)</p>
      <p>\(x^{2}-x+10=49-14 x+x^{2}\)</p>
      <p>\(-x+14 x=49-10\)</p>
      <p>\(13 x=39 \left| : 13\right. \)</p>
      <p>\(x=3\)</p>
      <p>Kontroll. \(3+\sqrt{3^{2}-3+10}=3+\sqrt{16}=3+4=7\)</p>
    </div>

    <h3 id="subm4">Absoluutväärtust sisaldavad võrrandid</h3>
    <h3 id="subm5">Võrrandisüsteemid</h3>
    <p>Kahe tundmatuga lineaarvõrrandisüsteemi</p>
    <p>
      \[ \left\{\begin{array}{l}{a_{1} x+b_{1} y=c_{1}} \\ {a_{2} x+b_{2}
      y=c_{2}}\end{array}\right. \]
    </p>
    <p>
      lahendatakse <strong>liitmisvõttega</strong>,
      <strong>asendusvõttega</strong>, graafiliselt või determinantide abil.
    </p>
    <h3 id="subm6">Kahe- ja kolmerealine determinant</h3>
    <h3 id="subm7">Tekstülesanded</h3>
  </div>
</template>
