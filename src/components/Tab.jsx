import React from 'react';

const Tab = ({ title, onClick }) => {
  return <div onClick={() => onClick()}>{title}</div>;
};

export default Tab;
