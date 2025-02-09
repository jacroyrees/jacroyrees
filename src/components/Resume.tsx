import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdDevices, MdOutlineHttp, MdLightbulbOutline } from "react-icons/md";
import { FaReact } from "react-icons/fa6";
import StackIcon from "tech-stack-icons";

const Resume: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl text-white text-center mb-8 mt-4 font-bold">Resume</h1>
      <p className="text-lg text-gray-300 text-center mb-12">
    Here you'll find a detailed account of my career, showcasing my skills, experiences, and accomplishments. From software engineering to innovative projects, explore how I've contributed to various teams and organizations.
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:mb-8"
          date="July 2023 - Present"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#2C2C2C" }}
          icon={<MdDevices size={48} color="#fff" />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold mb-4">
            Junior Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle mb-6">Vodafone UK</h4>
          <ul className="list-disc ml-5 mb-4 mt-4">
            <li>
              Increased component test coverage for internal library from 10% to
              95% in order to increase reliability and maintainability.
            </li>
            <li>
              Aided in the reduction of P1 Bugs by 80%, significantly improving
              system stability.
            </li>
            <li>
              Refactored legacy code, improving maintainability, reducing
              technical debt and removing vulnerabilities.
            </li>
            <li>
              Led the development of ‘Activate Voucher’ journey, collaborating
              with UX, Backend and various stakeholders to implement the E2E
              solution, improving user-experience and increasing customer
              engagement.
            </li>
            <li>
              Owned the ‘No Active Subscriptions’ epic, working with
              cross-functional teams to aid those who are ‘in-limbo’ between
              activating and activation of their plans.
            </li>
            <li>
              Acted as lead engineer for the internal component library,
              addressing all technical queries, advising UX designers, and
              ensuring components were up to date during Lead Engineer's paternity
              leave.
            </li>
          </ul>
          <div className="icons-container flex justify-end space-x-2 mt-2 absolute bottom-4 right-4 lg:hidden">
            <StackIcon name="typescript" style={{ width: 24, height: 24 }} />
            <StackIcon name="reactjs" style={{ width: 24, height: 24 }} />
            <StackIcon name="datadog" style={{ width: 24, height: 24 }} />
            <StackIcon name="azure" style={{ width: 24, height: 24 }} />
            <StackIcon name="git" style={{ width: 24, height: 24 }} />
            <StackIcon name="java" style={{ width: 24, height: 24 }} />
            <StackIcon name="spring" style={{ width: 24, height: 24 }} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:mb-8"
          date="September 2022 - July 2023"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#2C2C2C" }}
          icon={<MdOutlineHttp size={48} color="#fff" />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold mb-4">
            Graduate Software Engineer - Backend
          </h3>
          <h4 className="vertical-timeline-element-subtitle mb-6">
            Vodafone Group
          </h4>
          <ul className="list-disc ml-5 mb-4 mt-4">
            <li>
              Designed and developed internal inner-sourcing templating
              boilerplate to reduce project setup times.
            </li>
            <li>
              Hosted and organised internal Digital podcasts to foster closer
              relationships within the development community.
            </li>
          </ul>
          <div className="icons-container flex justify-end space-x-2 mt-2 absolute bottom-4 right-4 lg:hidden">
            <StackIcon name="java" style={{ width: 24, height: 24 }} />
            <StackIcon name="spring" style={{ width: 24, height: 24 }} />
            <StackIcon name="aws" style={{ width: 24, height: 24 }} />
            <StackIcon name="docker" style={{ width: 24, height: 24 }} />
            <StackIcon name="gitlab" style={{ width: 24, height: 24 }} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:mb-8"
          date="March 2022 - September 2022"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#2C2C2C" }}
          icon={<MdLightbulbOutline size={48} color="#fff" />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold mb-4">
            Graduate Software Engineer - Innovation + Architecture
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vodafone Group
          </h4>
          <ul className="list-disc ml-5 mb-4 mt-4">
            <li>
              Developed multi-tenant web application to manage internal events,
              improving operational efficiency.
            </li>
            <li>
              Created Augmented Reality application to allow users to interact
              with Jira tasks using Unity3D and interact with it on mobile.
            </li>
          </ul>
          <div className="icons-container flex justify-end space-x-2 mt-2 absolute bottom-4 right-4 lg:hidden">
            <StackIcon name="csharp" style={{ width: 24, height: 24 }} />
            <StackIcon name="python" style={{ width: 24, height: 24 }} />
            <StackIcon name="typescript" style={{ width: 24, height: 24 }} />
            <StackIcon name="react" style={{ width: 24, height: 24 }} />
            <StackIcon name="jira" style={{ width: 24, height: 24 }} />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work lg:mb-8"
          date="September 2021 - March 2022"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#2C2C2C" }}
          icon={<FaReact size={48} color="#fff" />}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold mb-4">
            Graduate Software Engineer - Frontend
          </h3>
          <h4 className="vertical-timeline-element-subtitle mb-6">
            Vodafone Group
          </h4>
          <ul className="list-disc ml-5 mb-4 mt-4">
            <li>
              Maintained and deployed customised containerised forum to support
              the wider developer community and their queries.
            </li>
            <li>
              Created, hosted and produced Digital Engineering Meet The Team
              podcast in order to foster closer relationships within the
              community.
            </li>
            <li>
              Led Scrum ceremonies as interim Scrum Master, ensuring smooth
              project execution.
            </li>
            <li>
              Aided in the design and development of a internal inner-sourcing
              templating boilerplate to reduce project setup times by 85%.
            </li>
          </ul>
          <div className="icons-container flex justify-end space-x-2 mt-2 absolute bottom-4 right-4 lg:hidden">
            <StackIcon name="react" style={{ width: 24, height: 24 }} />
            <StackIcon name="typescript" style={{ width: 24, height: 24 }} />
            <StackIcon name="git" style={{ width: 24, height: 24 }} />
            <StackIcon name="docker" style={{ width: 24, height: 24 }} />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Resume;