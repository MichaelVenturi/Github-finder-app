import UserResults from "../components/users/UserResults";

const Home = () => {
  return (
    <div>
      <UserResults />
      {import.meta.env.VITE_FAKE_VAR}
    </div>
  );
};
export default Home;
