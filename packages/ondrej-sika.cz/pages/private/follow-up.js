import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Follow Up Index"
    hideNewsletter={true}
    markdown={`
- [Git, ZCU, 9. 9. 2020](/follow-up/2020-09-09-zcu-git)
- [Docker & Kubernetes, Adbros, 5. 8. 2020](/follow-up/2020-08-05-adbros-docker-kubernetes)
- [Gitlab CI, SNK, 31. 7. 2020](/follow-up/2020-07-31-snk-gitlab-ci)
`}
  />
);

export default Page;
