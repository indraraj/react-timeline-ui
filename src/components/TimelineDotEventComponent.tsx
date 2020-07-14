import React, { FunctionComponent } from "react";

import styles from "./TimelineDotEventComponent.module.css";

interface ITimelineDotEventComponentProps {
  content: string;
}

export const TimelineDotEventComponent: FunctionComponent<ITimelineDotEventComponentProps> = (
  props
) => {
  return (
    <div className={"expLists"}>
      <div className={styles.datalist}>
        <div className={styles.timelineEvent}>
          <span className={styles.tooltiptext}>{props.content}</span>
        </div>
      </div>
    </div>
  );
};
