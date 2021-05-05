<template>
  <div class="grid--content">
    <h2 class="content-title">XI. Integraal. Planimeetria</h2>
    <hr class="thinhr" />
    <h3 id="subm1">Algfunktsioon. Määramata integraal</h3>
    <p>algfunkts ...</p>
    <p>Sümbolit \( \int\) nimetatakse <strong>integraali</strong> märgiks.</p>
    <p>$$ \int f(x) d x=F(x)+C $$</p>
    <p>Antud avaldis on <strong>määramata integraal</strong>.</p>
    <h3 id="subm2">Integraali omadused</h3>
    <p>
      \(\displaystyle \int a f(x) d x=a \int f(x) d x\) <br />
      \(\displaystyle \int f(x) d x+\int g(x) d x=\int f(x) d x+\int g(x) d x\)
      <br />
      \(\displaystyle \int d x=x+C\) <br />
      \(\displaystyle \int x d x=\frac{x^{2}}{2}+C\) <br />
      \(\displaystyle \int e^{x} d x=e^{x}+C\) <br />
      \(\displaystyle \int \sin x d x=-\cos x+C\) <br />
      \(\displaystyle \int \cos x d x=\sin x+C\) <br />
    </p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p>
        $$ \begin{array}{l}{\int 4 \sqrt{x} d x=\int 4 x^{\frac{1}{2}} d x=4
        \int x^{\frac{1}{2}} d x=} \\ {=4 \cdot \frac{2
        x^{\frac{3}{2}}}{3}+C=\frac{8}{3} x^{1 \frac{1}{2}}+C=\frac{8}{3} x
        \sqrt{x}+C}\end{array} $$
      </p>
    </div>

    <h3 id="subm3">Määratud integraal. Kõvertrapetsi pindala</h3>
    <p>
      \(\displaystyle \int_{a}^{b} f(x) d x=F(a)-F(b), \text { kus }
      F^{\prime}(x)=f(x)\)
    </p>
    <h3 id="subm4">Pindala arvutamine</h3>
    <p>ülemine - alumine ....</p>
    <img src="https://www.pleacher.com/mp/mgifs/gifs3/area2.gif" alt="" />
    <p style="font-size: 1.4rem; color: gray">
      <em
        >Allikas:
        <a href="https://www.pleacher.com/handley/lessons/calc2006/day108.html"
          >https://www.pleacher.com/handley/lessons/calc2006/day108.html</a
        >
      </em>
      <br />
      <em>NB! Replace with custom one</em>
    </p>
    <p>kui trapets alla x telje ....</p>
    <p>\(\displaystyle S=-\int_{a}^{b} f(x) d x\)</p>
    <p>Kõvertrapets asub nii üleval- kui ka allpool x-telge</p>
    <p>
      \(\displaystyle S=S_{1}+S_{2}=\int_{a}^{b} f(x) d x-\int_{b}^{c} f(x) d
      x\)
    </p>

    <div class="examp ex-closed">
      <span
        class="ex-open"
        onclick="this.parentElement.classList.toggle('ex-opened');"
        >Näide</span
      >
      <p></p>
    </div>

    <h3 id="subm5">Pöördkeha ruumala ja töö arvutamine</h3>
    <p>\(\displaystyle V=\pi \int_{a}^{b}[f(x)] d x \)</p>
    <p>\(\displaystyle A=\int_{a}^{b} f(s) d s \)</p>
    <h3 id="subm6">Kolmnurk</h3>
    <p>
      Korgused loikuvad uhes punktis. <br />
      Nurgapoolitajad loikuvad uhes punktis, mis kujutab endas kolmnurga
      siseringjoone keskpunkti. <br />
      Kulgede keskristsirged loikuvad uhes punktis, mis kujutab endast kolmnurga
      umberringjoone keskpunkti. <br />
      Mediaanid loikuvad uhes punktis, mis kujutab endast kolmnurga massikeset.
      <br />
      Mediaanide loikepunkt jaotab mediaanid suhtes 1 : 2.
    </p>
    <p>\(\displaystyle P=a+b+c ; p=\frac{a+b+c}{2}\)</p>
    <p>\(\displaystyle S=\frac{a h}{2}=\frac{a b \sin \gamma}{2}\)</p>
    <p>\(\displaystyle S=\sqrt{p(p-a)(p-b)(p-c)}\)</p>
    <p>\(\displaystyle S=p r,(r-\text { siseringjoone raadius })\)</p>
    <h3 id="subm7">Ring ja ringjoon</h3>
    <p>
      \(\displaystyle \begin{aligned} d &=2 r \\ C &=2 \pi r \\ S &=\pi r^{2}
      \end{aligned}\)
    </p>
    <p>
      Sektori kaar \(\displaystyle l=\frac{2 \pi r}{2 \pi} x=x r\) <br />
      Sektori pindala \(\displaystyle S=\frac{x r^{2}}{2}=\frac{l r}{2}\)
    </p>
    <h3 id="subm8">Hulknurk</h3>
    <h3 id="subm9">Rööpkülik ja trapets</h3>
    <p>
      \(\displaystyle \begin{array}{l}{S=a h=a b \sin \alpha} \\ {P=2(a+b)} \\
      {\alpha+\beta=180^{\circ}}\end{array}\)
    </p>
    <p>\(\displaystyle S=\frac{a+b}{2} h=k h\)</p>
  </div>
</template>
