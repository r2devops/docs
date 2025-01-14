---
sidebar_position: 100
---

# Reference

This reference explains the global configuration options for R2Devops,
including frontend configuration and backend environment variables. The
frontend configuration is stored in a JSON file, while the backend settings are
managed through environment variables.

## Frontend

The frontend configuration file is a JSON file that should be mounted to
`/app/.next/server/app/config.body` in our official container. It contains the
following options:

```json
{
  "appTitle": "R2Devops",
  "apiUrl": "https://r2devops.REPLACEME/api",
  "gitLabApiUrl": "https://gitlab.com/",
  "selfHosted": true,
  "docUrl": "https://docs.r2devops.io",
  "debug": false,
  "allowExternalQueries": true
}
```

### Options

- **`appTitle`**: The title of the application displayed in the user interface
- **`apiUrl`**: The R2Devops API URL for API calls made by the frontend
- **`gitLabApiUrl`**: URL of the gitlab instance for API calls made by the frontend
- **`selfHosted`**: A boolean indicating if the application is self-hosted (`true`) or SaaS (`false`)
- **`docUrl`**: The URL to the R2Devops documentation site
- **`debug`**: Enables debug mode when set to `true`
- **`allowExternalQueries`**: A boolean that, when `true`, allows the frontend to perform external queries

## Backend

The backend configuration is managed through environment variables. Below is a
detailed explanation of the variables

### General Configuration

- **`JOBS_LISTEN_ADDR`**: The address on which the backend listens (e.g., `localhost`)
- **`JOBS_LISTEN_PORT`**: The port on which the backend listens (e.g., `3000`)
- **`JOBS_CORS_ORIGIN`**: Specifies allowed CORS origins. Use `*` to allow all origins
- **`JOBS_API_DOMAIN`**: The base URL for the backend API
- **`JOBS_FRONTEND_URL`**: The URL of the frontend application
- **`GITLEAKS_PATH`**: The path to the Gitleaks binary for detecting secrets
- **`JOBS_ANALYSIS_TIMEOUT`**: The duration after which we consider an analysis as failed (the more projects you have, the higher this value should be). Default: `10m`

### Session and Security

- **`JOBS_SESSION_TTL`**: The validity duration of a user session (e.g., `24h`)
- **`SECRET_KEY`**: The encryption key for sensitive data. Ensure this is securely generated and kept private

### Organization and License

- **`ORGANIZATION`**: For self-managed GitLab, leave empty to consider all groups. For SaaS GitLab, specify the path of the top-level group of your organization
- **`LICENSE`**: The license key for the application

### Logging

- **`LOG_LEVEL`**: The logging level (`error`, `warn`, `info`, `debug`)
- **`LOG_FORMATTER`**: The log output format (`json` or `text`)

### GitLab Integration

- **`JOBS_GITLAB_URL`**: The URL of the GitLab instance (e.g., `https://gitlab.com`)
- **`GITLAB_OAUTH2_CLIENT_ID`**: The client ID for GitLab OAuth2
- **`GITLAB_OAUTH2_CLIENT_SECRET`**: The client secret for GitLab OAuth2

### PostgreSQL Database

- **`JOBS_DB_HOST`**: The host address of the PostgreSQL database
- **`JOBS_DB_PORT`**: The port of the PostgreSQL database
- **`JOBS_DB_USER`**: The username for database authentication
- **`JOBS_DB_NAME`**: The name of the PostgreSQL database
- **`JOBS_DB_SSLMODE`**: The SSL mode for database connections (e.g., `disable`)
- **`JOBS_DB_TIMEZONE`**: The timezone for database operations
- **`JOBS_DB_PASSWORD`**: The password for database authentication

### Redis Database

- **`JOBS_REDIS_HOST`**: The host address of the Redis database
- **`JOBS_REDIS_PORT`**: The port of the Redis database
- **`JOBS_REDIS_DB`**: The database index for Redis (e.g., `0`)
- **`JOBS_REDIS_USER`**: The username for Redis authentication
- **`JOBS_REDIS_PASSWORD`**: The password for Redis authentication
- **`JOBS_REDIS_CERT`**: The certificate path for Redis (optional)
- **`JOBS_REDIS_SET_NAMESPACES_TTL`**: The TTL for Redis namespaces (e.g., `24h`)
