import { Drawer } from "antd";
import { forwardRef, ForwardRefRenderFunction, memo, useRef, useState } from "react";

import { OverlayVisibleHandle, useOverlayVisible } from "@/hooks/useOverlayVisible";

import GroupMemberList from "./GroupMemberList";
import GroupMemberListHeader from "./GroupMemberListHeader";
import GroupSettings from "./GroupSettings";

// export interface GroupSettingProps {}

const GroupSetting: ForwardRefRenderFunction<OverlayVisibleHandle, unknown> = (
  _,
  ref,
) => {
  const [isPreviewMembers, setIsPreviewMembers] = useState(false);

  const { isOverlayOpen, closeOverlay } = useOverlayVisible(ref);

  return (
    <Drawer
      title={
        !isPreviewMembers ? (
          "设置"
        ) : (
          <GroupMemberListHeader back2Settings={() => setIsPreviewMembers(false)} />
        )
      }
      destroyOnClose
      placement="right"
      rootClassName="chat-drawer"
      onClose={closeOverlay}
      afterOpenChange={(visible) => {
        if (!visible) {
          setIsPreviewMembers(false);
        }
      }}
      open={isOverlayOpen}
      maskClassName="opacity-0"
      maskMotion={{
        visible: false,
      }}
      width={460}
      getContainer={"#chat-container"}
    >
      {!isPreviewMembers ? (
        <GroupSettings
          closeOverlay={closeOverlay}
          updateTravel={() => setIsPreviewMembers(true)}
        />
      ) : (
        <GroupMemberList />
      )}
    </Drawer>
  );
};

export default memo(forwardRef(GroupSetting));
