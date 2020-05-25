import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostEditorStyle from "./PostEditor.module.scss";
import { MentionsInput, Mention } from "react-mentions";
import mentionStyle from "./mentionStyle";
import KudosList from "../KudosList/KudosList";
import PublishBtn from "../PublishBtn/PublishBtn";
import hands from "../../assets/hands.svg";
import close from "../../assets/close.svg";
import users from "../../database/users";

const activeUser = users.filter((user) => user.active)[0];

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: activeUser.display,
        img: activeUser.avatar,
      },
      post: "",
      mention: "",
      kudosTitle: "",
      kudosImg: "",
      group: "",
      likes: 0,

      valid: false,
    };
  }

  handleSubmit = () => {
    if (this.state.valid) {
      this.addPost();
      window.location.reload();
    }
  };

  addPost = () => {
    let newPost = {
      user: this.state.user.name,
      img: this.state.user.img,
      timestamp: new Date(),
      txt: this.state.post,
      kudos: this.state.kudosTitle,
      kudosImg: this.state.kudosImg,
      mention: this.state.mention,
      group: this.state.group,
      likes: this.state.likes,
    };

    let storagePosts = JSON.parse(localStorage.getItem("posts"));
    storagePosts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(storagePosts));
  };

  handleRadioChange = (e) => {
    let img = e.target.attributes.getNamedItem("data-img").value;

    this.setState({
      kudosTitle: e.target.value,
      kudosImg: img,
    });
  };

  handleGroupChange = (e) => {
    this.setState({
      group: e.target.value,
    });
  };

  handlePostChange = (e) => {
    this.setState({
      post: e.target.value,
    });
  };

  render() {
    return (
      <div className={PostEditorStyle.container}>
        <div className={PostEditorStyle.header}>
          <img className={PostEditorStyle.icon} src={hands} alt="Kudos icon" />
          <Link className={PostEditorStyle.close} to="/">
            <img src={close} alt="close" />
          </Link>

          <h2>utwórz kudos</h2>
        </div>
        <form noValidate>
          <label htmlFor="post">
            Treść posta nad kudosem
            <MentionsInput
              value={this.state.post}
              onChange={this.handlePostChange}
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
                markup="<span>@__display__</span>"
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
                displayTransform={(id, display) => ` ${display}`}
                markup="__display__ "
              />
            </MentionsInput>
          </label>
          <KudosList onChange={this.handleRadioChange} />
          <label htmlFor="group" className={PostEditorStyle.group}>
            Wybierz grupę
            <select
              className={PostEditorStyle.customSelect}
              name="group"
              onChange={this.handleGroupChange}
            >
              <option value="">wybierz grupę</option>
              <option value="Białystok">Białystok</option>
              <option value="Marketing">Marketing</option>
              <option value="Backend">Backend</option>
            </select>
          </label>
        </form>
        <PublishBtn valid={this.state.valid} handler={this.handleSubmit} />
      </div>
    );
  }
}

export default PostEditor;
