import React from 'react';
import styled from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';
import SelectedList, { ItemSelectedProps } from 'src/components/SelectedList';
import { isEmpty } from 'lodash';

export const HeaderFrame = styled(Row)`
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    `}
    .wrapper-selection-list {
        padding: 30px 30px 0 30px;
    }
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

const HeaderTabs: ItemSelectedProps[] = [
    { title: 'Validator' },
    { title: 'Wallet', link: 'https://incognito.org' },
    { title: 'FAQs', link: 'https://incognito.org/faq' },
    { title: 'About you', link: 'https://incognito.org/about-you' },
    { title: 'About us', link: 'https://we.incognito.org/' },
];

const Header = React.memo(() => {
    if (getMiningPublicKey()) return null;
    const selectedIndex = 0;

    const onSelectedHeaderTab = (item: ItemSelectedProps) => {
        if (window && !isEmpty(item.link)) window.open(item.link);
    };
    return (
        <HeaderFrame>
            <HeaderFrameRow>
                <WrapLogo>
                    <AppLogo />
                </WrapLogo>
            </HeaderFrameRow>
            <SelectedList data={HeaderTabs} selectedIndex={selectedIndex} onSelect={onSelectedHeaderTab} />
        </HeaderFrame>
    );
});

export default Header;
