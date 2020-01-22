import "../css";
import Head from "next/head";
import Markdown from "@app/common/components/Markdown";

const Index = () => (
  <>
    <Head>
      <title>static.sika.io</title>
    </Head>
    <div className="mt-4">
      <h1>static.sika.io</h1>
      <p>Static content for other wesbites or externals (conferences, ...).</p>
      <h2>Files</h2>
      <Markdown
        source={`
- [ondrejsika3.jpg](/files/photos/ondrejsika3.jpg)
- [ondrejsika3_200px.jpg](/files/photos/ondrejsika3_200px.jpg)
- [ondrejsika3_32px.jpg](/files/photos/ondrejsika3_32px.jpg)
- [ondrejsika3_32.png](/files/photos/ondrejsika3_32px.png)
`}
      />
    </div>
  </>
);

export default Index;