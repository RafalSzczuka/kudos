import React from "react";
import { MentionsInput, Mention } from "react-mentions";
import mentionStyle from "../mentionStyle";
import users from "../../../../database/users";

const queryEmojis = async (query, callback) => {
  const url = new URL("https://emoji.getdango.com/api/emoji");
  url.searchParams.append("q", query);
  const { results } = await fetch(url).then((res) => res.json());
  callback(results.map(({ text }) => ({ id: text })));
};

const neverMatchingRegex = /($a)/;

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

        <Mention
          trigger=":"
          markup="__id__"
          regex={neverMatchingRegex}
          data={queryEmojis}
        />
      </MentionsInput>
    </label>
  );
};

export default TextArea;
