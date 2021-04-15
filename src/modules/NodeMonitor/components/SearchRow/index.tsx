import React, { memo } from 'react';
import styled, { ITheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { searchSelector } from 'src/modules/NodeMonitor/components/Table/Table.selector';
import { actionSubmitSearch, actionUpdateSearchValue } from 'src/modules/NodeMonitor/components/Table/Table.actions';
import Row from 'src/components/Row';
import Button from 'src/components/Button';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Wrapper = styled(Row)`
    display: flex;
    justify-content: flex-end;
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
    `}
    .btn-container {
        width: 120px;
        ${({ theme }) => theme.mediaWidth.upToSmall`
            margin: 12px 0;
        `}
    }
`;

const WrapperInput = styled(Row)`
    ${({ theme }) => theme.mediaWidth.upToSmall`
        flex-direction: column;
    `}
    input {
        height: 40px;
        border: 1px solid ${({ theme }: { theme: ITheme }) => theme.border1};
        border-radius: 8px;
        padding: 10px;
        color: ${({ theme }: { theme: ITheme }) => theme.text1};
        font-size: 14px;
        line-height: 21px;
    }
    .inputName {
        flex-basis: 20%;
        ${({ theme }) => theme.mediaWidth.upToSmall`
          width: inherit;
        `}
    }
    .inputMiningKey {
        margin: 0 30px;
        flex-basis: 80%;
        ${({ theme }) => theme.mediaWidth.upToSmall`
            width: inherit;
            margin-left: 0;
            margin-right: 0;
            margin-top: 10px;
        `}
    }
`;

const SearchRow = () => {
    const dispatch = useDispatch();
    const search = useSelector(searchSelector);
    const [open, setOpen] = React.useState(false);

    const onKeyChange = React.useCallback(
        (e) => {
            if (!e || !e.target || !dispatch) return;
            const { value } = e.target;
            dispatch(actionUpdateSearchValue({ search: value }));
        },
        [dispatch],
    );

    const onChangeName = () => {};

    const onChangeMiningKey = () => {};

    const onSubmitPress = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 2000);
        dispatch(actionSubmitSearch());
    };

    return (
        <Wrapper>
            <WrapperInput>
                <input className="inputName" placeholder="Node name" onChange={onChangeName} />
                <input
                    className="inputMiningKey"
                    placeholder="Enter your validator public key "
                    onChange={onChangeMiningKey}
                />
            </WrapperInput>
            <Button title="Check" disabled={false} onClick={onSubmitPress} />
            <Snackbar open={open}>
                <Alert
                    onClose={() => {
                        setOpen(false);
                    }}
                    severity="success"
                >
                    Add node success!
                </Alert>
            </Snackbar>
        </Wrapper>
    );
};

export default memo(SearchRow);
