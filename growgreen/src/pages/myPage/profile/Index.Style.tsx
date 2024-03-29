import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440rem;
  margin: 0 auto;
  padding: 0 16rem;
  color: var(--gray110);

  @media screen and (min-width: 768px) {
    padding: 80rem 48rem;
  }
`;

export const Title = styled.h3`
  font-size: 20rem;
  color: var(--gray110);
  font-weight: 600;
`;

export const ContainerInner = styled.div`
  display: flex;
`;

export const Content = styled.div`
  border-left: 1px solid rgba(107, 114, 128, 0.3);
  width: 100%;
  padding-left: 80rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
`;
export const InputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 24rem;
  //margin: 40rem 0;
  flex-grow: 1;
`;

export const AvatarWrapper = styled.div`
  margin-left: 208rem;

  & label {
    position: relative;
    cursor: pointer;

    & span {
      display: none;
      position: absolute;
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 160rem;
      border-radius: 80rem;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      z-index: 1;
      font-weight: 500;
    }

    &:hover span {
      display: block;
    }
  }
`;

export const SubmitButton = styled.button`
  height: 40rem;
  width: 88rem;
  border-radius: 8rem;
  background-color: var(--green90);
  font-weight: 600;
  text-align: center;
  color: #fff;
  transition: background-color 0.2s ease;
  margin-top: 40rem;

  &:not(:disabled):hover {
    background-color: var(--green100);
  }

  &:disabled {
    opacity: 0.4;
  }
`;
