"use client";

import styled from "styled-components";

const ContactSection = styled.section`
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
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <Container>
        <SectionTitle>Contact Us</SectionTitle>
        <ContactGrid>
          <ContactCard>
            <ContactTitle>Contact</ContactTitle>
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
            <ContactTitle style={{ marginTop: "2rem" }}>행사 장소</ContactTitle>
            <ContactList>
              <ContactItem>에틱501 (교대역 도보 2분)</ContactItem>
              <ContactItem>서울시 서초구 서초동 1576-26, 5층</ContactItem>
            </ContactList>
          </ContactCard>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
