import { css, keyframes } from '@emotion/react';

export const FadeInKeyframes = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

export const FadeOutKeyframes = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
`;

export const getFadeInStyle = (duration: number) => css`
  animation: ${FadeInKeyframes} ${duration}ms forwards;
`;

export const getFadeOutStyle = (duration: number) => css`
  animation: ${FadeOutKeyframes} ${duration}ms forwards;
`;

export const getFadeInOutAnimation = (on: boolean, duration: number) => css`
  ${on
    ? getFadeInStyle(duration)
    : getFadeOutStyle(duration)}
`;

export const getEllipsisStyle = (line: number) => css`
  display: -webkit-box;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
`;
