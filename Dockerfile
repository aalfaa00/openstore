FROM --platform=linux/amd64 node:latest
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . ./
EXPOSE 3000
CMD npm run dev