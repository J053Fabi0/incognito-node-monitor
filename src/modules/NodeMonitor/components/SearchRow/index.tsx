import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import Row from 'src/components/Row';
import { TextBold } from 'src/components';
import { useDispatch, useSelector } from 'react-redux';
import { searchSelector } from 'src/modules/NodeMonitor/components/Table/Table.selector';
import { isEmpty } from 'lodash';
import { CloseIcon } from 'src/components/Icons';
import {
    actionHandleClearSearch,
    actionSearch,
    actionUpdateSearchValue,
} from 'src/modules/NodeMonitor/components/Table/Table.actions';

const Wrapper = styled(Row)`
    position: relative;
    max-width: 400px;
    height: 35px;
    .close-icon {
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

const InputSearch = styled.input`
    display: flex;
    flex: 1;
    height: 100%;
    font-size: 16px;
    padding: 5px 30px 5px 10px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid ${({ theme }: { theme: ITheme }) => `${theme.border1}`};
`;

const SearchRow = () => {
    const dispatch = useDispatch();
    const search = useSelector(searchSelector);

    const inputValue = React.useMemo(() => {
        if (isEmpty(search) || search.length > 1) return '';
        const value = search[0];
        return value.publicKey || '';
    }, [search]);

    const onKeyChange = React.useCallback(
        (e) => {
            if (!e || !e.target || !dispatch) return;
            const { value } = e.target;
            dispatch(actionUpdateSearchValue({ search: [{ publicKey: value }] }));
        },
        [dispatch],
    );

    const onKeyDown = React.useCallback(
        (e) => {
            if (e.code !== 'Enter') return;
            dispatch(actionSearch());
        },
        [dispatch],
    );

    const handleClearSearch = () => {
        dispatch(actionHandleClearSearch());
    };

    return (
        <Wrapper>
            <TextBold fontSize={16} marginRight={10}>
                Search:
            </TextBold>
            <InputSearch value={inputValue} onChange={onKeyChange} onKeyDown={onKeyDown} />
            {!isEmpty(inputValue) && <CloseIcon onClick={handleClearSearch} />}
        </Wrapper>
    );
};

SearchRow.propTypes = {};

export default memo(SearchRow);
