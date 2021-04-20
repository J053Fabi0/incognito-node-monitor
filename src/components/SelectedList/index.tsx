import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import Row from '../Row';

export interface ItemSelectedProps {
    title: string;
    link?: string;
}

interface IProps {
    data: ItemSelectedProps[];
    selectedIndex: number;
    onSelect: (item: ItemSelectedProps) => void;
}

const Wrapper = styled(Row)`
    justify-content: flex-end;
`;

const WrapperLink = styled.div<{ selected: boolean }>`
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.text4};
    font-size: 15px;
    width: fit-content;
    margin-left: 6px;
    font-weight: 500;
    border-radius: 17px;
    padding: 6px 15px;
    border: none;
    background-color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
        selected ? theme.black : theme.white};
    color: ${({ selected, theme }: { selected: boolean; theme: ITheme }) =>
        selected ? theme.white : 'rgba(0, 0, 0, 0.65)'};
    ${({ theme }) => theme.mediaWidth.upToSmall`
        padding: 4px 10px;
        font-size: 11px;
        text-align: center;
    `}
`;

const SelectedList = (props: IProps) => {
    const { data, selectedIndex, onSelect } = props;
    const renderItem = (item: ItemSelectedProps, index: number) => {
        return (
            <WrapperLink
                selected={index === selectedIndex}
                onClick={() => {
                    onSelect && onSelect(item);
                }}
                key={item?.title}
            >
                {item?.title}
            </WrapperLink>
        );
    };
    return <Wrapper className="wrapper-selection-list">{data.map(renderItem)}</Wrapper>;
};

export default memo(SelectedList);
