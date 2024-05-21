import { fetchStarredRepos, fetchUser } from "~/actions/github";
import { RepoCard } from "~/components/repo-card";

export default async function GitStarredProfile({
  params,
}: {
  params: { username: string };
}) {
  const { data: repos } = await fetchStarredRepos({
    username: params.username,
  });

  const { data: user } = await fetchUser({
    username: params.username,
  });

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, id) => (
          // @ts-expect-error - type is missing from repo
          <RepoCard key={id} repo={repo} />
        ))}
      </div>
    </>
  );
}
