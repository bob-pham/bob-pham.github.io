import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import quickSort from "../../javascript/quicksort";
import ProjectCard from "./ProjectCard";

import projectsOriginal from "./projects.json";
import gitlogo from "../../assets/icons/github.png";
import calendar from "../../assets/icons/calendar.png";

import cornucopiaLogo from "../../assets/images/cornucopia/logo.png";
import deviceRepairManager from "../../assets/images/device_repair_manager/simple_device_repair_manager.png";
import hercules from "../../assets/images/hercules/home.png";
import hwManager from "../../assets/images/hw_manager/hw homescreen.png";
import pomodoro from "../../assets/images/pomodoro.png";
import rightAngle from "../../assets/images/right_angle/logo.png";
import projectsDefault from "../../assets/images/projects.png";
import script from "../../assets/icons/scripts.png"

const images = {
  "Project Cornucopia": cornucopiaLogo,
  "right angle": rightAngle,
  "Hercules": hercules,
  "Homework Manager": hwManager,
  "Simple Device Repair Manager": deviceRepairManager,
  "CLI Pomodoro": pomodoro,
  "script": script
};

export default function ProjectsSection(props) {
  const [mode, setMode] = useState(0);
  const [projects, setProjects] = useState(projectsOriginal);

  const changeMode = (val) => {
    setMode(val);
    setProjects(quickSort(projects, val, 0, projects.length - 1));
  };

  return (
    <>
      <div className="grid w-11/12 place-items-center m-5 font-montserrat">
        <GitHubCalendar username="bob-pham" />
        <a
          href="https://github.com/bob-pham"
          target="_"
          className="btn grid grid-cols-2 gap-0 text-white border-white border-2 my-2"
        >
          <img src={gitlogo} />
          Github
        </a>
        <div className="tabs my-5 ">
          <button
            className={
              mode == 0
                ? "tab tab-bordered text-lg tab-active text-white"
                : "tab tab-bordered text-lg"
            }
            onClick={() => changeMode(0)}
          >
            Dev Curated
          </button>
          <button
            className={
              mode == 1
                ? "tab tab-bordered text-lg tab-active text-white"
                : "tab tab-bordered text-lg"
            }
            onClick={() => changeMode(1)}
          >
            Date Created
          </button>
        </div>
        <div className="grid place-self-start text-white text-2xl bg-gray-700 w-full px-10 rounded-xl py-1 font-bebasneue">
          <h1>{mode == 0 ? "Featured" : "Latest"}</h1>
        </div>
      </div>
      <div className="hero w-11/12 bg-base-200 rounded-3xl mb-3 bg-gradient-to-r from-slate-800 to-zinc-700 via-gray-800 animate-gradient-x font-montserrat">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={
              images[projects[0]["name"]] != undefined
                ? images[projects[0]["name"]]
                : projectsDefault
            }
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bebasneue">{projects[0]["name"]}</h1>
            <div className="grid grid-cols-5 place-items-center w-fit bg-slate-900 p-2 rounded-xl">
              <img className="col-span-1" src={calendar} />
              <h1 className="col-span-4">
                {projects[0]["dateStart"] + " "}-{" " + projects[0]["dateEnd"]}
              </h1>
            </div>
            <p className="py-6">{projects[0]["description"]}</p>
            <div className="w-11/12">
              {projects[0]["tech"].map((item) => (
                <span className="badge badge-outline m-1">{item}</span>
              ))}
            </div>
            <a href={projects[0]["url"]}>
              <button className="btn bg-green-500 text-white my-4">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 auto-rows-auto grid-x-2 gap-y-10 my-2 place-items-center w-11/12">
        {projects.slice(1).map((proj) => (
          <ProjectCard
            name={proj["name"]}
            description={proj["description"]}
            tech={proj["tech"]}
            dateStart={proj["dateStart"]}
            dateEnd={proj["dateEnd"]}
            pagelink={proj["url"]}
            logo={
              images[proj["name"]] != undefined
                ? images[proj["name"]]
                : proj["script"]
                ? images["script"]
                : projectsDefault
            }
          />
        ))}
      </div>
    </>
  );
}