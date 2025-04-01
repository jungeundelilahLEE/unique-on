"use client";

import styled from "styled-components";
import Image from "next/image";

const SpeakersSection = styled.section`
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

const SpeakersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const SpeakerCard = styled.div`
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

const SpeakerImage = styled.div`
  position: relative;
  width: 100%;
  height: 280px;

  @media (min-width: 640px) {
    height: 320px;
  }

  @media (min-width: 768px) {
    height: 360px;
  }
`;

const SpeakerContent = styled.div`
  padding: 1.5rem;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const SpeakerTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
`;

const SpeakerRole = styled.div`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }
`;

const SpeakerDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const SpeakerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SpeakerListItem = styled.li`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Speakers = () => {
  return (
    <SpeakersSection>
      <Container>
        <SectionTitle>강연자 소개</SectionTitle>
        <SpeakersGrid>
          <SpeakerCard>
            <SpeakerImage>
              <Image
                src="/speaker1.jpg"
                alt="김재관 대표"
                fill
                style={{ objectFit: "cover" }}
              />
            </SpeakerImage>
            <SpeakerContent>
              <SpeakerTitle>대표</SpeakerTitle>
              <SpeakerRole>김재관</SpeakerRole>
              <SpeakerDescription>
                강연내용 | 블렌딘 위스키 시음회 : 꽃 향기 가득 봄의 위스키 특집
              </SpeakerDescription>
              <SpeakerList>
                <SpeakerListItem>(주)제이지비퍼블릭 대표</SpeakerListItem>
                <SpeakerListItem>
                  콘텐츠 기획 제작 및 브랜딩 전문가
                </SpeakerListItem>
                <SpeakerListItem>
                  AI 웹툰 제작 서비스 [WeToon] 대표
                </SpeakerListItem>
                <SpeakerListItem>
                  코로나 기간, 위스키에만 3억원 이상 쓴 남자
                </SpeakerListItem>
                <SpeakerListItem>위스키바 [에틱 Bar] 운영</SpeakerListItem>
              </SpeakerList>
            </SpeakerContent>
          </SpeakerCard>
          <SpeakerCard>
            <SpeakerImage>
              <Image
                src="/speaker2.jpg"
                alt="장태진 강사"
                fill
                style={{ objectFit: "cover" }}
              />
            </SpeakerImage>
            <SpeakerContent>
              <SpeakerTitle>강사</SpeakerTitle>
              <SpeakerRole>장태진</SpeakerRole>
              <SpeakerDescription>
                강연내용 | Chat GPT 비지니스 적용 꿀팁 대방출 : "Chat GPT
                이렇게도 쓴다고?!"
              </SpeakerDescription>
              <SpeakerList>
                <SpeakerListItem>
                  국내 대기업 신사업 전략 수립 프로젝트
                </SpeakerListItem>
                <SpeakerListItem>미션/비전 수립 프로젝트</SpeakerListItem>
                <SpeakerListItem>HR제도 수립 프로젝트</SpeakerListItem>
                <SpeakerListItem>
                  창업미션가 미션/비전 전략 수립 워크숍
                </SpeakerListItem>
              </SpeakerList>
            </SpeakerContent>
          </SpeakerCard>
        </SpeakersGrid>
      </Container>
    </SpeakersSection>
  );
};

export default Speakers;
