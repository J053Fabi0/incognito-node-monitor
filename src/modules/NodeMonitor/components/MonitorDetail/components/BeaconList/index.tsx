import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import Card from '@material-ui/core/Card';
import { TextBold, TextMedium } from 'src/components';

const data = [
    { title: 'Beacon', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 0', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 1', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 2', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 3', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 4', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 5', blockHeight: '1000', content: 'A minute ago (syncing)' },
    { title: 'Shard 6', blockHeight: '1000', content: 'A minute ago (syncing)' },
];

const Styled = styled.div`
    > div:last-child {
        border-bottom-width: 0;
    }
`;

const RowWrapper = styled(Row)<{ isEven: boolean }>`
    width: 100%;
    justify-content: space-between;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom: 1px solid ${({ theme }: { theme: ITheme }) => `${theme.border2}`};
    padding: 10px;
    background-color: ${({ theme, isEven }: { theme: ITheme; isEven: boolean }) =>
        isEven ? 'transparent' : theme.darkRow};
`;

const BeaconList = () => {
    const renderItem = (item: any, index: number) => {
        return (
            <RowWrapper isEven={index % 2 === 0}>
                <TextBold>{item.title}</TextBold>
                <TextMedium>{item.blockHeight}</TextMedium>
                <TextMedium>{item.content}</TextMedium>
            </RowWrapper>
        );
    };
    return (
        <Card>
            <Styled>{data.map(renderItem)}</Styled>
        </Card>
    );
};

export default memo(BeaconList);
