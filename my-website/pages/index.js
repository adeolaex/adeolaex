import Head from "next/head";
// import Image from "next/image";
import Media from "react-bootstrap/Media";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
export default function Home() {
  const [tab, setTab] = React.useState("Home");

  return (
    <div>
      <Head>
        <title>Adeola's cloud - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 83B3F3 8AB4F8 E0E0E0 */}
      <Navbar
        style={{ backgroundColor: "#202124", position: "sticky" }}
        variant="dark"
        fixed="top"
      >
        <Nav
          fill
          className="justify-content-end"
          defaultActiveKey="Home"
          onSelect={(selectedKey) => setTab(selectedKey)}
        >
          <Nav.Link defaultValue="Home" eventKey="Home">
            Home
          </Nav.Link>
          <Nav.Link
            // href="#Featured"
            defaultValue="Featured"
            eventKey="Featured"
          >
            Featured
          </Nav.Link>
        </Nav>
        <Nav fill className="mr-auto" defaultActiveKey="home"></Nav>
        <Col xs={0} md={-1}>
          <Image src="/avatar.jpg" roundedCircle height={42} width={42} />
        </Col>
      </Navbar>

      <main className="main">
        <h1 className="title">
          {tab == "Home" ? (
            <a>
              Making the web more beautiful, fast, and open through great
              typography Making the web more beautiful, fast, and open through
              great typography. Making the web more beautiful, fast, and open
              through great typography Making the web more beautiful, fast, and
              open through great typography. Making the web more beautiful,
              fast, and open through great typography Making the web more
              beautiful, fast, and open through great typography. Making the web
              more beautiful, fast, and open through great typography Making the
              web more beautiful, fast, and open through great typography.
              Making the web more beautiful, fast, and open through great
              typography Making the web more beautiful, fast, and open through
              great typography. Making the web more beautiful, fast, and open
              through great typography Making the web more beautiful, fast, and
              open through great typography. Making the web more beautiful,
              fast, and open through great typography Making the web more
              beautiful, fast, and open through great typography. Making the web
              more beautiful, fast, and open through great typography Making the
              web more beautiful, fast, and open through great typography.
              Making the web more beautiful, fast, and open through great
              typography Making the web more beautiful, fast, and open through
              great typography. Making the web more beautiful, fast, and open
              through great typography Making the web more beautiful, fast, and
              open through great typography. Making the web more beautiful,
              fast, and open through great typography Making the web more
              beautiful, fast, and open through great typography.
            </a>
          ) : (
            <Col xs={10} md={12}>
              <Image src="/featured.png" fluid />
            </Col>
          )}
        </h1>
      </main>

      <style jsx>{`
        .main {
          //   padding-top: 20em;
        }
        main {
          padding: 3rem 7rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #8ab4f8;
          text-decoration: none;
        }
        .title {
          margin: 0;
          line-height: 1.35;
          font-size: 3.5rem;
          display: block;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #202124;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        @media screen and (max-width: 768px) {
          body {
            padding-top: 0px;
          }
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .avatar {
          padding-right: 100px;
          border-radius: 50%;
        }
        ,
        * {
        }
      `}</style>
    </div>
  );
}
