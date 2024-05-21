import { CircleIcon, StarIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function RepoCard({
  repo,
}: {
  repo: {
    full_name: string;
    description: string;
    language: string;
    stargazers_count: number;
    updated_at: string;
  };
}) {
  return (
    <Card>
      <CardHeader className="grid items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{repo?.full_name}</CardTitle>
          <CardDescription>
            {repo?.description || "No description provided."}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground flex space-x-4 text-sm">
          <div className="flex items-center">
            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
            {repo?.language}
          </div>
          <div className="flex items-center">
            <StarIcon className="mr-1 h-3 w-3" />
            {repo?.stargazers_count}
          </div>
          <div>Updated {dayjs(repo?.updated_at).format("MMM D, YYYY")}</div>
        </div>
      </CardContent>
    </Card>
  );
}
