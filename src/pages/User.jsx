import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GithubActions";
import { dispatchSetLoading, dispatchGetUserData } from "../context/github/GithubActionCreators";

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    dispatch(dispatchSetLoading());
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch(dispatchGetUserData(userData));
    };

    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
          {/* profile pic */}
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">{login}</p>
              </div>
            </div>
          </div>
          {/* name, badges, bio */}
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-outline badge-success mt-[6.5px]">{type}</div>
                {hireable && <div className="mx-1 badge badge-outline badge-info mt-[6.5px]">Hireable</div>}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href={html_url} target="_blank" rel="referrer" className="btn btn-outline">
                  Visit Github Profile
                </a>
              </div>
            </div>
            {/* location, website, twitter */}
            <div className="w-full rounded-lg shadow-md bg-base-100 stats stats-vertical md:stats-horizontal">
              {location && (
                <div className="stat">
                  <div className="stat-title text-xs">Location</div>
                  <div className="text-sm lg:text-base xl:text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-xs">Website</div>
                  <div className="text-sm lg:text-base xl:text-lg stat-value">
                    <a href={websiteUrl} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-xs">Twitter (a.k.a X)</div>
                  <div className="text-sm lg:text-base xl:text-lg stat-value">
                    <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* numerical stats */}
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats stats-vertical md:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl lg:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-2xl lg:text-4xl">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl lg:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-2xl lg:text-4xl">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl lg:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-2xl lg:text-4xl">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl lg:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-2xl lg:text-4xl">{public_gists}</div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
};
export default User;
