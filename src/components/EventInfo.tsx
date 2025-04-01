"use client";

import styled from "styled-components";
import Image from "next/image";

const EventSection = styled.section`
  padding: 6rem 1rem;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: #1a1a1a;
`;

const EventCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const EventContent = styled.div`
  padding: 2rem;
`;

const EventTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #4a5568;
`;

const InfoValue = styled.span`
  color: #1a1a1a;
`;

const ApplyButton = styled.a`
  display: inline-block;
  background-color: #1a1a1a;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2d3748;
  }
`;

const EventInfo = () => {
  return (
    <EventSection>
      <Container>
        <SectionTitle>25년도 4월의 UNIQUE ON</SectionTitle>
        <EventCard>
          <EventImage>
            <Image
              src="/event-bg.jpg"
              alt="Event background"
              fill
              style={{ objectFit: "cover" }}
            />
          </EventImage>
          <EventContent>
            <EventTitle>25번째 UNIQUE ON</EventTitle>
            <InfoGrid>
              <InfoItem>
                <InfoLabel>날짜:</InfoLabel>
                <InfoValue>2025년 04월 19일 토요일</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>시간:</InfoLabel>
                <InfoValue>오후 7-12시</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>장소:</InfoLabel>
                <InfoValue>
                  서울시 서초구 서초동 1576-26 5층, 에틱501 (교대역 도보 2분)
                </InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>참가비:</InfoLabel>
                <InfoValue>70,000원</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>신청기간:</InfoLabel>
                <InfoValue>04월 19일 12:00까지</InfoValue>
              </InfoItem>
              <InfoItem>
                <InfoLabel>모집인원:</InfoLabel>
                <InfoValue>24명(심사 후 최종 선정)</InfoValue>
              </InfoItem>
            </InfoGrid>
            <ApplyButton href="/apply">신청하기</ApplyButton>
          </EventContent>
        </EventCard>
      </Container>
    </EventSection>
  );
};

export default EventInfo;
