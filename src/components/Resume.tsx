import React from "react";
// @ts-ignore
import {
  VerticalTimeline,
  // @ts-ignore
  VerticalTimelineElement as VTE, // Type assertion fix
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
        Here you'll find a detailed account of my career, showcasing my skills, experiences, and accomplishments.
      </p>
      {/* @ts-ignore */}
      <VerticalTimeline>
        {/* Junior Software Engineer */}
        {/* @ts-ignore */}
        <VTE
          className="vertical-timeline-element--work lg:mb-8"
          date="July 2023 - Present"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#fff" }}
          icon={<MdDevices size={48} />}
        >
          <h3 className="text-2xl font-bold mb-4">Junior Software Engineer</h3>
          <h4 className="mb-6">Vodafone UK</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>Increased test coverage from 10% to 95% for internal libraries.</li>
            <li>Reduced P1 Bugs by 80%, improving system stability.</li>
            <li>Refactored legacy code, reducing technical debt and vulnerabilities.</li>
            <li>Led development of ‘Activate Voucher’ journey, enhancing user experience.</li>
            <li>Acted as lead engineer for the internal component library during paternity leave.</li>
          </ul>
          <div className="flex justify-end space-x-2 absolute bottom-4 right-4">
            <StackIcon name="typescript" style={{ width: 24, height: 24 }} />
            <StackIcon name="reactjs" style={{ width: 24, height: 24 }} />
            <StackIcon name="java" style={{ width: 24, height: 24 }} />
            <StackIcon name="spring" style={{ width: 24, height: 24 }} />
            
            <StackIcon name="datadog" style={{ width: 24, height: 24 }} />
            <StackIcon name="azure" style={{ width: 24, height: 24 }} />
          </div>
        </VTE>

        {/* Graduate Software Engineer - Backend */}
        {/* @ts-ignore */}
        <VTE
          className="vertical-timeline-element--work lg:mb-8"
          date="September 2022 - July 2023"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#fff" }}
          icon={<MdOutlineHttp size={48} />}
        >
          <h3 className="text-2xl font-bold mb-4">Graduate Software Engineer - Backend</h3>
          <h4 className="mb-6">Vodafone Group</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>Designed and developed internal templating boilerplate.</li>
            <li>Hosted and organized internal Digital podcasts.</li>
          </ul>
          <div className="flex justify-end space-x-2 absolute bottom-4 right-4">
            <StackIcon name="java" style={{ width: 24, height: 24 }} />
            <StackIcon name="spring" style={{ width: 24, height: 24 }} />
            <StackIcon name="aws" style={{ width: 24, height: 24 }} />
          </div>
        </VTE>

        {/* Graduate Software Engineer - Innovation */}
        {/* @ts-ignore */}
        <VTE
          className="vertical-timeline-element--work lg:mb-8"
          date="March 2022 - September 2022"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#fff" }}
          icon={<MdLightbulbOutline size={48} />}
        >
          <h3 className="text-2xl font-bold mb-4">Graduate Software Engineer - Innovation</h3>
          <h4>Vodafone Group</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>Developed multi-tenant web application for internal events, demos and knowledge shares. Reduced the number of siloed sites from 12 to 1</li>
            <li>Designed and developed a Augmented application to interact with Jira tickets via hand gestures using Unity3D</li>
          </ul>
          <div className="flex justify-end space-x-2 absolute bottom-4 right-4">
            <StackIcon name="csharp" style={{ width: 24, height: 24 }} />
            <StackIcon name="python" style={{ width: 24, height: 24 }} />
            <StackIcon name="react" style={{ width: 24, height: 24 }} />
          </div>
        </VTE>

        {/* Graduate Software Engineer - Frontend */}
        {/* @ts-ignore */}
        <VTE
          className="vertical-timeline-element--work lg:mb-8"
          date="September 2021 - March 2022"
          dateClassName="timeline-date"
          contentStyle={{
            color: "#fff",
            background: "#2C2C2C",
            position: "relative",
            paddingBottom: "2rem",
          }}
          iconStyle={{ background: "#2C2C2C", color: "#fff" }}
          icon={<FaReact size={48} />}
        >
          <h3 className="text-2xl font-bold mb-4">Graduate Software Engineer - Frontend</h3>
          <h4 className="mb-6">Vodafone Group</h4>
          <ul className="list-disc ml-5 mb-4">
            <li>Maintained a customized containerized forum for developers.</li>
            <li>Produced the Digital Engineering Meet The Team podcast.</li>
            <li>Served as interim Scrum Master.</li>
          </ul>
          <div className="flex justify-end space-x-2 absolute bottom-4 right-4">
            <StackIcon name="react" style={{ width: 24, height: 24 }} />
            <StackIcon name="typescript" style={{ width: 24, height: 24 }} />
            <StackIcon name="git" style={{ width: 24, height: 24 }} />
          </div>
        </VTE>
      </VerticalTimeline>
    </div>
  );
};

export default Resume;