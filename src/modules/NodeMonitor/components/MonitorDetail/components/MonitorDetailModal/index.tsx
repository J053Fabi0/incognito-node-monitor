import React, { memo } from 'react';
import Modal from 'src/components/Modal';
import { CloseWrapper, ModalWrapper } from 'src/modules/NodeMonitor/components/Table/styled';
import { CloseIcon } from 'src/components/Icons';
import MonitorDetail from 'src/modules/NodeMonitor/components/MonitorDetail';
import { Row } from 'antd';
import { TextMedium } from 'src/components';
import { useSelector } from 'react-redux';
import { monitorDetailSelector } from 'src/modules/NodeMonitor/components/MonitorDetail/MonitorDetail.selector';

interface IProps {
    visible: boolean;
    onClose: () => void;
}

const MonitorDetailModal = ({ visible, onClose }: IProps) => {
    const { node } = useSelector(monitorDetailSelector);
    return (
        <Modal isOpen={visible} onDismiss={onClose}>
            <ModalWrapper>
                <Row className="header-row">
                    <TextMedium color="text1" fontSize="18px">
                        {node?.name || ''}
                    </TextMedium>
                    <CloseWrapper onClick={onClose}>
                        <CloseIcon width="16" height="16" />
                    </CloseWrapper>
                </Row>
                <MonitorDetail />
            </ModalWrapper>
        </Modal>
    );
};

export default memo(MonitorDetailModal);
