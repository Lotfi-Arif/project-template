import React from 'react';
import { Svg } from '@/components/styles/svg';

export const TrashIcon = () => {
  return (
    <Svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      css={{
        '& path': {
          fill: '$accents6',
        },
      }}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM11.65 10.35C11.85 10.15 12.16 10.15 12.36 10.35L16 14H14V18H10V14H8L11.65 10.35ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z'
        fill='#969696'
      />
    </Svg>
  );
};
