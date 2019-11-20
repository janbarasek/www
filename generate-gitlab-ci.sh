#!/bin/sh

DEV_SITES="git-training.uk docker-training.uk kubernetes-training.uk ansible-training.uk gitlab-training.uk ansible-schulung.de ansible-skoleni.cz dockerschulung.de gitlab-ci.cz kubernetes-schulung.de skoleni-docker.cz skoleni-git.cz skoleni-kubernetes.cz skolenie-git.sk skolenie-gitlab.sk skolenie-docker.sk skolenie.kubernetes.sk skolenie-ansible.sk ansible-utbildning.se docker-utbildning.se git-utbildning.se gitlab-utbildning.se kubernetes-utbildning.se ondrej-sika.cz ondrej-sika.uk ondrejsikalabs.com sika.io ondrej-sika.de sika-kaplan.com trainera.io salzburgdevops.com training.kubernetes.is training.kubernetes.lu sika-kraml.de skoleni-terraform.cz sika-training.com ondrej-sika.com sikahq.com ondrejsika.io cal-api.sika.io"
PROD_SITES="git-training.uk docker-training.uk kubernetes-training.uk ansible-training.uk gitlab-training.uk ansible-schulung.de ansible-skoleni.cz dockerschulung.de gitlab-ci.cz kubernetes-schulung.de skoleni-docker.cz skoleni-git.cz skoleni-kubernetes.cz ansible-utbildning.se docker-utbildning.se git-utbildning.se gitlab-utbildning.se kubernetes-utbildning.se ondrej-sika.cz ondrejsikalabs.com ondrej-sika.de skolenie-git.sk skolenie-gitlab.sk skolenie-docker.sk skolenie.kubernetes.sk sika-kaplan.com trainera.io salzburgdevops.com training.kubernetes.is training.kubernetes.lu sika-kraml.de skoleni-terraform.cz sika-training.com ondrej-sika.com sikahq.com cal-api.sika.io"
DEV_SUFFIX=".xsika.cz"


cat << EOF > .gitlab-ci.yml
# Don't edit this file maually
# This file is generated by ./generate-gitlab-ci.yml

EOF

cat << EOF >> .gitlab-ci.yml
image: ondrejsika/ci

stages:
  - build_js
  - build_docker
  - deploy_dev
  - deploy_prod

variables:
  DOCKER_BUILDKIT: '1'

EOF

for SITE in $(cat sites.txt)
do

cat << EOF >> .gitlab-ci.yml
$SITE build js:
  stage: build_js
  image: node
  variables:
    GIT_CLEAN_FLAGS: none
  script:
    - yarn
    - rm -rf packages/$SITE/out
    - yarn run static-$SITE
  only:
    changes:
      - packages/data/**/*
      - packages/common/**/*
      - packages/course-landing/**/*
      - packages/$SITE/**/*
      - yarn.lock
  artifacts:
    name: $SITE
    paths:
      - packages/$SITE/out


$SITE build docker:
  dependencies:
    - $SITE build js
  variables:
    GIT_STRATEGY: none
  stage: build_docker
  script:
    - docker login \$CI_REGISTRY -u \$CI_REGISTRY_USER -p \$CI_REGISTRY_PASSWORD
    - cp ci/docker/* packages/$SITE/
    - docker build -t registry.sikahq.com/www/www/$SITE packages/$SITE
    - rm packages/$SITE/Dockerfile
    - rm packages/$SITE/nginx-site.conf
    - docker push registry.sikahq.com/www/www/$SITE
  only:
    changes:
      - packages/data/**/*
      - packages/common/**/*
      - packages/course-landing/**/*
      - packages/$SITE/**/*
      - yarn.lock

EOF

if printf '%s\n' ${DEV_SITES[@]} | grep "$SITE" > /dev/null; then
SUFFIX=$DEV_SUFFIX
cat << EOF >> .gitlab-ci.yml
$SITE dev deploy:
  stage: deploy_dev
  variables:
    GIT_STRATEGY: none
  script:
    - curl -s "\$SOD_URL/api/v1/deploy/docker/?image=\$CI_REGISTRY_IMAGE/$SITE&domain=$SITE$SUFFIX&token=\$SOD_TOKEN&registry=\$CI_REGISTRY&registry_user=\$CI_REGISTRY_USER&registry_password=\$CI_REGISTRY_PASSWORD"
  except:
    - master
  only:
    changes:
      - packages/data/**/*
      - packages/common/**/*
      - packages/course-landing/**/*
      - packages/$SITE/**/*
      - yarn.lock
  environment:
    name: dev $SITE
    url: https://$SITE$SUFFIX
  dependencies: []

EOF
fi;


if printf '%s\n' ${PROD_SITES[@]} | grep "$SITE" > /dev/null; then
SUFFIX=""
cat << EOF >> .gitlab-ci.yml
$SITE prod deploy:
  stage: deploy_prod
  variables:
    GIT_STRATEGY: none
  script:
    - curl -s "\$SOD_URL/api/v1/deploy/docker/?image=\$CI_REGISTRY_IMAGE/$SITE&domain=$SITE$SUFFIX&token=\$SOD_TOKEN&registry=\$CI_REGISTRY&registry_user=\$CI_REGISTRY_USER&registry_password=\$CI_REGISTRY_PASSWORD"
  only:
    refs:
      - master
    changes:
      - packages/data/**/*
      - packages/common/**/*
      - packages/course-landing/**/*
      - packages/$SITE/**/*
      - yarn.lock
  environment:
    name: prod $SITE
    url: https://$SITE
  dependencies: []

EOF
fi;

done
