import React from 'react';
import isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import enhance from './TooltipContainer.enhance';
import { IProps } from './Tooltip.interface';
import Tooltip from './Tooltip';

const Styled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  pointer-events: none;
`;

const TooltipContainer = (props: IProps) => {
  const { tooltips } = props;

  if (isEmpty(tooltips)) {
    return null;
  }

  const renderContent = () => {
    return tooltips.map((item: any) => <Tooltip data={item} key={item.id} />);
  };

  return <Styled className="tooltip-wrapper">{renderContent()}</Styled>;
};

export default enhance(React.memo(TooltipContainer));
