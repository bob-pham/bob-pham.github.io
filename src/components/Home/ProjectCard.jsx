import calendar from "../../assets/icons/calendar.png";

export default function ProjectCard(props) {
  return (
    <div className="grid-col-span-1 card card-compact w-11/12 h-full bg-slate-800 shadow-xl font-montserrat">
      <figure className="h-1/2">
        <img className="max-h-52 min-h-52 w-auto pt-5 px-5 drop-shadow-xl" src={props.logo} alt="Shoes"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bebasneue text-2xl">{props.name}</h2>
        <div className="grid grid-cols-6 place-items-center w-3/4 bg-slate-900 p-2 rounded-xl">
          <img className="col-span-1" src={calendar} />
          <h1 className="col-span-4">
            {props.dateStart + " "}-{" " + props.dateEnd}
          </h1>
        </div>
        <p>{props.description}</p>
        <div className="w-11/12">
          {props.tech.map((item) => (
            <span className="badge badge-outline m-1">{item}</span>
          ))}
        </div>
        <div className="card-actions justify-end">
          <a href={props.pagelink}>
            <button className="btn bg-green-500 text-white">Learn More</button>
          </a>
        </div>
      </div>
    </div>
  );
}
