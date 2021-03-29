import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { searchSelector } from 'src/modules/NodeMonitor/components/Table/Table.selector';
import { actionSubmitSearch, actionUpdateSearchValue } from 'src/modules/NodeMonitor/components/Table/Table.actions';
import { TextareaAutosize, Button } from '@material-ui/core';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .text-area {
        width: 100%;
        height: 140px !important;
        font-size: 18px;
        padding: 10px;
        border: 1px solid ${({ theme }: { theme: ITheme }) => theme.border2};
    }
    .btn-submit {
        text-transform: none;
        margin-top: 10px;
        margin-bottom: 30px;
        width: 80px;
        align-self: flex-end;
        background-color: black;
        color: white;
        border-radius: 8px;
        :hover {
            background-color: black;
            opacity: 0.8;
        }
    }
`;

const SearchRow = () => {
    const dispatch = useDispatch();
    const search = useSelector(searchSelector);

    const onKeyChange = React.useCallback(
        (e) => {
            if (!e || !e.target || !dispatch) return;
            const { value } = e.target;
            dispatch(actionUpdateSearchValue({ search: value }));
        },
        [dispatch],
    );

    const onSubmitPress = () => {
        dispatch(actionSubmitSearch());
    };

    return (
        <Wrapper>
            <TextareaAutosize className="text-area" value={search} onChange={onKeyChange} />
            <Button className="btn-submit" variant="contained" onClick={onSubmitPress}>
                Submit
            </Button>
        </Wrapper>
    );
};

export default memo(SearchRow);