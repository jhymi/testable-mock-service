# Use official Deno image
FROM denoland/deno:alpine-1.44.4

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Expose port (change if your app uses a different port)
EXPOSE 8000

# Run the application
CMD ["run", "--allow-net", "src/main.ts"]