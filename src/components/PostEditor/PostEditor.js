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
import SelectGroup from "./SelectGroup/SelectGroup";

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

      parsedPost: "",
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
      mention: this.mentionParser(this.state.mention, "[", "]"),
      group: this.state.group,
      likes: this.state.likes,
    };

    let storagePosts = JSON.parse(localStorage.getItem("posts"));
    storagePosts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(storagePosts));
  };

  mentionParser = (data, ...args) => {
    let result;
    result = data.split("");

    for (let i in result) {
      for (let j in args) {
        if (result[i] === args[j]) {
          result.splice(i, 1);
        }
      }
    }
    return result.join("");
  };

  spanParser = (data) => {
    let first = data.split("</span>");
    first = first.join("");

    let string = first.split("<span>");
    string = string.join("");

    return string;
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
      parsedPost: this.spanParser(e.target.value),
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
          <span className={PostEditorStyle.counter}>
            {this.state.parsedPost.length}/200
          </span>
          <LineInput
            mention={this.state.mention}
            mentionChange={this.handleMentionChange}
          />
          <KudosList onChange={this.handleRadioChange} />
          <SelectGroup onChange={this.handleGroupChange} />
        </form>
        <PublishBtn valid={this.state.valid} handler={this.handleSubmit} />
      </div>
    );
  }
}

export default PostEditor;
