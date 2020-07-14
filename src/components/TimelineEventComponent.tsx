import React, { FunctionComponent } from "react";

import styles from "./TimelineEventComponent.module.css";

interface ITimelineEventComponentProps {
  isLeft: boolean;
  cardHeading: string;
}

export const TimelineEventComponent: FunctionComponent<ITimelineEventComponentProps> = (
  props
) => {
  return (
    <div className={"expLists"}>
      <div className={props.isLeft ? styles.datalistLeft : styles.datalist}>
        <div className={props.isLeft ? styles.timelineEventLeft : styles.timelineEvent}>
          <div
            className={props.isLeft ? styles.contentLeft : styles.content}
          >
            <div className={"header"}>
              <h4 className={"headerText"}>{props.cardHeading}</h4>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};
