import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  Media,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useState from "react";
import React from "react";
export default function Home() {
  const [show, setShow] = React.useState(false);
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
        <Nav fill className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          <Nav.Link href="/">LinkKKK</Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
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
          <a>
            Making the web more beautiful, fast, and open through great
            typography Making the web more beautiful, fast, and open through
            great typography Making the web more beautiful, fast, and open
            through great typography Making the web more beautiful, fast, and
            open through great typography Making the web more beautiful, fast,
            and open through great typography Making the web more beautiful,
            fast, and open through great typography Making the web more
            beautiful, fast, and open through great typography
          </a>
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
