import React, { Component } from "react";
import { Link } from "react-router-dom";
import PostEditorStyle from "./PostEditor.module.scss";
import KudosList from "../KudosList/KudosList";
import PublishBtn from "../PublishBtn/PublishBtn";
import hands from "../../assets/hands.svg";
import close from "../../assets/close.svg";
import users from "../../database/users";

import TextArea from "./MentionInputs/TextArea/TextArea";
import LineInput from "./MentionInputs/LineInput/LineInput";

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

      valid: true,
    };
  }

  handleSubmit = () => {
    if (this.state.valid) {
      this.addPost();
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

  handleMentionChange = (e) => {
    this.setState({
      mention: e.target.value,
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
          <TextArea post={this.state.post} postChange={this.handlePostChange} />
          <LineInput
            mention={this.state.mention}
            mentionChange={this.handleMentionChange}
          />
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
