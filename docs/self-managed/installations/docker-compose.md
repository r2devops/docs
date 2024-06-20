---
sidebar_position: 2
slug: '/self-managed/docker-compose'
---

# Docker compose

This page describes how to setup a self-managed instance of R2Devops using
**Docker-compose**.

## 💻 Requirements

The system requires a Linux server. It runs in 🐳 Docker containers using a
docker-compose configuration. Specifications:

- OS: Ubuntu or Debian
- Hardware
  - CPU x86_64/amd64 with at least 2 cores
  - 4 GB RAM
  - 30 GB of storage for R2Devops
- Network

  - Users must be able to reach the R2Devops server on TCP ports 80 and 443
  - The R2Devops server must be able to access internet
  - The R2Devops server must be able to communicate with GitLab instance
  - The installation process required to have a write access to the DNS Zone
    to setup R2Devops domain
  - If the server is not reachable from internet or if you want to use your
    own certificate for HTTPS, you need to be able to generate certificate
    during the installation process for R2Devops domain

- Installed software
  - [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - [Docker](https://docs.docker.com/engine/install/)
  - Note: both compose plugin (`docker compose`) and `docker-compose` CLI are
    working. The first one is installed by default with `Docker`

## 🛠️ Installation

### 📥 Setup your environment

1. Clone the repository on your server
   ```sh
   git clone https://github.com/r2devops/self-managed.git r2devops
   cd r2devops
   ```
1. Create your configuration files
   ```sh
   cp .env.example .env
   cp .docker/r2devops/config.json.example .docker/r2devops/config.json
   ```

### 📋 Organization

In your `.env` file:

1. Add your organization

   - If you use a SaaS version of GitLab (like `gitlab.com`): add the path of
     your organization top-level group in `ORGANIZATION` variable

   ```bash title=".env" hl_lines="1"
   ORGANIZATION="<top-level-group-name>"
   ```

   - Else, let the `ORGANIZATION` variable empty

   ```bash title=".env" hl_lines="1"
   ORGANIZATION=""
   ```

2. (Optional) Add your license

   :::info[License key]
   If you do not have a license key, you can let the variable `LICENSE`
   empty (`value: ""`). Your R2Devops instance will be limited to 5
   projects.

   Add your license key (provided by R2Devops): edit the `.env` file by
   updating value of `LICENSE` variable:

   ```bash title=".env" hl_lines="1"
   LICENSE="<license-key>"
   ```
   :::
### 📄 Domain name

1. Edit the `.env` file by updating value of `DOMAIN_NAME`, `CERTIFICATE_EMAIL`
   and `JOBS_GITLAB_URL` variables

   ```bash title=".env" hl_lines="1-3"
   DOMAIN_NAME="r2devops.<domain_name>"
   CERTIFICATE_EMAIL="<your_email>"
   JOBS_GITLAB_URL="https://<url_of_your_gitlab_instance>"
   ```

   ```bash title="Example with domain name 'mydomain.com'" hl_lines="1-3"
   DOMAIN_NAME="r2devops.mydomain.com"
   CERTIFICATE_EMAIL="tech@mydomain.com"
   JOBS_GITLAB_URL="https://gitlab.mydomain.com"
   ```

1. Edit the `.docker/r2devops/config.json` file by updating `apiUrl`,
   `apiUrlIdentities` and `gitLabApiUrl` parameters

   ```bash hl_lines="3-5"
   {
       "appTitle": "R2Devops",
       "apiUrl": "https://r2devops.<domain_name>/api",
       "gitLabApiUrl": "https://<gitlab_intance_domain>",
       "selfHosted": true,
       "docUrl": "https://docs.r2devops.io"
   }
   ```

   ```bash title="Example with domain name 'mydomain.com'" hl_lines="1-3"
   "apiUrl": "https://r2devops.mydomain.com/api",
   "gitLabApiUrl": "https://gitlab.mydomain.com",
   ```

1. Create DNS record

   - Name: `r2devops.<domain_name>`
   - Type: `A`
   - Content: `<your-server-public-ip>`

:::info[Certificate]
A certificate will be auto-generated using Let's encrypt at the application
launch
:::
### 🦊 GitLab OIDC

R2Devops uses GitLab as an OAuth2 provider to authenticate users. Let's see how
to connect it to your GitLab instance.

#### Create an application

Choose a group on your GitLab instance to create an application. It can be any
group. Open the chosen group in GitLab interface and navigate through
`Settings > Applications`:

![Profile_Menu](./img/profile_menu_gitlab.png)

Then, create an application with the following information :

- Name: `R2Devops self-managed`
- Redirect URI :
  `https://r2devops.<domain_name>/api/auth/gitlab/callback`
- Confidential: `true` (let the box checked)
- Scopes: `api`

Click on `Save Application` and you should see the following screen:

![Application](./img/application_created_gitlab.png)

#### Update the configuration

In `.env` file:

1. Copy/paste the `Application ID` and the `Secret` from the application you
   just created
   ```bash title=".env" hl_lines="1-2"
   GITLAB_OAUTH2_CLIENT_ID="<application-id>"
   GITLAB_OAUTH2_CLIENT_SECRET="<application-secret>"
   ```

### 🔐 Generate secrets

Generate random secrets for all components:

```bash
sed -i."" "s/REPLACE_ME_BY_SECRET_KEY/$(openssl rand -hex 32)/g" .env
sed -i."" "s/REPLACE_ME_BY_JOBS_DB_PASSWORD/$(openssl rand -hex 16)/g" .env
sed -i."" "s/REPLACE_ME_BY_JOBS_REDIS_PASSWORD/$(openssl rand -hex 16)/g" .env
sed -i."" "s/REPLACE_ME_BY_S3_SECRET_KEY/$(openssl rand -hex 16)/g" .env
```

### 🚀 Launch the application

:::success[Congratulations]
You have successfully installed R2Devops on your server 🎉

    Now you can launch the application and ensure everything works as expected.

Run the following command to start the system:

```bash
docker compose up -d
```
:::

:::info[Reconfigure]
If you need to reconfigure some files and relaunch the application,
after your updates you can simply run the command again to do so.
```bash
docker compose up -d
```
:::

:::note[What's next]
Now that you have finished this tutorial, here are some simple tasks you
should give a try :

    - 📈 Learn how to use the platform by reading the
      [documentation](https://docs.r2devops.io)
    - 📕 Import your first job, here is the
      [tutorial](../marketplace/manage-templates/#create-a-marketplace)
:::

:::danger[Not the same behavior]
Did you encounter a problem during the installation process ? See the
[troubleshooting](troubleshooting) section.
:::

## ⏫ Update

Follow these steps to update your self-managed instance with the latest features

1. **Update the [`self-managed`](https://github.com/r2devops/self-managed/) Git Repository**

   Navigate to the location of your [`self-managed`](https://github.com/r2devops/self-managed/) repository and execute the following commands:

   ```sh
   git fetch          # Fetch the latest changes from the repository
   git pull           # Pull the latest changes from the repository into your directory
   ```

2. **Update Your `.env` File**

   To update the `Frontend` and `Backend` versions in your `.env` file, follow these steps:

   1. Open your `.env.example` file.
   2. Locate and copy the new versions of `FRONTEND_IMAGE_TAG` and `BACKEND_IMAGE_TAG`.
   3. Open your `.env` file and update the same variables with the new versions:

   ```sh
   FRONTEND_IMAGE_TAG="<new_frontend_version>" # For example, v1.35.0
   BACKEND_IMAGE_TAG="<new_backend_version>" # For example, v1.39.0
   ```

1. **Restart Your Containers**

   To apply the latest changes, restart your containers by executing the following command:

   ```sh
   docker compose up -d
   ```

## 🔄 Backup and restore

Data required to fully backup and restore a R2Devops system are the following:

- Configuration file: `.env`
- Databases:
  - PostgreSQL database of Jobs service
- Files data:
  - Files stored in the Minio service
  - File storing data about certificate for Traefik service

All these data can be easily backup and restored using 2 scripts from the
installation git repository:

- `backup.sh`
- `restore.sh`

### 💽 Backup

To backup the system, go to your installation git repository and run the
following command:

```bash
./backup.sh
```

The script will create a `backups` directory and create a backup archive inside
it prefixed with the date (`backup_r2-$DATE`)

:::note[Regular backup]
You can use a cron job to perform regular backups.
Here is a cron job that launch a backup every day at 2am:
```bash
0 2 * * * /r2devops/backup.sh
```
It can be added to your crontab with the command `crontab -e`. Check more
information about cron jobs
[here](https://help.ubuntu.com/community/CronHowto).
:::

### 🛳️ Restore

To restore a backup from scratch on a new system, follow this process:

1. Be sure that your new system is compliant with
   [requirements](#requirements)
1. Copy the backup file on your new server
1. Clone the installation repository
   ```bash
   git clone https://gitlab.com/r2devops/self-managed.git r2devops
   cd r2devops/docker-compose
   ```
1. If the IP address of your server changed from your previous installation,
   update your DNS records. See [section
   2](#domain-name) of domain configuration
1. Launch the restore script
   ```bash
   ./restore.sh <path_to_your_backup_file>
   ```

:::danger[Any errors during the restore process ?]
Did you encounter a problem during the restore process ? See the
[troubleshooting](troubleshooting) section.
:::