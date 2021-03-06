import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PostEditorStyle from "./PostEditor.module.scss";
import KudosList from "../KudosList/KudosList";
import PublishBtn from "../PublishBtn/PublishBtn";
import users from "../../database/users";
import TextArea from "./MentionInputs/TextArea/TextArea";
import LineInput from "./MentionInputs/LineInput/LineInput";
import SelectGroup from "./SelectGroup/SelectGroup";
import Header from "./Header/Header";
import ValidationMessage from "../ValidationMessage/ValidationMessage";

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
      groupIco: "",
      likes: 0,
      parsedPost: "",

      valid: false,
      errors: {
        post: false,
        mention: false,
        kudos: false,
        group: false,
      },
    };
  }

  errorMessages = {
    errorPost: "Wpisz co najmniej 10 znaków",
    errorMention: "Wpisz co najmniej 10 znaków",
    errorKudos: "Wybierz kudos",
    errorGroup: "Wybierz grupę",
  };

  formValidator = () => {
    let post = false,
      mention = false,
      kudos = false,
      group = false,
      correct = false;

    if (this.state.parsedPost.length >= 10) {
      post = true;
    }
    if (this.state.mention.length >= 10) {
      mention = true;
    }
    if (this.state.kudosTitle !== "") {
      kudos = true;
    }
    if (this.state.group !== "") {
      group = true;
    }
    if (post & mention & kudos & group) {
      correct = true;
      this.setState({
        valid: true,
      });
    }
    return { post, mention, kudos, group, correct };
  };

  // submit button simulates loading new post (in fact it's instantly). It can be changed by removing setTimeout.
  // after validation returns true, app switches to homepage with posts feed, so state in post editor clears by itself.
  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidator();

    if (validation.correct) {
      this.addPost();

      setTimeout(() => this.props.history.push("/"), 1200);
    } else {
      this.setState({
        errors: {
          post: !validation.post,
          mention: !validation.mention,
          kudos: !validation.kudos,
          group: !validation.group,
        },
      });
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
      groupIco: this.state.groupIco,
      likes: this.state.likes,
    };

    let storagePosts = JSON.parse(localStorage.getItem("posts"));
    storagePosts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(storagePosts));
  };

  // Mentions have their own markup (default or custom, they're required).
  // To provide clear mention, without decorators such as "[" or "]" raw string needs to be parsed.
  // Function below can parse string by any special character provided as ...args argument.
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

  // Same as below - markup needs to be erased due to characters counter in post editor.
  // This custom mention markup wraps mention by <span> tag (to easily style them).
  // But to proper characters coutn, they need to be eradicated.
  spanParser = (data) => {
    let first = data.split("</span>");
    first = first.join("");

    let string = first.split("<span>");
    string = string.join("");

    return string;
  };

  // Handlers are atomized to every input due to error state checking.
  // To interactive check if input value are not longer false, it checks after every target value change, and updates error state.
  handleRadioChange = (e) => {
    let img = e.target.attributes.getNamedItem("data-img").value;

    this.setState({
      kudosTitle: e.target.value,
      kudosImg: img,
      errors: { ...this.state.errors, kudos: false },
    });
  };

  handleGroupChange = (e) => {
    this.setState({
      group: e.value,
      groupIco: e.label.props.children[0].props.className,
      errors: { ...this.state.errors, group: false },
    });
  };

  handlePostChange = (e) => {
    let string = this.spanParser(e.target.value);
    if (string.length >= 10) {
      this.setState({
        errors: { ...this.state.errors, post: false },
      });
    }
    this.setState({
      post: e.target.value,
      parsedPost: string,
    });
  };

  handleMentionChange = (e) => {
    if (e.target.value.length >= 10) {
      this.setState({
        errors: { ...this.state.errors, mention: false },
      });
    }

    this.setState({
      mention: e.target.value,
    });
  };

  render() {
    const {
      errorPost,
      errorMention,
      errorKudos,
      errorGroup,
    } = this.errorMessages;
    const { post, mention, kudos, group } = this.state.errors;

    return (
      <div className={PostEditorStyle.container}>
        <Header />
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
          <PublishBtn valid={this.state.valid} handler={this.handleSubmit} />
        </form>

        {/* validator messages */}
        {post ? (
          <ValidationMessage
            message={errorPost}
            position={{ top: "70px", right: "32px" }}
          />
        ) : null}
        {mention ? (
          <ValidationMessage
            message={errorMention}
            position={{ top: "225px", right: "32px" }}
          />
        ) : null}
        {kudos ? (
          <ValidationMessage
            message={errorKudos}
            position={{ top: "332px", right: "32px" }}
          />
        ) : null}
        {group ? (
          <ValidationMessage
            message={errorGroup}
            position={{ bottom: "70px", left: "150px" }}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(PostEditor);
