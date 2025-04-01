"use client";

import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9fafb;

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #4b5563;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    flex: 1;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Container>
        <SectionTitle>about UNIQUE ON</SectionTitle>
        <Content>
          <Description>
            비지니스와 창업에 관심 있는 훌륭한 분들을 모으고 위스키로 특별함을
            더했을 뿐인데 다음 모임 일정을 지속적으로 문의 주시더라고요 'UNIQUE
            ON'은 그렇게 시작되었습니다
          </Description>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
