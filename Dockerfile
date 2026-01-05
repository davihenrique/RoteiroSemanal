FROM fedora:latest

RUN dnf install -y nodejs && dnf clean all

WORKDIR /app

COPY . .

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", ".", "-p", "3000"]
