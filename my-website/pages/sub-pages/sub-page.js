import Link from "next/link";
export default function SubPage() {
  return (
    <>
      <h1>Welcome to my profile page</h1>
      <Link href="/">
        <a>Go back</a>
      </Link>
    </>
  );
}
