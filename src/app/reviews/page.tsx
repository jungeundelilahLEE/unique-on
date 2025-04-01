"use client";

import styled from "styled-components";
import Navbar from "@/components/Navbar";

const ReviewsPage = styled.div`
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

const ReviewsSection = styled.section`
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

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const ReviewCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ReviewerImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #4b5563;
`;

const ReviewerInfo = styled.div`
  flex: 1;
`;

const ReviewerName = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
`;

const ReviewDate = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const ReviewContent = styled.p`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

const ReviewTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #e5e7eb;
  color: #4b5563;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

const StatsSection = styled.section`
  padding: 4rem 1rem;
  background-color: #1a1a1a;
  color: white;
  text-align: center;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 48rem;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
`;

const StatLabel = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
`;

export default function Reviews() {
  return (
    <ReviewsPage>
      <Navbar />
      <HeroSection>
        <Title>참가자 후기</Title>
        <Description>
          UNIQUE ON의 참가자들이 직접 남긴 생생한 후기와 경험을 확인해보세요.
        </Description>
      </HeroSection>
      <ReviewsSection>
        <Container>
          <ReviewsGrid>
            <ReviewCard>
              <ReviewHeader>
                <ReviewerImage>김</ReviewerImage>
                <ReviewerInfo>
                  <ReviewerName>김서연</ReviewerName>
                  <ReviewDate>2024.03.15</ReviewDate>
                </ReviewerInfo>
              </ReviewHeader>
              <ReviewContent>
                "위스키 시음과 함께 비지니스 강연을 들을 수 있어서 매우
                유익했습니다. 특히 네트워킹 시간에 다양한 분야의 전문가들과
                대화할 수 있어 좋았어요."
              </ReviewContent>
              <ReviewTags>
                <Tag>위스키 시음</Tag>
                <Tag>네트워킹</Tag>
                <Tag>강연</Tag>
              </ReviewTags>
            </ReviewCard>
            <ReviewCard>
              <ReviewHeader>
                <ReviewerImage>이</ReviewerImage>
                <ReviewerInfo>
                  <ReviewerName>이준호</ReviewerName>
                  <ReviewDate>2024.03.01</ReviewDate>
                </ReviewerInfo>
              </ReviewHeader>
              <ReviewContent>
                "프리미엄 위스키를 맛보면서 비지니스 인사이트를 얻을 수 있는
                좋은 기회였습니다. 다음 행사도 꼭 참여하고 싶어요!"
              </ReviewContent>
              <ReviewTags>
                <Tag>프리미엄 위스키</Tag>
                <Tag>비지니스</Tag>
                <Tag>인사이트</Tag>
              </ReviewTags>
            </ReviewCard>
            <ReviewCard>
              <ReviewHeader>
                <ReviewerImage>박</ReviewerImage>
                <ReviewerInfo>
                  <ReviewerName>박지민</ReviewerName>
                  <ReviewDate>2024.02.15</ReviewDate>
                </ReviewerInfo>
              </ReviewHeader>
              <ReviewContent>
                "분위기가 매우 좋았고, 참가자들 간의 자연스러운 소통이
                이루어졌습니다. 위스키에 대한 전문적인 설명도 인상적이었어요."
              </ReviewContent>
              <ReviewTags>
                <Tag>분위기</Tag>
                <Tag>소통</Tag>
                <Tag>전문성</Tag>
              </ReviewTags>
            </ReviewCard>
            <ReviewCard>
              <ReviewHeader>
                <ReviewerImage>최</ReviewerImage>
                <ReviewerInfo>
                  <ReviewerName>최현우</ReviewerName>
                  <ReviewDate>2024.02.01</ReviewDate>
                </ReviewerInfo>
              </ReviewHeader>
              <ReviewContent>
                "비지니스 멘토링이 특히 도움이 되었습니다. 실제 사례를 바탕으로
                한 조언이 실무에 바로 적용할 수 있어 좋았어요."
              </ReviewContent>
              <ReviewTags>
                <Tag>멘토링</Tag>
                <Tag>실무</Tag>
                <Tag>조언</Tag>
              </ReviewTags>
            </ReviewCard>
          </ReviewsGrid>
        </Container>
      </ReviewsSection>
      <StatsSection>
        <Container>
          <StatsGrid>
            <StatItem>
              <StatNumber>98%</StatNumber>
              <StatLabel>만족도</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>85%</StatNumber>
              <StatLabel>재참여율</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>500+</StatNumber>
              <StatLabel>누적 참가자</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>24</StatNumber>
              <StatLabel>개최 횟수</StatLabel>
            </StatItem>
          </StatsGrid>
        </Container>
      </StatsSection>
    </ReviewsPage>
  );
}
