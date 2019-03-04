FROM nginx

ENV NODE_ENV production

COPY nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Build the app
COPY docs/.vuepress/dist .

EXPOSE 80
