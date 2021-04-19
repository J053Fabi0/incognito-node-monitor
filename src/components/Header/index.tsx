import React from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import { AppLogo } from 'src/components/Icons';
import { getMiningPublicKey } from 'src/modules/NodeMonitor/components/Table/Table.utils';
import SelectedList, { ItemSelectedProps } from 'src/components/SelectedList';
import { isEmpty } from 'lodash';
import MobileDrawer from 'src/components/Drawer';
import MenuIcon from 'src/components/Icons/Menu/index';
import CloseIcon from 'src/components/Icons/Close/index';
import HeaderTitle from '../HeaderTitle';

export const HeaderFrame = styled(Row)`
    justify-content: space-between;
    align-items: center;
    .small-screen-right {
        display: none;
    }
    .wrapper-selection-list {
        display: flex;
    }
    ${({ theme }: { theme: ITheme }) => theme.mediaWidth.upToSmall`
        .small-screen-right {
            display: flex;
        }
        .wrapper-selection-list {
           display: none;
        }
    `}
    .wrapper-selection-list {
        padding: 30px 0 0;
    }
    .menu-icon {
        margin-top: 22px;
        padding: 20px 0 20px 10px;
    }
    .close-icon {
        margin-top: 22px;
        padding: 20px 0 20px 10px;
    }
`;

export const HeaderFrameRow = styled(Row)<{ displayEnd?: boolean }>`
    justify-content: ${({ displayEnd }) => (displayEnd ? `flex-end` : 'space-between')};
    width: fit-content;
    padding: 30px 0 0;
`;

const WrapLogo = styled(Row)`
    cursor: pointer;
    width: fit-content;
`;

export const HeaderTabs: ItemSelectedProps[] = [
    { title: 'Validator' },
    { title: 'Wallet', link: 'https://incognito.org' },
    { title: 'FAQs', link: 'https://incognito.org/faq' },
    { title: 'About you', link: 'https://incognito.org/about-you' },
    { title: 'About us', link: 'https://we.incognito.org/' },
];

const Header = React.memo(() => {
    const [selectedIndex] = React.useState(0);
    const [visibleModal, setVisibleModal] = React.useState(false);

    const onSelectedHeaderTab = (item: ItemSelectedProps) => {
        if (window && !isEmpty(item.link)) return window.open(item.link);
        setVisibleModal(false);
    };

    const onChangeModalState = () => setVisibleModal(!visibleModal);

    const renderMenuList = () => {
        return (
            <>
                <div className="small-screen-right">
                    {visibleModal ? (
                        <CloseIcon onClick={onChangeModalState} />
                    ) : (
                        <MenuIcon onClick={onChangeModalState} />
                    )}
                    <MobileDrawer visible={visibleModal} selectedIndex={selectedIndex} onSelect={onSelectedHeaderTab} />
                </div>
                <SelectedList data={HeaderTabs} selectedIndex={selectedIndex} onSelect={onSelectedHeaderTab} />
            </>
        );
    };

    if (getMiningPublicKey()) return null;
    return (
        <div style={{ marginLeft: 30, marginRight: 30 }}>
            <HeaderFrame>
                <HeaderFrameRow>
                    <WrapLogo>
                        <AppLogo />
                    </WrapLogo>
                </HeaderFrameRow>
                {renderMenuList()}
            </HeaderFrame>
            <HeaderTitle />
        </div>
    );
});

export default Header;
