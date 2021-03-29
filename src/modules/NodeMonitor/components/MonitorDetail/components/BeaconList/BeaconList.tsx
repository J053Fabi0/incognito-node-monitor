import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import Card from '@material-ui/core/Card';
import { TextBold, TextMedium } from 'src/components';
import { IBeacon, IShard } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.interface';
import { isEmpty } from 'lodash';
import enhance from './BeaconList.enhance';

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

interface IProps {
    beacon: IBeacon;
    shards: IShard[];
}

const BeaconList = memo((props: IProps & any) => {
    const { beacon, shards } = props;
    const renderItem = (item: any, index: number) => {
        return (
            <RowWrapper isEven={index % 2 === 0}>
                <TextBold>{item?.name}</TextBold>
                <TextMedium>{item?.blockHeight}</TextMedium>
                <TextMedium>{item?.message}</TextMedium>
            </RowWrapper>
        );
    };
    if (isEmpty(beacon) || isEmpty(shards)) return null;
    return (
        <Card>
            <Styled>
                {renderItem(beacon, 0)}
                {shards.map(renderItem)}
            </Styled>
        </Card>
    );
});

export default enhance(BeaconList);
