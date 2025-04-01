"use client";

import Image from "next/image";
import styled from "styled-components";

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: white;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #1a1a1a;
  padding: 0.75rem 2rem;
  border-radius: 0.375rem;
  font-size: 1.125rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImage>
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <Overlay />
      </BackgroundImage>
      <Content>
        <ContentWrapper>
          <Title>UNIQUE ON</Title>
          <Subtitle>위스키 & 비지니스 네트워킹</Subtitle>
          <ApplyButton href="/apply">신청하기</ApplyButton>
        </ContentWrapper>
      </Content>
    </HeroContainer>
  );
};

export default Hero;
