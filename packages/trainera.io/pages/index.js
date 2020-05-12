import React from "react";
import TraineraCourseBar from "@app/ondrejsika-theme/components/TraineraCourseBar";
import MainBarHomepage from "@app/ondrejsika-theme/components/MainBarHomepage";
import CompaniesBar from "@app/ondrejsika-theme/components/CompaniesBar";
import twitter_recommendation_file from "@app/data/training/recommendations/twitter_recommendation.yml";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Head from "next/head";
import TextArea from "@app/ondrejsika-theme/components/TextArea";
import OutTeam from "@app/ondrejsika-theme/components/OurTeam";

import ondrejsika from "@app/data/pictures/ondrejsika.jpg";
import martinjurco from "@app/data/pictures/martinjurco.jpeg";
import zuzanajeschke from "@app/data/pictures/zuzanajeschke.png";
import jirikraml from "@app/data/pictures/jirikraml.jpg";
import vojtechmares from "@app/data/pictures/vojtechmares.jpg";
import styled from "styled-components";

const A = styled.a`
  color: #088958;
  font-weight: bold;
`;

const Index = props => (
  <div>
    <Head>
      <title>trainera.io - IT Školení, konzultace a workshopy</title>
    </Head>
    <MainBarHomepage
      site={props.site}
      header="IT & DevOps školení, konzultace a workshopy"
      text="Trainera je školíci agentura, která se primárně zaměřuje na oblast
        DevOps. Naši lektoři jsou zkušení vývojáři a DevOpsáci, kteří
        technologiím, které školí rozumí a denne s nimi pracují. Dokážou proto
        jednoduše vysvětlit základy, ale i zodpovědět na záludné praktické
        dotazy."
    />

    <div className="container">
      <TraineraCourseBar LectureImgHeader="Co školíme" />
      <TextArea TextHeader="Služby a tým">
        <TextArea.P>
          <b>Technologie a technologický stack</b>, který školíme je soubor na
          sebe navazujících nástrojů, které Vám umožní <b>zvýšit efektivitu</b>{" "}
          Vašich IT týmů. Ať už <b>vývojářům</b> pomůžou{" "}
          <b>doručovat změny rychleji</b> k zákazníkům, tak <b>pomohou</b>{" "}
          Vašemu operations týmu{" "}
          <b>
            s bezproblémovým během Vašich služeb a snížením provozních nákladů
          </b>
          . Oba tyto faktory mají <b>pozitivní vliv</b> na celkové náklady
          Vašich IT projektů.
        </TextArea.P>
        <TextArea.P>
          Pojďte zavést nebo posunout Vaše DevOps do současnosti. Začněte s{" "}
          <A href="skoleni/git">Gitem</A>, <A href="skoleni/docker">Dockerem</A>
          , <A href="skoleni/kubernetes">Kubernetes</A> nebo{" "}
          <A href="skoleni/gitlab-ci">CI</A>. Tak jako jsme pomohli bankám,
          telefonním operátorům k zjednodušení práce a úspoře nákladů, můžeme
          pomoci i Vám.
        </TextArea.P>

        <TextArea.P>
          Všechny kurzy a školení děláme v českém i anglickém jazyce. Kurzy
          nabízíme jako otevřené termíny, tak i školení in house. Teď v době
          Coronaviru děláme všechny školení online formou a funguje to skvěle.
        </TextArea.P>
        <OutTeam
          lecturers={[
            [ondrejsika, "Ondrej Sika"],
            [martinjurco, "Martin Jurco"],
            [zuzanajeschke, "Zuzana Jeschke"],
            [vojtechmares, "Vojtěch Mareš"],
            [jirikraml, "Jiří Kraml"]
          ]}
        />
      </TextArea>

      <CompaniesBar />
      <h2 className="mt-5">Doporučení z Twitteru</h2>
      <div className="card-columns">
        {twitter_recommendation_file.map((rec, i) => {
          return (
            <div key={i} className="card" style={{ border: "none" }}>
              <TwitterTweetEmbed
                tweetId={rec.tweet_id}
                options={{ conversation: "none" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default Index;
