# 1 拉取 node 镜像，打包 React 项目
FROM node:14 as build
WORKDIR /app
COPY package*.json ./ 
RUN npm install
COPY tsconfig.json ./
COPY public public/
COPY src src/
RUN npm run build

# 2 创建、运行 Nginx 服务器，把打包好的文件复制到服务器文件夹中
FROM nginx:alpine
COPY --from=build /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]