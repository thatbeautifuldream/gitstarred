"use client";

import { CircleIcon, StarIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import dayjs from "dayjs";

export default function StarredRepos({ repos }: { repos: Repository[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {repos?.map((repo, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -50, x: -50 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card key={index}>
            <CardHeader className="grid items-start gap-4 space-y-0">
              <div className="space-y-1">
                <CardTitle>{repo?.full_name}</CardTitle>
                <CardDescription>
                  {repo?.description || "No description provided."}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                  {repo?.language}
                </div>
                <div className="flex items-center">
                  <StarIcon className="mr-1 h-3 w-3" />
                  {repo?.stargazers_count}
                </div>
                <div>
                  Updated {dayjs(repo?.updated_at).format("MMM D, YYYY")}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
