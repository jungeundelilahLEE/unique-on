"use client";

import styled from "styled-components";
import Navbar from "@/components/Navbar";

const AboutPage = styled.div`
  padding-top: 4rem;
`;

const HeroSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9fafb;
  text-align: center;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.7;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentSection = styled.section`
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

const ContentTitle = styled.h2`
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

const ContentText = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function About() {
  return (
    <AboutPage>
      <Navbar />
      <HeroSection>
        <Title>About UNIQUE ON</Title>
        <Description>
          비지니스와 창업에 관심 있는 훌륭한 분들을 모으고 위스키로 특별함을
          더했을 뿐인데 다음 모임 일정을 지속적으로 문의 주시더라고요
          &apos;UNIQUE ON&apos;은 그렇게 시작되었습니다
        </Description>
      </HeroSection>
      <ContentSection>
        <Container>
          <ContentTitle>UNIQUE ON의 시작</ContentTitle>
          <ContentText>
            UNIQUE ON은 비지니스와 창업에 관심 있는 분들을 위한 특별한
            모임입니다. 위스키를 매개로 하여 자연스러운 네트워킹과 의미 있는
            대화를 나누는 공간을 제공합니다.
          </ContentText>
          <ContentText>
            매회 다양한 위스키를 시음하고, 비지니스 전문가들의 강연을 듣으며,
            참가자들과의 네트워킹을 통해 새로운 인사이트를 얻을 수 있습니다.
          </ContentText>
          <ContentText>
            UNIQUE ON은 단순한 모임을 넘어, 비지니스와 창업에 대한 열정을 가진
            분들이 서로의 경험을 공유하고 성장할 수 있는 플랫폼이 되고자 합니다.
          </ContentText>
        </Container>
      </ContentSection>
    </AboutPage>
  );
}
