import React, { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import postFooterStyle from "./postFooter.module.scss";

const PostFooter = ({ groupIco, group, likes }) => {
  let [counter, setCounter] = useState(0);
  return (
    <>
      <div className={postFooterStyle.footer}>
        <div className={postFooterStyle.group}>
          <div className={postFooterStyle.groupIcon}>
            <i className={groupIco}></i>
          </div>
          <span>{group}</span>
        </div>
        <div className={postFooterStyle.options}>
          <i
            className="fas fa-heart"
            onClick={() => setCounter(++counter)}
            data-tip="Lubię to!"
            data-place="left"
          ></i>
          <span>{(likes += counter)}</span>
          <i
            className="fas fa-comment-alt"
            data-tip="Dodaj komentarz"
            data-place="top"
          ></i>
          <span>0</span>
          <OverlayTrigger
            rootClose={true}
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id="popover-positioned-bottom">
                <Popover.Content className={postFooterStyle.popover}>
                  <div>
                    <i className="fas fa-edit"></i>
                    <span>Edytuj</span>
                  </div>
                  <div>
                    <i className="fas fa-share-alt"></i>
                    <span>Udostępnij</span>
                  </div>
                  <div>
                    <i className="fab fa-font-awesome-flag"></i>
                    <span>Zgłoś nadużycie</span>
                  </div>
                </Popover.Content>
              </Popover>
            }
          >
            <i
              className="fas fa-ellipsis-v"
              data-tip="Opcje"
              data-place="right"
            ></i>
          </OverlayTrigger>
        </div>
      </div>
      <hr />
    </>
  );
};

export default PostFooter;
