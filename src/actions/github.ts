import { env } from "~/env";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: env.GITHUB_TOKEN,
});

export const fetchStarredRepos = async ({ username }: { username: string }) => {
  const res = await octokit.request("GET /users/{username}/starred", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res) {
    throw new Error("Failed to fetch starred repos");
  }

  return res;
};

export const fetchUser = async ({ username }: { username: string }) => {
  const res = await octokit.request("GET /users/{username}", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res) {
    throw new Error("Failed to fetch user");
  }

  return res;
};

export const doesUserExist = async ({ username }: { username: string }) => {
  try {
    await fetchUser({ username });
    return true;
  } catch (error) {
    return false;
  }
};
