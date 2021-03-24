import React from 'react';
import styled from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { TextBold } from 'src/components';
import { useSelector } from 'react-redux';
import { appTranslateSelector } from 'src/configs';
import SearchRow from 'src/modules/NodeMonitor/components/SearchRow';

const HeaderFrame = styled(Row)`
    justify-content: space-between;
    margin-bottom: 30px;
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

const Header = React.memo(() => {
    const appTranslate = useSelector(appTranslateSelector);
    return (
        <HeaderFrame>
            <WrapLogo>
                <AppLogo />
                <TextBold fontSize={20} marginLeft={10}>
                    {appTranslate.company}
                </TextBold>
            </WrapLogo>
            <SearchRow />
        </HeaderFrame>
    );
});

export default Header;
