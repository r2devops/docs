---
sidebar_position: 100
---

# Reference

This reference explains the global configuration options for R2Devops. All configuration is managed through environment variables.

## General Configuration

- **`JOBS_LISTEN_ADDR`**: The address on which the backend listens (e.g., `localhost`)
- **`JOBS_LISTEN_PORT`**: The port on which the backend listens (e.g., `3000`)
- **`JOBS_CORS_ORIGIN`**: Specifies allowed CORS origins. Use `*` to allow all origins
- **`JOBS_API_DOMAIN`**: The base URL for the backend API
- **`JOBS_FRONTEND_URL`**: The URL of the frontend application
- **`GITLEAKS_PATH`**: The path to the Gitleaks binary for detecting secrets
- **`JOBS_ANALYSIS_TIMEOUT`**: The duration after which we consider an analysis as failed (the more projects you have, the higher this value should be). Default: `10m`
- **`JOBS_ANALYSIS_UNFINISHED_CLEANUP_AGE`**: Age at which unfinished analyses should be cleaned up. Default: `168h` (7 days)
- **`JOBS_ANALYSIS_COMPLETE_CLEANUP_AGE`**: Age at which all analyses should be cleaned up. Default: `8760h` (365 days)
- **`JOBS_HTTP_CLIENT_TIMEOUT`**: Timeout for HTTP clients (REST and GraphQL). Default: `30s`

## Frontend Configuration

- **`DEBUG`**: Enables debug mode for the frontend when set to `true`. Default: `false`
- **`ALLOW_EXTERNAL_QUERIES`**: When set to `true`, allows the frontend to perform external queries. Set to `false` if you want to prevent R2Devops from initiating queries to sources other than backend and GitLab. Default: `true`

## Session and Security

- **`JOBS_SESSION_TTL`**: The validity duration of a user session (e.g., `24h`)
- **`SECRET_KEY`**: The encryption key for sensitive data. Ensure this is securely generated and kept private

## Organization

- **`ORGANIZATION`**: For self-managed GitLab, leave empty to consider all groups. For SaaS GitLab, specify the path of the top-level group of your organization

## Logging

- **`LOG_LEVEL`**: The logging level (`error`, `warn`, `info`, `debug`)
- **`LOG_FORMATTER`**: The log output format (`json` or `text`)

## GitLab Integration

- **`JOBS_GITLAB_URL`**: The URL of the GitLab instance (e.g., `https://gitlab.com`)
- **`GITLAB_OAUTH2_CLIENT_ID`**: The client ID for GitLab OAuth2
- **`GITLAB_OAUTH2_CLIENT_SECRET`**: The client secret for GitLab OAuth2

## PostgreSQL Database

- **`JOBS_DB_HOST`**: The host address of the PostgreSQL database
- **`JOBS_DB_PORT`**: The port of the PostgreSQL database
- **`JOBS_DB_USER`**: The username for database authentication
- **`JOBS_DB_NAME`**: The name of the PostgreSQL database
- **`JOBS_DB_SSLMODE`**: The SSL mode for database connections (e.g., `disable`)
- **`JOBS_DB_TIMEZONE`**: The timezone for database operations
- **`JOBS_DB_PASSWORD`**: The password for database authentication
- **`JOBS_DB_QUERY_TIMEOUT`**: Default timeout for all database operations. Default: `10s`

## Redis Database

- **`JOBS_REDIS_HOST`**: The host address of the Redis database
- **`JOBS_REDIS_PORT`**: The port of the Redis database
- **`JOBS_REDIS_DB`**: The database index for Redis (e.g., `0`)
- **`JOBS_REDIS_USER`**: The username for Redis authentication
- **`JOBS_REDIS_PASSWORD`**: The password for Redis authentication
- **`JOBS_REDIS_CERT`**: The certificate path for Redis (optional)
- **`JOBS_REDIS_SET_NAMESPACES_TTL`**: The TTL for Redis namespaces (e.g., `24h`)
- **`JOBS_REDIS_LIST_TASK_ANALYSIS_TTL`**: TTL for all Redis task lists (analysis, policy, processing). Default: `2h`
