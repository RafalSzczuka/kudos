import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostEditorStyle from "./PostEditor.module.scss";
import { MentionsInput, Mention } from "react-mentions";
import mentionStyle from "./mentionStyle";

import KudosList from "../KudosList/KudosList";

import hands from "../../assets/hands.svg";
import close from "../../assets/close.svg";

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      mention: "",
      kudosElement: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleRadioChange = (e) => {
    this.setState({
      kudosElement: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className={PostEditorStyle.header}>
          <img className={PostEditorStyle.icon} src={hands} alt="Kudos icon" />
          <Link className={PostEditorStyle.close} to="/">
            <img src={close} alt="close" />
          </Link>

          <h2>utwórz kudos</h2>
        </div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="post">
            Treść posta nad kudosem
            <MentionsInput
              value={this.state.post}
              onChange={(event) => this.setState({ post: event.target.value })}
              maxLength={200}
              style={mentionStyle}
              placeholder="Wpisz treść podziękowań ..."
            >
              <Mention
                trigger="@"
                data={this.props.users}
                style={{
                  backgroundColor: "#daf4fa",
                }}
                markup="@[__display__]"
                displayTransform={(id, display) => `@${display}`}
                appendSpaceOnAdd={true}
              />
            </MentionsInput>
          </label>
          <label htmlFor="mention">
            Wybierz osobę, której przyznajesz kudos
            <MentionsInput
              value={this.state.mention}
              onChange={(event) =>
                this.setState({ mention: event.target.value })
              }
              maxLength={60}
              style={mentionStyle}
              placeholder="Wpisz imię i nazwisko lub wybierz '@' osobę ..."
              singleLine={true}
            >
              <Mention
                trigger="@"
                data={this.props.users}
                style={{
                  backgroundColor: "#daf4fa",
                }}
                markup="@[__display__]"
              />
            </MentionsInput>
          </label>
          <KudosList onChange={this.handleRadioChange} />
        </form>
        <button className={PostEditorStyle.publishBtn}>Opublikuj</button>
      </div>
    );
  }
}

export default PostEditor;
