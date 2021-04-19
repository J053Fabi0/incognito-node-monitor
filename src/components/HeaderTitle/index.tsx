import React, { memo } from 'react';
import { TextMedium } from 'src/components';
import styled from 'styled-components';

const Wrapper = styled.div`
    .header-title {
        margin-top: 30px;
        font-size: 20px;
    }
`;
const HeaderTitle = () => {
    return (
        <Wrapper>
            <TextMedium className="header-title" fontSize="15px" textAlign="center">
                See the health and activity of all Incognito nodes on the network.
            </TextMedium>
        </Wrapper>
    );
};

export default memo(HeaderTitle);
