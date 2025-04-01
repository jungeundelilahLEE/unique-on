"use client";

import styled from "styled-components";

const StatsSection = styled.section`
  padding: 4rem 1rem;
  background-color: #1a1a1a;
  color: white;

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

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 3rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Stats = () => {
  return (
    <StatsSection>
      <Container>
        <Grid>
          <StatCard>
            <StatNumber>889명</StatNumber>
            <StatLabel>누적 참가자</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>98%</StatNumber>
            <StatLabel>참가자 평균 만족도</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>95%</StatNumber>
            <StatLabel>참가자 재참여율</StatLabel>
          </StatCard>
        </Grid>
      </Container>
    </StatsSection>
  );
};

export default Stats;
