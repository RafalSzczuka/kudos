import React from "react";
import { MentionsInput, Mention } from "react-mentions";
import mentionStyle from "../mentionStyle";
import users from "../../../../database/users";

const LineInput = ({ mention, mentionChange }) => {
  return (
    <label htmlFor="mention">
      Wybierz osobę, której przyznajesz kudos
      <MentionsInput
        value={mention}
        onChange={mentionChange}
        maxLength={60}
        style={mentionStyle}
        placeholder="Wpisz imię i nazwisko lub wybierz '@' osobę ..."
        singleLine={true}
      >
        <Mention
          trigger="@"
          data={users}
          style={{
            backgroundColor: "#daf4fa",
          }}
          displayTransform={(id, display) => ` ${display}`}
          markup="__display__ "
        />
      </MentionsInput>
    </label>
  );
};

export default LineInput;
