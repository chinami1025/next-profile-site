import React, { FC } from 'react';

type Props = {
  style?: string;
  title: string;
};

const Header: FC<Props> = (props) => {
  return (
    <div
      className={
        props.style
          ? props.style
          : 'w-full lg:h-48 text-center grid text-6xl drop-shadow-lg items-center mb-10 mt-5'
      }
    >
      {props.title}
    </div>
  );
};

export default Header;
