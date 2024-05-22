import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GITHUB_TOKEN: z.string(),
  },
  client: {},
  runtimeEnv: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
