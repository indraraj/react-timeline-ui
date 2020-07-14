import React from "react";
import style from "./TimelineStartComponent.module.css"

interface ITimelineStartComponentProps {
  images: any;
}

export const TimelineStartComponent: React.FunctionComponent<ITimelineStartComponentProps> = (
  props
) => {
  return (
    <div>
      <img className={style.timelineStartImage} src={props.images.pic} alt="timeline start" />
    </div>
  );
};
