import React from "react";
import { BeaconList, CommitteeActivity } from "src/modules/NodeMonitor/components/MonitorDetail/components";
import { useSelector } from "react-redux";
import LoadingOverlay from "src/components/LoadingOverlay";
import { isEmpty } from "lodash";
import { Row } from "antd";
import { CopyIcon } from "src/components/Icons";
import copy from "copy-to-clipboard";
import { TextRegular } from "src/components";
import { MESSAGE_CONSTANTS } from "src/constants/App.constants";
import { Styled } from "./MonitorDetail.styled";
import { monitorDetailSelector } from "./MonitorDetail.selector";
import enhance from "./MonitorDetail.enhance";
import RowText from "../RowText";
import { getNodeRoleStatus } from "../Table/Table.utils";

interface IProps {
  isWebview: boolean;
}

const MonitorDetail = React.memo(({ isWebview }: IProps & any) => {
  const { node, fetching } = useSelector(monitorDetailSelector);
  const renderContent = () => (
    <>
      <BeaconList />
      <CommitteeActivity />
    </>
  );

  const renderRightMpk = () => {
    return (
      <Row>
        <TextRegular color="text4">{node?.ellipsisMpk}</TextRegular>
        <CopyIcon
          onClick={() => {
            copy(node?.publicKey || "");
          }}
        />
      </Row>
    );
  };

  const renderRightRole = () => {
    const { nodeRole, colorRole, committee, unStakeStatus } = getNodeRoleStatus(node) as any;
    return (
      <Row>
        <TextRegular color={colorRole}>{nodeRole}</TextRegular>
        {nodeRole === "Not stake" && node?.slashed && (
          <TextRegular ml="8px" color="red">
            Slashed
          </TextRegular>
        )}
        {!isEmpty(committee) && (
          <TextRegular color="text4" ml="8px">
            {committee}
          </TextRegular>
        )}
        {!isEmpty(unStakeStatus) && (
          <TextRegular color="text4" ml="8px">
            {unStakeStatus}
          </TextRegular>
        )}
      </Row>
    );
  };

  const renderRightStatus = () => {
    const status = node?.status;
    const color = node?.status === "Online" ? "#34C759" : node?.status === MESSAGE_CONSTANTS.offline ? "red1" : "text4";
    return <TextRegular color={color}>{status}</TextRegular>;
  };

  const renderRightVersion = () => {
    if (node?.status !== "Online") {
      return <TextRegular>-</TextRegular>;
    }
    let color = node?.oldVersion || !node?.version ? "#ff9500" : "#34C759";
    return <TextRegular color={color}>{node?.version || "-"}</TextRegular>;
  };

  const renderRightSyncState = () => {
    return <TextRegular color="text4">{node?.syncState}</TextRegular>;
  };

  return (
    <Styled isWebview={isWebview}>
      {!!node && (
        <div style={{ marginBottom: 25 }}>
          <RowText title="Validator public key" rightComponent={renderRightMpk()} />
          <RowText title="Status" rightComponent={renderRightStatus()} />
          <RowText title="Code version" rightComponent={renderRightVersion()} />
          <RowText title="Role" rightComponent={renderRightRole()} />
          <RowText
            title="Next event"
            rightComponent={<TextRegular color="text4">{node?.nextEventMsg.toLowerCase()}</TextRegular>}
          />
          <RowText title="Sync state" rightComponent={renderRightSyncState()} />
        </div>
      )}
      {fetching ? <LoadingOverlay /> : renderContent()}
    </Styled>
  );
});

export default enhance(MonitorDetail);
