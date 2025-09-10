---
layout: single
author_profile: true
---

<div id="main" role="main">
  <div class="sidebar sticky">
    {% include author-profile.html %}
  </div>

  <div class="archive">
    <h1 class="page__title">{{ site.title }}</h1>
    
    <div class="page__content">
      <p>Final semester master student at TU Munich. I did my thesis at the <a href="https://db.in.tum.de/">Chair for Database Systems</a> under the supervision of Altan Birler and Prof. Thomas Neumann, on Multi-Join Cardinality Estimation using Sketches.</p>
      <p>Outside of databases, my interests are mainly surrounding mathematics (concentration bounds, knot theory, algorithmic complexity) and materials science (crystallography, materials design, desert sand beneficiation). I'm always open to collaborating on interesting projects, please feel free to reach out for a chat.</p>
      <p>[<a href="https://scholar.google.com/citations?user=qyOolasAAAAJ&hl=en">Google Scholar</a>] | [<a href="https://github.com/bannayeva">GitHub</a>]</p>
    </div>

    <section id="publications">
      <h2 class="archive__subtitle">Publications</h2>
      <hr />
      {% for post in site.publications reversed %}
        {% include archive-single.html %}
      {% endfor %}
    </section>

    <section id="talks">
      <h2 class="archive__subtitle">Talks</h2>
      <hr />
      {% for post in site.talks reversed %}
        {% include archive-single-talk.html %}
      {% endfor %}
    </section>

    <section id="teaching">
      <h2 class="archive__subtitle">Teaching</h2>
      <hr />
      {% for post in site.teaching reversed %}
        {% include archive-single.html %}
      {% endfor %}
    </section>
  </div>
</div>