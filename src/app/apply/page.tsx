"use client";

import styled from "styled-components";
import Navbar from "@/components/Navbar";

const ApplyPage = styled.div`
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

const FormSection = styled.section`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #1a1a1a;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  color: #1a1a1a;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`;

const SubmitButton = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`;

export default function Apply() {
  return (
    <ApplyPage>
      <Navbar />
      <HeroSection>
        <Title>UNIQUE ON 신청하기</Title>
        <Description>
          비지니스와 창업에 관심 있는 분들의 참여를 기다립니다.
        </Description>
      </HeroSection>
      <FormSection>
        <Container>
          <Form>
            <FormGroup>
              <Label htmlFor="name">이름</Label>
              <Input type="text" id="name" name="name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">이메일</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="phone">전화번호</Label>
              <Input type="tel" id="phone" name="phone" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="company">소속/회사</Label>
              <Input type="text" id="company" name="company" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">자기소개</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="간단한 자기소개와 참여 동기를 작성해주세요."
                required
              />
            </FormGroup>
            <SubmitButton type="submit">신청하기</SubmitButton>
          </Form>
        </Container>
      </FormSection>
    </ApplyPage>
  );
}
