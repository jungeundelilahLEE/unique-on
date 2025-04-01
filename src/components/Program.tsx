"use client";

import styled from "styled-components";

const ProgramSection = styled.section`
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

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const Time = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;
  min-width: 120px;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const Program = () => {
  return (
    <ProgramSection>
      <Container>
        <SectionTitle>세부 프로그램</SectionTitle>
        <Timeline>
          <TimelineItem>
            <Time>19:00 - 19:10</Time>
            <Content>
              <Title>참가자 배석 및 인사말</Title>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>19:10 - 19:30</Time>
            <Content>
              <Title>1부: Chat GPT 비지니스 적용꿀팁</Title>
              <Description>장태진 강사</Description>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>19:30 - 20:30</Time>
            <Content>
              <Title>비지니스 네트워킹</Title>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>20:30 - 20:40</Time>
            <Content>
              <Title>휴식</Title>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>20:40 - 21:20</Time>
            <Content>
              <Title>2부: 블렌딘 위스키 시음회</Title>
              <Description>위스키와 함께하는 자유 네트워킹</Description>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>21:20 - 21:40</Time>
            <Content>
              <Title>3부: 자유 네트워킹</Title>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>21:40 - 22:50</Time>
            <Content>
              <Title>자유 네트워킹</Title>
            </Content>
          </TimelineItem>
          <TimelineItem>
            <Time>22:50 - 23:00</Time>
            <Content>
              <Title>행사 마무리 및 정리</Title>
            </Content>
          </TimelineItem>
        </Timeline>
      </Container>
    </ProgramSection>
  );
};

export default Program;
