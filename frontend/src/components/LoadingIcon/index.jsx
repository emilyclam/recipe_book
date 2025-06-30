import React from "react";

import { LoadingContainer, Icon } from './Styles';

const LoadingIcon = () => {
  return (
    <LoadingContainer>
      <Icon src="/load-icon.png" alt="loading icon" />
    </LoadingContainer>
  );
}

export default LoadingIcon;