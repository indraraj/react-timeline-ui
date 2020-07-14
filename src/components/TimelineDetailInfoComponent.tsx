import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import style from "./TimelineDetailInfoComponent.module.css"

interface ITimelineDetailInfoComponentProps {
  companyName: string;
  startDate: string;
  lastDate?: string;
  location: string;
  details: string;
}

export const TimelineDetailInfoComponent: React.FunctionComponent<ITimelineDetailInfoComponentProps> = (
  props
) => {

  let durationYears = moment(props.lastDate).diff(moment(props.startDate), 'years');
  let durationMonths = moment(props.lastDate).diff(moment(props.startDate), 'months') % 12;

  let lastDay = props.lastDate ? new Date(props.lastDate).getMonth()+1+'/'+new Date(props.lastDate).getFullYear() : 'present';

  return (
    <>
      <div className={style.timelineDetail}>
        <div>
          <div className={style.timelineDetailIcon}>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>

          <span>{props.companyName}</span>
        </div>
        <div>
          <div className={style.timelineDetailIcon}>
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <span>{`${ new Date(props.startDate).getMonth()+1}/${ new Date(props.startDate).getFullYear()} - ${lastDay} (${durationYears} Years ${durationMonths} Months)`}</span>
        </div>
        <div>
          <div className={style.timelineDetailIcon}>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span>{props.location}</span>
        </div>
      </div>
      <div className={style.timelineDetailDescription}>
        <span>{props.details}</span>
      </div>
    </>
  );
};
