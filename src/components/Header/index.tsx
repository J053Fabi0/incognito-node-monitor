import React from 'react';
import styled from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';

export const HeaderFrame = styled(Row)`
    justify-content: space-between;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
`;

export const HeaderFrameRow = styled(Row)<{ displayEnd?: boolean }>`
    justify-content: ${({ displayEnd }) => (displayEnd ? `flex-end` : 'space-between')};
    padding: 30px 30px 0 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        align-items: flex-start;
    `}
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

const Header = React.memo(() => {
    if (getMiningPublicKey()) return null;
    return (
        <HeaderFrame>
            <HeaderFrameRow>
                <WrapLogo>
                    <AppLogo />
                </WrapLogo>
            </HeaderFrameRow>
        </HeaderFrame>
    );
});

export default Header;
