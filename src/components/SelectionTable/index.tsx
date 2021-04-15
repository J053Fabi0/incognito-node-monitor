import React, { memo } from 'react';
import { Wrapper, WrapLink, StyledNavLink } from './styled';

const SelectionTable = () => {
    return (
        <Wrapper>
            <WrapLink>
                <StyledNavLink id="stake-nav-link" to="/node-monitor">
                    Monitor a Node
                </StyledNavLink>
                <StyledNavLink id="stake-nav-1" to="/red-list">
                    Inactive List
                </StyledNavLink>
            </WrapLink>
        </Wrapper>
    );
};

export default memo(SelectionTable);
