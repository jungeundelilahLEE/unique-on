"use client";

import styled from "styled-components";
import Image from "next/image";

const WhyJoinSection = styled.section`
  padding: 4rem 1rem;
  background-color: white;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CardImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media (min-width: 640px) {
    height: 240px;
  }

  @media (min-width: 768px) {
    height: 280px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;
  margin: 1rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin: 1.25rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0 1rem 1rem;
  line-height: 1.5;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin: 0 1.25rem 1.25rem;
  }
`;

const WhyJoin = () => {
  return (
    <WhyJoinSection>
      <Container>
        <SectionTitle>UNIQUE ON에 참가해야 하는 이유</SectionTitle>
        <Grid>
          <Card>
            <CardImage>
              <Image
                src="/networking.jpg"
                alt="Networking"
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
            <CardTitle>Networking</CardTitle>
            <CardDescription>
              관심분야를 기반으로 사람들과의 창업 네트워킹 경험을 제공합니다.
            </CardDescription>
          </Card>
          <Card>
            <CardImage>
              <Image
                src="/whiskey.jpg"
                alt="Whiskey"
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
            <CardTitle>Whiskey</CardTitle>
            <CardDescription>
              매 회 다양한 위스키 이야기와 시음을 통해 위스키에 대한 식견을 넓힐
              수 있습니다.
            </CardDescription>
          </Card>
          <Card>
            <CardImage>
              <Image
                src="/program.jpg"
                alt="Program"
                fill
                style={{ objectFit: "cover" }}
              />
            </CardImage>
            <CardTitle>Program</CardTitle>
            <CardDescription>
              처음 오신 분들부터 다회 참석하신 분들까지 즐길 수 있는 양질의
              스타트업 강의 프로그램을 제공합니다.
            </CardDescription>
          </Card>
        </Grid>
      </Container>
    </WhyJoinSection>
  );
};

export default WhyJoin;
