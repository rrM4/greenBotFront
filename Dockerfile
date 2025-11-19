FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm install --frozen-lockfile
RUN npm run build

#Production stage
FROM nginx:1.27.5-alpine AS production
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

#Add dynamic env variables
COPY env.sh /docker-entrypoint.d/env.sh
RUN dos2unix /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

# Let Docker run script before starting Nginx
ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80 443
#Modify nginx production
CMD ["nginx", "-g", "daemon off;"]