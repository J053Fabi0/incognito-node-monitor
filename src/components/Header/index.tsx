import React from 'react';
import styled from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { TextBold } from 'src/components';
import { useSelector } from 'react-redux';
import { appTranslateSelector } from 'src/configs';
import SearchRow from 'src/modules/NodeMonitor/components/SearchRow';
import { getURLPathname } from 'src/modules/NodeMonitor/components/Table/Table.utils';
import PATH from 'src/modules/routesPathName';

const HeaderFrame = styled(Row)`
    justify-content: space-between;
    margin-bottom: 30px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

const WrapRight = styled.div`
    min-width: 350px;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        margin-top: 15px;
        width: 100%;
    `};
`;

const Header = React.memo(() => {
    const appTranslate = useSelector(appTranslateSelector);
    const RightComponent = React.useMemo(() => {
        const pathName = getURLPathname();
        let component = null;
        switch (pathName) {
            case PATH.MONITOR_PATH_NAME:
            case PATH.HOME_PATH_NAME: {
                component = <SearchRow />;
                break;
            }
            default: {
                console.debug('Nothing to show');
            }
        }
        return component;
    }, []);
    return (
        <HeaderFrame>
            <WrapLogo>
                <AppLogo />
                <TextBold fontSize={20} marginLeft={10}>
                    {appTranslate.company}
                </TextBold>
            </WrapLogo>
            <WrapRight>{RightComponent}</WrapRight>
        </HeaderFrame>
    );
});

export default Header;
