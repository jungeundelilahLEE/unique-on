"use client";

import styled from "styled-components";
import Navbar from "@/components/Navbar";

const MembershipPage = styled.div`
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

const MembershipSection = styled.section`
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

const MembershipGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const MembershipCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

const MembershipTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const MembershipPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const MembershipList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MembershipItem = styled.li`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const JoinButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  margin-top: 2rem;

  &:hover {
    background-color: #333;
  }
`;

export default function Membership() {
  return (
    <MembershipPage>
      <Navbar />
      <HeroSection>
        <Title>UNIQUE ON 맴버십</Title>
        <Description>
          UNIQUE ON의 특별한 맴버십 혜택을 통해 더 많은 기회를 만나보세요.
        </Description>
      </HeroSection>
      <MembershipSection>
        <Container>
          <MembershipGrid>
            <MembershipCard>
              <MembershipTitle>기본 맴버십</MembershipTitle>
              <MembershipPrice>월 50,000원</MembershipPrice>
              <MembershipList>
                <MembershipItem>✓ 매월 UNIQUE ON 행사 참여</MembershipItem>
                <MembershipItem>✓ 위스키 시음 및 스낵 제공</MembershipItem>
                <MembershipItem>✓ 비지니스 강연 참여</MembershipItem>
                <MembershipItem>✓ 네트워킹 기회</MembershipItem>
              </MembershipList>
              <JoinButton>가입하기</JoinButton>
            </MembershipCard>
            <MembershipCard>
              <MembershipTitle>프리미엄 맴버십</MembershipTitle>
              <MembershipPrice>월 100,000원</MembershipPrice>
              <MembershipList>
                <MembershipItem>✓ 기본 맴버십 모든 혜택</MembershipItem>
                <MembershipItem>✓ 프리미엄 위스키 시음</MembershipItem>
                <MembershipItem>✓ VIP 네트워킹 파티 초대</MembershipItem>
                <MembershipItem>✓ 비지니스 멘토링 1회</MembershipItem>
              </MembershipList>
              <JoinButton>가입하기</JoinButton>
            </MembershipCard>
          </MembershipGrid>
        </Container>
      </MembershipSection>
    </MembershipPage>
  );
}
