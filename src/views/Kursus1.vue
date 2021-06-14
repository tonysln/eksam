<template>
  <div class="grid--content">
    <h2 class="content-title">I. Avaldised ja arvuhulgad</h2>
    <hr class="thinhr" />
    <h3 id="subm1">Arvuhulgad</h3>
    <!-- <p>\( N \) - Kõik naturaalarvud</p> -->
    <p>
      Kõik naturaalarvud moodustavad hulga \( N \) <br />
      Negatiivsed ja positiivsed täisarvud ning arv \( 0 \) moodustavad hulga \(
      Z \) <br />
      Täisarvude hulk koos positiivsete ja negatiivsete murdarvudega on
      ratsionaalarvude hulk \( Q \)
      <br />
      Arv, mis avaldub lõpmatu mitteperioodilise kümnendmurruna on
      irratsionaalarv \( I \) <br />
      Kõik ratsionaal- ja irratsionaalarvud koos moodustavad reaalarvude hulga
      \( R \) <br />
    </p>
    <h3 id="subm2">Absoluutväärtus</h3>
    <p>
      Reaalarvu x absoluutväärtus \( |x| \) on arvteljel sellele arvule vastava
      punkti kaugus nullpunktist.
    </p>
    <p>
      \[ |x|=\left\{\begin{array}{c}{x, \text { kui } x \geq 0} \\ {-x, \text {
      kui } x \lt 0}\end{array}\right. \]
    </p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p>$$ |10|=10 $$</p>
      <p>$$ |-3|=3 $$</p>
      <p>
        $$ x+|x-1|=\left\{\begin{array}{l}{x+x-1=2 x-1, \text { kui } x-1 \geq 0
        \text { ehk } x \geq 1} \\ {x+(-(x-1))=x-x+1=1, \text { kui } x-1 \lt 0
        \text { ehk } x \lt 1}\end{array}\right. $$
      </p>
    </div>

    <h3 id="subm3">Tehted arvu astmetega</h3>
    <p style="line-height: 2.5">
      \(a^{m} \cdot a^{n} = a^{m+n}\) <br />
      \(a^{m} : a^{n} = a^{m-n}\) <br />
      \(a^{n} \cdot b^{n} = (a\cdot b)^{n}\) <br />
      \(a^{n} : b^{n} = (a:b)^{n}\) <br />
      \((a^{m})^{n} = a^{m\cdot n}\) <br />
      \(a^{0} = 1\) <br />
      \(a^{-n} = \frac{1}{a^{n}}\)
    </p>
    <h3 id="subm4">Tehted arvu juurtega</h3>
    <p style="line-height: 2.5">
      \((\sqrt[2n]{a})^{2n} = |a|\) <br />
      \(\sqrt[n]{a\cdot b} = \sqrt[n]{a} \cdot \sqrt[n]{b}\) <br />
      \(\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}\) <br />
      \(\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}\) <br />
      \((\sqrt[n]{a})^{m} = \sqrt[n]{a^{m}}\) <br />
      \(a^{\frac{m}{n}} = \sqrt[n]{a^{m}}\) <br />
      \( \sqrt[p n]{a^{p m}}=\sqrt[n]{a^{m}} \)
    </p>
    <h3 id="subm5">Abivalemid</h3>
    <p style="line-height: 2.5">
      \( (a \pm b)^{2}=a^{2} \pm 2 a b+b^{2} \) <br />
      \( (a \pm b)^{3}=a^{3} \pm 3 a^{2} b+3 a b^{2} \pm b^{3} \) <br />
      \( a^{2}-b^{2}=(a+b)(a-b) \) <br />
      \( a^{3} \pm b^{3}=(a \pm b)(a^{2} \mp a b+b^{2}) \)
    </p>
  </div>
</template>
