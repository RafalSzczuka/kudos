import React, { Component } from "react";
import { Link } from "react-router-dom";

import PostEditorStyle from "./PostEditor.module.scss";
import { MentionsInput, Mention } from "react-mentions";
import mentionStyle from "./mentionStyle";

// svg
import thanks from "../../assets/thanks.svg";
import congrats from "../../assets/congrats.svg";
import teamplay from "../../assets/teamplay.svg";
import positive from "../../assets/positive.svg";
import coworker from "../../assets/coworker.svg";
import outboundaries from "../../assets/outboundaries.svg";
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
    console.log(this.state.post);
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
          <label htmlFor="kudos">
            Wybierz kudos
            <div className={PostEditorStyle.kudosList}>
              <input
                type="radio"
                name="kudosElement"
                id="thanks"
                onChange={this.handleRadioChange}
                value="Dziękuję Ci"
              />
              <label htmlFor="thanks">
                <div className={PostEditorStyle.kudosListText}>
                  <p>Dziękuję Ci</p>
                  <p>Imię i nazwisko</p>
                </div>
                <div className={PostEditorStyle.kudosListImg}>
                  <img src={thanks} alt="Thank you" />
                </div>
              </label>

              <input
                type="radio"
                name="kudosElement"
                id="congrats"
                onChange={this.handleRadioChange}
                value="Gratulacje"
              />
              <label htmlFor="congrats">
                <div className={PostEditorStyle.kudosListText}>
                  <p>Gratulacje</p>
                  <p>Imię i nazwisko</p>
                </div>
                <div className={PostEditorStyle.kudosListImg}>
                  <img src={congrats} alt="Congratulations" />
                </div>
              </label>

              <input
                type="radio"
                name="kudosElement"
                id="teamplay"
                onChange={this.handleRadioChange}
                value="Gracz zespołowy"
              />
              <label htmlFor="teamplay">
                <div className={PostEditorStyle.kudosListText}>
                  <p>Gracz zespołowy</p>
                  <p>Imię i nazwisko</p>
                </div>
                <div className={PostEditorStyle.kudosListImg}>
                  <img src={teamplay} alt="Teamplay" />
                </div>
              </label>

              <input
                type="radio"
                name="kudosElement"
                id="positive"
                onChange={this.handleRadioChange}
                value="Pozytywny wpływ"
              />
              <label htmlFor="positive">
                <div className={PostEditorStyle.kudosListText}>
                  <p>Pozytywny wpływ</p>
                  <p>Imię i nazwisko</p>
                </div>
                <div className={PostEditorStyle.kudosListImg}>
                  <img src={positive} alt="Positive" />
                </div>
              </label>

              <input
                type="radio"
                name="kudosElement"
                id="coworker"
                onChange={this.handleRadioChange}
                value="Świetny współpracownik"
              />
              <label htmlFor="coworker">
                <div className={PostEditorStyle.kudosListText}>
                  <p>Świetny współpracownik</p>
                  <p>Imię i nazwisko</p>
                </div>
                <div className={PostEditorStyle.kudosListImg}>
                  <img src={coworker} alt="coworker" />
                </div>
              </label>

              <input
                type="radio"
                name="kudosElement"
                id="outboundaries"
                onChange={this.handleRadioChange}
                value="Przechodzisz samego (samą) siebie"
              />
              <label htmlFor="outboundaries">
                <div className={PostEditorStyle.kudosListText}>
                  <p>Przechodzisz samego (samą) siebie</p>
                  <p>Imię i nazwisko</p>
                </div>
                <div className={PostEditorStyle.kudosListImg}>
                  <img src={outboundaries} alt="outboundaries" />
                </div>
              </label>
            </div>
          </label>
        </form>
        <button className={PostEditorStyle.publishBtn}>Opublikuj</button>
      </div>
    );
  }
}

export default PostEditor;
