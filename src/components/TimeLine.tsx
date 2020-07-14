import React from "react";
import debounce from "lodash.debounce";
import Image from "../Assets.tsx/assets";
import { TimelineEventComponent } from "./TimelineEventComponent";
import { TimelineDetailInfoComponent } from "./TimelineDetailInfoComponent";
import { TimelineDotEventComponent } from "./TimelineDotEventComponent";
import { TimelineStartComponent } from "./TimelineStartComponent";

export interface IExperiance {
  position?: string;
  company?: string;
  joinDate?: string;
  lastDate?: string;
  location?: string;
  details: string;
  dotEvent: boolean;
}

const dummyData: IExperiance[] = [
  {
    position: "Senior developer",
    company: "Red hat",
    joinDate: "2019-10-07",
    location: "Bangalore",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    dotEvent: false,
  },
  {
    details: "Moved to United States",
    dotEvent: true,
  },
  {
    position: "Senior software developer",
    company: "Altron",
    joinDate: "2019-09-29",
    lastDate: "2019-10-05",
    location: "Bangalore",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    dotEvent: false,
  },
  {
    position: "Senior Associate Technology",
    company: "Publicis Sapient",
    joinDate: "2019-09-16",
    lastDate: "2019-09-27",
    location: "Bangalore",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
    dotEvent: false,
  },
  {
    details: "Moved to Bangalore",
    dotEvent: true,
  },
  {
    position: "Analyst Programmer",
    company: "Fidelity",
    joinDate: "2018-04-02",
    lastDate: "2019-09-13",
    location: "Gurgaon",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    dotEvent: false,
  },
  {
    position: "Application Development analyst",
    company: "Accentue",
    joinDate: "2017-12-26",
    lastDate: "2018-03-29",
    location: "Gurgaon",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    dotEvent: false,
  },
  {
    details: "Moved to Gurgaon",
    dotEvent: true,
  },
  {
    position: "Software developer",
    company: "Tech Mahindra",
    joinDate: "2015-07-02",
    lastDate: "2017-12-04",
    location: "Noida",
    details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
    dotEvent: false,
  },
  {
    details: "Born into this world",
    dotEvent: true,
  },
];

export const Timeline: React.FunctionComponent = (props) => {
  const [infoList, setInfoList] = React.useState<IExperiance[]>(
    dummyData.slice(0, 3)
  );

  const timelineRef = React.useRef(null);

  const scrollHandler = debounce(() => {
    const temp: any = timelineRef?.current;
    if (temp.scrollHeight - temp.scrollTop === temp.clientHeight) {
      if (infoList.length < dummyData.length) {
        const temp: any = timelineRef?.current;
        const height = temp.offsetHeight;
        console.log("Input", height);

        const infoListCopy = [...infoList, dummyData[infoList.length]];
        setInfoList(infoListCopy);
      }
    }
  }, 100);
  let order = 1;
  return (
    <div
      ref={timelineRef}
      className={"timelineWrapper"}
      onScroll={scrollHandler}
    >
      <TimelineStartComponent images={Image}></TimelineStartComponent>

      <div className="timeline">
        {infoList.map((listItem) => {
          let isLeft = false;
          if (!listItem.dotEvent) {
            if (order % 2 === 0) {
              isLeft = true;
            }
            order++;
          }
          let returnVal;
          if (listItem.dotEvent) {
            returnVal = (
              <TimelineDotEventComponent
                key={listItem.details}
                content={listItem.details}
              ></TimelineDotEventComponent>
            );
          } else {
            returnVal = (
              <TimelineEventComponent
                key={
                  listItem.joinDate && listItem.company
                    ? listItem.joinDate + listItem.company
                    : ""
                }
                isLeft={isLeft}
                cardHeading={listItem.position || ""}
              >
                <TimelineDetailInfoComponent
                  companyName={listItem.company || ""}
                  startDate={listItem.joinDate || ""}
                  lastDate={listItem.lastDate || undefined}
                  location={listItem.location || ""}
                  details={listItem.details || ""}
                ></TimelineDetailInfoComponent>
              </TimelineEventComponent>
            );
          }
          return returnVal;
        })}
      </div>
    </div>
  );
};
