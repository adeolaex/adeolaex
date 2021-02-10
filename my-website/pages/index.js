import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Media, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useState from "react";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Launch from "@material-ui/icons/Launch";
export default function Home() {
  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);
  const [show, setShow] = React.useState(false);
  const [tab, setTab] = React.useState("home");
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
        {/* <Navbar.Brand>H</Navbar.Brand> */}
        <Nav
          fill
          className="mr-auto"
          defaultActiveKey="home"
          onSelect={(selectedKey) => setTab(selectedKey)}
        >
          <Nav.Link defaultValue="home" eventKey="home">
            Home
          </Nav.Link>

          <Nav.Link defaultValue="featured" eventKey="featured">
            Featured
          </Nav.Link>
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">View source code</Typography>
              </React.Fragment>
            }
          >
            <IconButton
              aria-label="launch"
              style={{ color: "#9AA0A6" }}
              target="_blank"
              href="https://github.com/adeolaex/adeolaex/tree/master/my-website"
            >
              <Launch fontSize="small" />
            </IconButton>
          </HtmlTooltip>
        </Nav>
        <Media>
          <Image
            className="avatar"
            src="/avatar.jpg" // Route of the image file
            height={35} // Desired size with correct aspect ratio
            width={35} // Desired size with correct aspect ratio
            alt="Adeola Damilola Kola-Olaleye"
          />
        </Media>
      </Navbar>
      <main className="main">
        <h1 className="title">
          {tab == "home" ? (
            <a>
              Making the web more beautiful, fast, and open through great
              typography Making the web more beautiful, fast, and open through
              great typography Making the web more beautiful, fast, and open
              through great typography Making the web more beautiful, fast, and
              open through great typographyMaking the web more beautiful, fast,
              and open through great typography Making the web more beautiful,
              fast, and open through great typographyMaking the web more
              beautiful, fast, and open through great typography Making the web
              more beautiful, fast, and open through great typographyMaking the
              web more beautiful, fast, and open through great typography Making
              the web more beautiful, fast, and open through great
              typographyMaking the web more beautiful, fast, and open through
              great typography Making the web more beautiful, fast, and open
              through great typographyMaking the web more beautiful, fast, and
              open through great typography Making the web more beautiful, fast,
              and open through great typographyMaking the web more beautiful,
              fast, and open through great typography Making the web more
              beautiful, fast, and open through great typographyMaking the
              website
            </a>
          ) : (
            <a></a>
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
