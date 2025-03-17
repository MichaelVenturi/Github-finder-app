import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const { name, description, html_url, forks, open_issues, watchers_count, stargazers_count } = repo;
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="group mr-2 badge badge-soft badge-info badge-lg">
            <FaEye className="mr-2" /> {watchers_count}
            <span className="absolute mt-12 scale-0 badge badge-ghost badge-xs text-gray-400/60 transition-all group-hover:scale-100">
              watchers
            </span>
          </div>
          <div className="group mr-2 badge badge-soft badge-success badge-lg">
            <FaStar className="mr-2" /> {stargazers_count}
            <span className="absolute mt-12 scale-0 badge badge-ghost badge-xs text-gray-400/60 transition-all group-hover:scale-100">
              stargazers
            </span>
          </div>
          <div className="group mr-2 badge badge-soft badge-error badge-lg">
            <FaInfo className="mr-2" /> {open_issues}
            <span className="absolute mt-12 scale-0 badge badge-ghost badge-xs text-gray-400/60 transition-all group-hover:scale-100">
              open issues
            </span>
          </div>
          <div className="group mr-2 badge badge-soft badge-warning badge-lg">
            <FaUtensils className="mr-2" /> {forks}
            <span className="absolute mt-12 scale-0 badge badge-ghost badge-xs text-gray-400/60 transition-all group-hover:scale-100">
              forks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RepoItem;
