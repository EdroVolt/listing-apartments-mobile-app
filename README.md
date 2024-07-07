# Listing Apartments App Frontend

Basic Expo React-native App for listing apartments

## Getting Started

> **NOTE:** This repo depends on this [repo](https://github.com/EdroVolt/listing-apartments) as a backend.

To run this app locally you have two options:

## 1. Using [Docker Compose](https://docs.docker.com/compose/) (Recommended)

- **first:** make sure you have [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your machine.

- **Second:** Clone the repo

- **Third:** Open your terminal and make sure you are in the project root directory.

- **Forth:** Run the following command:

  ```bash
  docker-compose up --build
  ```

  > This command will run three containers, frontend, backend, and Mongodb database.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 2. Cloning the [backend repo](https://github.com/EdroVolt/listing-apartments) and this repo and running each one separately

- To run this project using expo use the following command:
   ```bash
      npx expo start
   ```

Open [http://localhost:8081](http://localhost:8081) with your browser to see the result.
