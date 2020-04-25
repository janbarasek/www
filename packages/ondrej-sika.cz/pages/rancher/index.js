import React from "react";
import Article from "@app/ondrejsika-theme/layouts/Article";

const Page = () => (
  <Article
    title="Rancher, nástroj na správu Kubernetes clusterů"
    ad="rancher"
    markdown={`
## Co je Rancher

Rancher je nástroj na správu Kubernetes clusterů. Umožňuje Vám jednoše spravovat clustery na vašem vlastním HW i na cloudových platformách jako je AWS, GCP nebo DigitalOcean. Rancher má také podporu Terraformu, tak můžete své clustery spravovat deklarativně.

## Články o Rancheru zde na webu

- [Instalace Rancheru](/rancher/instalace-rancheru)
- [Instalace Rancher CLI a RKE](/rancher/instalace-rancher-cli-a-rke)

<!---
- [Instalace Kubernetes clusteru pomocí Rancheru na vlastním hardware](/rancher/instalace-kubernetes-clusteru-pomoci-rancheru-na-vlastnim-hardware)
--->

`}
  />
);

export default Page;
