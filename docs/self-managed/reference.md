---
sidebar_position: 100
---

# Reference

This reference explains the global configuration options for R2Devops. All configuration is managed through environment variables.

## API Configuration

- **`JOBS_LISTEN_ADDR`**: The address on which the backend listens (e.g., `localhost`)
- **`JOBS_LISTEN_PORT`**: The port on which the backend listens (e.g., `3000`)
- **`JOBS_API_DOMAIN`**: The base URL for the backend API (e.g., `https://api.example.com`)
- **`JOBS_FRONTEND_URL`**: The URL of the frontend application (e.g., `https://app.example.com`)
- **`JOBS_CORS_ORIGIN`**: Specifies allowed CORS origins. Use `*` to allow all origins
- **`JOBS_HTTP_CLIENT_TIMEOUT`**: Timeout for HTTP clients (REST and GraphQL). Default: `30s`

## Session and Security

- **`JOBS_SESSION_TTL`**: The validity duration of a user session (e.g., `24h`). **Required**
- **`SECRET_KEY`**: The encryption key for sensitive data (must be a hexadecimal string). Ensure this is securely generated and kept private. **Required**

## Analysis Configuration

- **`JOBS_ANALYSIS_TIMEOUT`**: The duration after which an analysis is considered as failed. Increase this value if you have many projects. Default: `20m`
- **`JOBS_ANALYSIS_CLEANUP_RETENTION`**: Time to keep all analyses before cleanup (older analyses are kept at a rate of 1 per week). Minimum value: `48h`. Default: `720h` (30 days)
- **`JOBS_ANALYSIS_CLEANUP_CRON_PERIODICITY`**: Cron expression for the analysis cleanup job. Default: `0 4 * * 0` (every Sunday at 04:00)
- **`JOBS_ANALYSIS_CLEANUP_DELETION_TIMEOUT`**: Timeout for analysis cleanup deletion operations. Default: `30m`

## Asset Sync Configuration

- **`JOBS_ASSET_SYNC_ON_SERVER_STARTUP`**: If set to `true`, assets are synchronized on server startup. Default: `false`
- **`JOBS_ASSET_SYNC_TIMEOUT`**: The duration after which an asset sync is considered as failed. Default: `20m`
- **`JOBS_ASSET_SYNC_CRON_PERIODICITY`**: Cron expression for the asset sync job. Default: `20 1 * * *` (daily at 01:20)

## Deletion Configuration

- **`JOBS_DELETION_TIMEOUT`**: Timeout for deletion operations (frameworks, requirements, controls). Default: `10m`

## Organization

- **`ORGANIZATION`**: For self-managed GitLab, leave empty to consider all groups. For SaaS GitLab, specify the path of the top-level group of your organization

## Logging

- **`LOG_LEVEL`**: The logging level. Possible values: `error`, `warn`, `info`, `debug`. Default: `info`
- **`LOG_FORMATTER`**: The log output format. Possible values: `json`, `text`. Default: `json`

## GitLab Integration

- **`JOBS_GITLAB_URL`**: The URL of the GitLab instance (e.g., `https://gitlab.com`). **Required**
- **`GITLAB_OAUTH2_CLIENT_ID`**: The client ID for GitLab OAuth2. **Required**
- **`GITLAB_OAUTH2_CLIENT_SECRET`**: The client secret for GitLab OAuth2. **Required**
- **`JOBS_GITLAB_RETRY_MAX_RETRIES`**: Maximum number of retries for GitLab API requests. Default: `5`

## Security Scanning

- **`GITLEAKS_PATH`**: The path to the Gitleaks binary for detecting secrets. **Required**
- **`JOBS_R2DEVOPS_ISSUES_CLEANUP_DATE`**: Date after which to cleanup R2Devops issues (RFC3339 format). Default: `2025-10-01T00:00:00Z`

## PostgreSQL Database

- **`JOBS_DB_HOST`**: The host address of the PostgreSQL database. **Required**
- **`JOBS_DB_PORT`**: The port of the PostgreSQL database. **Required**
- **`JOBS_DB_USER`**: The username for database authentication. **Required**
- **`JOBS_DB_NAME`**: The name of the PostgreSQL database. **Required**
- **`JOBS_DB_PASSWORD`**: The password for database authentication. **Required**
- **`JOBS_DB_SSLMODE`**: The SSL mode for database connections (e.g., `disable`, `require`). **Required**
- **`JOBS_DB_TIMEZONE`**: The timezone for database operations (e.g., `UTC`). **Required**
- **`JOBS_DB_QUERY_TIMEOUT`**: Default timeout for all database operations. Default: `30s`
- **`JOBS_DB_ROLLUP_QUERY_TIMEOUT`**: Extended timeout for compliance rollup operations (backfill and daily rollup). Default: `10m`

## Redis Database

- **`JOBS_REDIS_HOST`**: The host address of the Redis database. **Required**
- **`JOBS_REDIS_PORT`**: The port of the Redis database. **Required**
- **`JOBS_REDIS_DB`**: The database index for Redis (e.g., `0`). **Required**
- **`JOBS_REDIS_USER`**: The username for Redis authentication. Optional
- **`JOBS_REDIS_PASSWORD`**: The password for Redis authentication. Optional
- **`JOBS_REDIS_CERT`**: The certificate path for Redis TLS connections. Optional
- **`JOBS_REDIS_SET_NAMESPACES_TTL`**: The TTL for cached user namespaces (e.g., `60s`). **Required**
- **`JOBS_REDIS_LIST_TASK_ANALYSIS_TTL`**: TTL for analysis task lists. Default: `2h`
- **`JOBS_REDIS_LIST_TASK_FIX_TTL`**: TTL for fix task lists. Default: `1h`

## Worker Configuration

- **`JOBS_WORKER_REDIS_BLOCKING_TIMEOUT`**: Maximum time to block on Redis operations before refreshing connection. Default: `30m`

## Frontend Configuration

- **`DEBUG`**: Enables debug mode for the frontend when set to `true`. Default: `false`
- **`ALLOW_EXTERNAL_QUERIES`**: When set to `true`, allows the frontend to perform external queries. Set to `false` to prevent R2Devops from initiating queries to sources other than backend and GitLab. Default: `true`
