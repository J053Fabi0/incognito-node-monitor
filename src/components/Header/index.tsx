import React from 'react';
import styled from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { TextBold } from 'src/components';

const HeaderFrame = styled.div``;

const WrapLogo = styled(Row)`
    cursor: pointer;
    margin: 30px 0 0 30px;
    width: fit-content;
`;

const Header = React.memo(() => {
    return (
        <HeaderFrame>
            <WrapLogo>
                <AppLogo />
                <TextBold fontSize={20} marginLeft={10}>
                    Incognito
                </TextBold>
            </WrapLogo>
        </HeaderFrame>
    );
});

export default Header;
