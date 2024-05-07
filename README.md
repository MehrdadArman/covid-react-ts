# COVID-19 World Map 🦠🗺

## Introduction

This project is a React application developed using Redux and Redux Saga. It provides an interactive world map interface where users can click on a country to view COVID-19 statistics such as confirmed cases, deaths, recoveries, and last update date. Additionally, users can navigate to a detailed view of each country via direct links.

## Features

- Interactive world map displaying COVID-19 statistics for each country.
- Detailed country view with confirmed cases, deaths, recoveries, and last update date.
- Integration with the [COVID-19 Statistics API](https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/) for real-time data.
- Loader implementation for API requests.
- Error handling for API connection issues, ensuring smooth user experience.
- Additional features can be added based on requirements.
- Customizable design using CSS frameworks like Bootstrap or Tailwind CSS, or custom styles.

## Stack

- React
- Redux Toolkit: State Management
- Typescript: type-checking
- Redux-saga: handling side-effects and middleware
- Styling: TailwindCss and ShadCn/UI
- Map: MapLibre
- Map data and visualization: GeoJson data
- Vitest and MSW: testing and mocking API
- Vite

## Requirements

- React unit tests must be written for code reliability.
- Dockerize the project for easy deployment.
- Ensure compatibility with Google Chrome, Mozilla Firefox, and optionally Safari.
- Ensure responsiveness for mobile devices.

## Getting Started

1. Clone this repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Build the project with `npm run build`.
5. Navigate to `http://localhost:5173` in your browser.

## Testing

To run unit tests, use the command `npm run test:unit`.

## Deployment

1. Build the Docker image with `docker build -t covid-project .`.
2. Run the Docker container with `docker run -p 8585:80 covid-project`.

## Contributing

Contributions are welcome! If you have any ideas for improvements or feature requests, feel free to open an issue or submit a pull request.

---
