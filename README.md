# Deno Boilerplate

This project is intended to work as a mock service for running integration tests against an application. It provides endpoints to simulate URL paths and HTTP methods, allowing you to test your application's behavior without needing a real backend service.
## Project Structure

```
deno-boilerplate
├── src
│   └── main.ts        # Entry point of the application
├── deps.ts            # External dependencies
├── README.md          # Project documentation
└── deno.json          # Deno configuration
```

## Setup Instructions

1. Ensure you have docker installed on your machine.
2. Run the following to start the application:

```bash
docker-compose up --build
```
3. Access the application at `http://localhost:8000`.


## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for this boilerplate.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.