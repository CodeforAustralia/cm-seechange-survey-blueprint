import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ButtonProps, ContentProps } from './interfaces';
import colors from '../utils/colors';

export const ContentWrapper = styled.div<ContentProps>(
  props => css`
    font-size: 1rem;
    text-align: center;
    color: ${colors.white};

    ${props.buttonType &&
    props.buttonType === 'secondary' &&
    css`
      color: ${colors.blue600};
    `}
  `
);

export const ButtonWrapper = styled.button<ButtonProps>(
  props => css`
    transition: all 0.5s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    box-sizing: border-box;
    vertical-align: middle;
    word-break: break-all;
    flex-wrap: nowrap;
    min-height: 50px;
    cursor: pointer;
    border-radius: 5px;

    ${props.buttonType &&
    props.buttonType === 'primary' &&
    css`
      color: ${colors.blue600};
      background-color: ${colors.blue700};
      border: solid 1px ${colors.blue700};
  
      :hover,
      :focus {
        background-color: ${colors.blue600};
  
      `}

    ${props.buttonType &&
    props.buttonType === 'secondary' &&
    css`
      color: ${colors.blue600};
      border: solid 1px ${colors.blue600};
      background-color: ${colors.white};

      :hover,
      :focus {
        background-color: ${colors.blue100};

    `}
  `
);

export const LoadingWrapper = styled.div``;
