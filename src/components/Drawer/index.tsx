import React, { memo } from 'react';
import 'src/components/Drawer/drawer.scss';
import { Drawer } from 'antd';
import { HeaderTabs } from '../Header';
import { ItemSelectedProps } from '../SelectedList';
import { TextMedium, TextBold } from '../Text';

interface IProps {
    visible: boolean;
    selectedIndex: number;
    onSelect: (item: ItemSelectedProps) => void;
}

const MobileDrawer = (props: IProps) => {
    const { visible, selectedIndex, onSelect } = props;
    const renderItem = (item: ItemSelectedProps, index: number) => {
        const component =
            index === selectedIndex ? (
                <TextBold textAlign="center" marginRight="20px" height="50px">
                    {item.title}
                </TextBold>
            ) : (
                <TextMedium textAlign="center" color="text4" marginRight="20px" height="50px">
                    {item.title}
                </TextMedium>
            );
        return (
            <div key={item.title} onClick={() => onSelect && onSelect(item)}>
                {component}
            </div>
        );
    };
    return (
        <Drawer
            className="ant-drawer-container"
            placement="right"
            closable={false}
            visible={visible}
            key="right"
            width="100%"
            style={{ marginTop: 80 }}
        >
            <div style={{ marginTop: 50 }}>{HeaderTabs.map(renderItem)}</div>
        </Drawer>
    );
};

export default memo(MobileDrawer);
