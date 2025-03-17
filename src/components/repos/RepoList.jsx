import RepoItem from "./RepoItem";
const RepoList = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <h2 className="text3xl my-4 font-bold card-title">Latest Repositories</h2>
      <div className="card-body">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
export default RepoList;
