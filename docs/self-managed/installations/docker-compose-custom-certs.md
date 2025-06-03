---
sidebar_position: 2
slug: '/self-managed/docker-compose-custom-certs'
---

# Docker compose with custom certificates

This page describes how to set up a self-managed instance of R2Devops using
**Docker-compose**.

## 💻 Requirements

The system requires a Linux server. It runs in 🐳 Docker containers using a
docker-compose configuration. Specifications:

- OS: Ubuntu or Debian
- Hardware
  - CPU x86_64/amd64 with at least 2 cores
  - 4 GB RAM
  - 250 GB of storage for R2Devops
- Network
  - Users must be able to reach the R2Devops server on TCP ports 80 and 443
  - The R2Devops server must be able to access internet
  - The R2Devops server must be able to communicate with GitLab instance
  - The installation process requires write access to the DNS Zone
    to set up R2Devops domain
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

**In your `.env` file:**

1. Add your organization

   - If you use a SaaS version of GitLab (like `gitlab.com`): add the path of
     your organization top-level group in `ORGANIZATION` variable

   ```bash title=".env" hl_lines="1"
   ORGANIZATION="<top-level-group-path>"
   ```

   - Else, let the `ORGANIZATION` variable empty

   ```bash title=".env" hl_lines="1"
   ORGANIZATION=""
   ```

2. Add your license

   - If you don't already have a license, get a free license [here](https://tally.so/r/wo1L0b).
   - Add your license key in the `LICENSE` variable:

   ```bash title=".env" hl_lines="1"
   LICENSE="<license-key>"
   ```

### 📄 Domain name

1. Edit the `.env` file by updating value of `DOMAIN_NAME`, and
   `JOBS_GITLAB_URL` variables

   ```bash title=".env" hl_lines="1-3"
   DOMAIN_NAME="r2devops.<domain_name>"
   JOBS_GITLAB_URL="https://<url_of_your_gitlab_instance>"
   ```

   ```bash title="Example with domain name 'mydomain.com'" hl_lines="1-3"
   DOMAIN_NAME="r2devops.mydomain.com"
   JOBS_GITLAB_URL="https://gitlab.mydomain.com"
   ```
1. Edit the `.docker/r2devops/config.json` file by updating `apiUrl`,
   `apiUrlIdentities` and `gitLabApiUrl` parameters
   :::warning
     Set `allowExternalQueries` to `false` if you want to prevent R2Devops from initiating queries to sources other than `backend` and `GitLab`.
   :::
   ```bash hl_lines="3-5"
   {
       "appTitle": "R2Devops",
       "apiUrl": "https://r2devops.<domain_name>/api",
       "gitLabApiUrl": "https://<gitlab_intance_domain>",
       "selfHosted": true,
       "docUrl": "https://docs.r2devops.io",
       "debug": false,
       "allowExternalQueries": true
   }
   ```

   ```bash title="Example with domain name 'mydomain.com'" hl_lines="3-5"
   {
       "apiUrl": "https://r2devops.mydomain.com/api",
       "gitLabApiUrl": "https://gitlab.mydomain.com",
   }
   ```

1. Create DNS record

   - Name: `r2devops.<domain_name>`
   - Type: `A`
   - Content: `<your-server-public-ip>`

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
```

### 📄 Configure certificate

1. Generate your certificate

   :::info
   - If you already have certificate or if you want to generate it using
   your own process, you can directly go to step 2 - This step requires [certbot](https://github.com/certbot/certbot)

   ```bash
   certbot certonly --manual --preferred-challenges dns -d r2devops.<your_domain>
   # Add DNS entry to solve DNS challenge
   ```
   :::
1. Copy the fullchain and the private key

   :::info
   If you generated your certificates using certbot, they are located in
   `/etc/letsencrypt/live/`

   Replace path in commands below by the path of your certificate:

   ```bash
   cp path_to_r2devops_cert_fullchain .docker/traefik/certs/r2devops_fullchain.pem
   cp path_to_r2devops_cert_privkey .docker/traefik/certs/r2devops_privkey.pem
   ```
   :::

### 📋 (Optional) Add your custom CA

If your GitLab instance and/or R2Devops are using a TLS certificate signed with
your own Certificate authority (CA):

- Add the CA certificate file in `.docker/ca-certificates`

### 🚀 Launch the application

:::success[Congratulations]
You have successfully installed R2Devops on your server 🎉

    Now you can launch the application and ensure everything works as expected.

Run the following command to start the system:

```bash
docker compose -f compose.custom_certs.yml up -d
```
:::

:::info[Reconfigure]
If you need to reconfigure some files and relaunch the application,
after your updates you can simply run the command again to do so.
```bash
docker compose -f compose.custom_certs.yml up -d
```
:::

:::danger[Not the same behavior]
Did you encounter a problem during the installation process ? See the
[troubleshooting](../troubleshooting.md) section.
:::

## ⏫ Update

Follow these steps to update your self-managed instance to a new version:

1. Navigate to the location of your
   [`self-managed`](https://github.com/r2devops/self-managed/) git repository
1. Update it
   ```sh
   git pull
   ```
1. Open the `.env.example` file and copy the values of  `FRONTEND_IMAGE_TAG`
   and `BACKEND_IMAGE_TAG` variables
1. Edit the `.env` file by updating values of `FRONTEND_IMAGE_TAG` and
   `BACKEND_IMAGE_TAG` variables with the values previously copied
   ```sh title=".env" hl_lines="1-2"
   FRONTEND_IMAGE_TAG="<new frontend version>"
   BACKEND_IMAGE_TAG="<new backend version>"
   ```
1. Restart your containers
   ```sh
   docker compose -f compose.custom_certs.yml up -d
   ```
1. You have successfully updated R2Devops on your server 🎉

## 🔄 Backup and restore

Data required to fully backup and restore a R2Devops system are the following:

- Configuration file: `.env`
- Databases:
  - PostgreSQL database of Jobs service
- Files data:
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
   [requirements](#-requirements)
1. Copy the backup file on your new server
1. Clone the installation repository
   ```bash
   git clone https://gitlab.com/r2devops/self-managed.git r2devops
   cd r2devops/docker-compose
   ```
1. If the IP address of your server changed from your previous installation,
   update your DNS records. See [section
   2](#-domain-name) of domain configuration
1. Launch the restore script
   ```bash
   ./restore.sh <path_to_your_backup_file>
   ```

:::danger[Any errors during the restore process ?]
Did you encounter a problem during the restore process ? See the
[troubleshooting](../troubleshooting.md) section.
:::


