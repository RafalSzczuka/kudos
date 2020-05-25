import React from "react";
import { MentionsInput, Mention } from "react-mentions";
import mentionStyle from "../mentionStyle";
import users from "../../../../database/users";

const TextArea = ({ post, postChange }) => {
  return (
    <label htmlFor="post">
      Treść posta nad kudosem
      <MentionsInput
        value={post}
        onChange={postChange}
        maxLength={200}
        style={mentionStyle}
        placeholder="Wpisz treść podziękowań ..."
      >
        <Mention
          trigger="@"
          data={users}
          style={{
            backgroundColor: "#daf4fa",
          }}
          markup="<span>@__display__</span>"
          displayTransform={(id, display) => `@${display}`}
          appendSpaceOnAdd={true}
        />
      </MentionsInput>
    </label>
  );
};

export default TextArea;
