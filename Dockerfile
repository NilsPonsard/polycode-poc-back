FROM denoland/deno:alpine-1.20.4

COPY ./ /app

WORKDIR /app

RUN deno cache src/deps.ts

EXPOSE 3000

CMD [ "deno","run","--allow-all", "src/index.ts" ]