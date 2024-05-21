import { env } from "~/env";

export const fetchStarredRepos = async ({
  username,
}: {
  username: string;
}): Promise<Repository[]> => {
  const res = await fetch(`https://api.github.com/users/${username}/starred`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 0,
    },
  });

  const response = (await res.json()) as Repository[];

  if (!response) {
    throw new Error("Failed to fetch starred repos");
  }

  return response;
};

export const fetchUser = async ({ username }: { username: string }) => {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
    next: {
      revalidate: 0,
    },
  });

  const response = (await res.json()) as User;

  if (!response) {
    throw new Error("Failed to fetch user");
  }

  return response;
};

export const doesUserExist = async ({ username }: { username: string }) => {
  try {
    await fetchUser({ username });
    return true;
  } catch (error) {
    return false;
  }
};
