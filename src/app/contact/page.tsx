"use client";

import styled from "styled-components";
import Navbar from "@/components/Navbar";

const ContactPage = styled.div`
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

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`;

const ContactCard = styled.div`
  background-color: #f9fafb;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

const ContactTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 1.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const MapSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f9fafb;

  @media (min-width: 640px) {
    padding: 5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const MapContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export default function Contact() {
  return (
    <ContactPage>
      <Navbar />
      <HeroSection>
        <Title>Contact Us</Title>
        <Description>
          UNIQUE ON에 대한 문의나 제안이 있으시다면 언제든 연락해주세요.
        </Description>
      </HeroSection>
      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactCard>
              <ContactTitle>연락처</ContactTitle>
              <ContactList>
                <ContactItem>E / ceojgv@naver.com</ContactItem>
                <ContactItem>T / 010.2788.1689</ContactItem>
              </ContactList>
            </ContactCard>
            <ContactCard>
              <ContactTitle>이달의 행사 일정</ContactTitle>
              <ContactList>
                <ContactItem>2025. 04. 19 토요일</ContactItem>
                <ContactItem>19:00 - 24:00</ContactItem>
              </ContactList>
              <ContactTitle style={{ marginTop: "2rem" }}>
                행사 장소
              </ContactTitle>
              <ContactList>
                <ContactItem>에틱501 (교대역 도보 2분)</ContactItem>
                <ContactItem>서울시 서초구 서초동 1576-26, 5층</ContactItem>
              </ContactList>
            </ContactCard>
          </ContactGrid>
        </Container>
      </ContactSection>
      <MapSection>
        <Container>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.1234567890123!2d127.01234567890123!3d37.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5a1234567890%3A0xabcdef1234567890!2z7JWE7YyM7J2YIOyDgeqwgCDsiJjsp4Dqtawg7JWE7YyM7J2Y!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </Container>
      </MapSection>
    </ContactPage>
  );
}
