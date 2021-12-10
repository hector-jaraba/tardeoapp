import styled from "styled-components";
import Link from "next/link";

const Title = styled.h2`
  color: green;
`;

const Home = () => {
  return (
    <>
      <Title>Happy Development</Title>
      <Link href="/plans">
        <a>Plans</a>
      </Link>
    </>
  );
};

export default Home;
