import styled, { ITheme } from 'styled-components';

export const Styled = styled.div`
    padding: 30px;
    .card {
        height: 100%;
        overflow: auto;
    }
    .table-cell {
    }
    .table-row {
        cursor: pointer;
        :hover {
            background-color: ${({ theme }: { theme: ITheme }) => theme.hoverRow};
        }
    }
    .dark-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.darkRow};
    }
    .header-row {
        background-color: ${({ theme }: { theme: ITheme }) => theme.headerRow};
    }
    .wrap-loading {
        height: 100px;
    }
    .pagination {
        padding-left: 0;
        position: absolute;
        right: 15px;
    }
`;
