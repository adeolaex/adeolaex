import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Copyright from "../components/Copyright";
export default function SubPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography sx={{ mt: 7, mb: 4 }}>Next.js v5-alpha example</Typography>
        <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary"></Typography>

        <Link href="/">
          <Button variant="contained" color="primary">
            Go Back
          </Button>
        </Link>
        <Copyright />
      </Box>
    </Container>
  );
}
