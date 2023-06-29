import React, { FC } from 'react';
import { FaSchool, FaMobile } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';

type Props = {
  icon: string;
};

const TimelineIcon: FC<Props> = ({ icon }) => {
  if (icon === 'school') {
    return <FaSchool />;
  } else if (icon === 'mobile') {
    return <FaMobile />;
  } else {
    return <MdComputer />;
  }
};

export default TimelineIcon;
