import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up: Git, ZCU, 9. 9. 2020"
    header="Follow Up: Git"
    subheader="ZCU, 9. 9. 2020"
    markdown={`
## Materiály

### Repozitář s kurzem

https://github.com/ondrejsika/git-training/

### Články na mém webu ohledně Gitu

https://ondrej-sika.cz/git

Pokud byste měli zájem o nějaké další školení, můžete si vybrat zde:

- Všechny kurzy - https://ondrej-sika.cz/seznam-skoleni
- Veřejné termíny - https://ondrej-sika.cz/verejne-terminy/

### Ostatní zajímavé repozitáře

- https://ondrej-sika.cz/repozitare/ - Seznam zajímavých repozitářů
- https://github.com/ondrejsika - Všechny mé repozitáře na Githubu

Pokud se Vám bude něco líbit, budu rád za hvězdičky. Díky.

## DevOps Live

Začal jsem streamovat live coding na témata z DevOps, pokud by Vás to zajímalo více, koukněte na stránku [DevOps Live](/devopslive).

## Další kroky

- Budu rád, když mi napíšete doporučení na LinkedIn a na Twitter
  - Linkedin: přidejte si mne a já vám pošlu žádost - https://www.linkedin.com/in/ondrejsika/
  - Twitter: Tweetnete něco s \`@ondrejsika\`.
- Přidejte se do komunit účastníků mých školení, které buduji na Slacku, Facebooku a Linkedinu - https://join.sika.io
- Pokud jste ve zpětné vazbě nezaškrtly, že chcete newsletter, můžete se přihlásit zde - https://sika.link/newsletter/

Ať se Vám daří ve všem, nejen s Gitem! Pivo si muzem doluvit na https://calendly.com/ondrejsika/beer.

Hezky den,
O.
`}
  />
);

export default Page;
