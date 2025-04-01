"use client";

import styled from "styled-components";
import Image from "next/image";

const FeaturesSection = styled.section`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;

const FeatureCard = styled.div`
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

const FeatureImage = styled.div`
  position: relative;
  width: 100%;
  height: 160px;

  @media (min-width: 640px) {
    height: 200px;
  }

  @media (min-width: 768px) {
    height: 240px;
  }
`;

const FeatureContent = styled.div`
  padding: 1.25rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <SectionTitle>제공 사항</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureImage>
              <Image
                src="/whiskey-tasting.jpg"
                alt="Whiskey tasting"
                fill
                style={{ objectFit: "cover" }}
              />
            </FeatureImage>
            <FeatureContent>
              <FeatureTitle>위스키 6종 시음</FeatureTitle>
              <FeatureDescription>
                인당 30만원 상당의 다양한 위스키를 시음할 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <Image
                src="/food-platter.jpg"
                alt="Food platter"
                fill
                style={{ objectFit: "cover" }}
              />
            </FeatureImage>
            <FeatureContent>
              <FeatureTitle>맛있는 안주</FeatureTitle>
              <FeatureDescription>
                치즈과일플래터, 견과류, 육포 등 다양한 안주가 제공됩니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <Image
                src="/whiskey-talk.jpg"
                alt="Whiskey talk"
                fill
                style={{ objectFit: "cover" }}
              />
            </FeatureImage>
            <FeatureContent>
              <FeatureTitle>위스키 이야기</FeatureTitle>
              <FeatureDescription>
                전문가의 위스키 관련 강의와 이야기를 들을 수 있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
          <FeatureCard>
            <FeatureImage>
              <Image
                src="/program.jpg"
                alt="Program"
                fill
                style={{ objectFit: "cover" }}
              />
            </FeatureImage>
            <FeatureContent>
              <FeatureTitle>창업 관련 프로그램</FeatureTitle>
              <FeatureDescription>
                창업 관련 프로그램 및 강의를 통해 새로운 인사이트를 얻을 수
                있습니다.
              </FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
