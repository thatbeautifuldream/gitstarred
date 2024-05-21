import { fetchStarredRepos, fetchUser } from "~/actions/github";
import LineTabs from "~/components/line-tabs";
import RepoProfile from "~/components/repo/repo-profile";

export default async function Page({
  params,
}: {
  params: {
    username: string;
  };
}) {
  const { username } = params;
  const data = await fetchStarredRepos({ username });
  const userData = await fetchUser({ username });

  return (
    <>
      <RepoProfile user={userData} />
      <LineTabs repos={data} />
    </>
  );
}
