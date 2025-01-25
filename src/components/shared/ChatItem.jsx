import { memo } from "react";

import { Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";

// styled components
import { LinkCompStyled } from "../styles/StyledComponents";

// child components
import AvatarCard from "./AvatarCard";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat,
}) => {
  return (
    <LinkCompStyled
      sx={{
        padding: "0",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
        }}
      >
        <AvatarCard avatar={avatar} isOnline={isOnline} />

        <Stack>
          <Typography >{name}</Typography>
          {newMessageAlert && (
            <Typography style={{ fontStyle: "italic", fontSize: "14px" }}>
              {newMessageAlert.count} New Message{" "}
            </Typography>
          )}
        </Stack>
      </motion.div>
    </LinkCompStyled>
  );
};

export default memo(ChatItem);
