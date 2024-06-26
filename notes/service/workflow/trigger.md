---
title: Trigger
---

# Trigger

:::caution

- 目前是 PUSH 的模式，因此推荐在 serverless 环境中使用
- 支持 PULL 模式/long-running server [#244](https://github.com/triggerdotdev/trigger.dev/issues/244)
  - WIP https://trigger.dev/blog/v3-developer-preview-launch/

:::

- [triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev)
  - Apache-2.0, TS
  - 技术栈 postgres, prisma, react, codemirror, headlessui, heroicons, radix-ui, lucide-react, prismjs, framer, remix
    - [graphile/worker](https://github.com/graphile/worker)
    - 监控 [highlight](https://github.com/highlight/highlight)
      - Apache-2.0+EE, TS, Go
    - logger morgan
    - ohash
    - posthog
    - recharts
    - simple-oauth2
    - sonner Toast
    - tailwindcss-animate
    - zod
    - swc
  - background jobs framework for TypeScript
  - API integrations, webhooks, scheduling, delays
- https://github.com/triggerdotdev/docker
  - https://github.com/triggerdotdev/docker/blob/main/docker-compose.yml
- Cloud [限制](https://trigger.dev/docs/documentation/concepts/limits)
