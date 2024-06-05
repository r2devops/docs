# Troubleshooting

The installation is not working as expected ? You're at the right place !

Here are the common errors and how to solve them
## General

Issues related to all installation methods

:::danger[Redirect URI Invalid error in GitLab]
This error occurs when the Redirect URL set for your GitLab application
doesn't correspond to the `API_URL`. Please, ensure you write the correct
URL as described in the [section
OIDC](docker-compose/#-gitlab-oidc)
:::

## Kubernetes

Issues related to installation on Kubernetes using the Helm chart

:::danger[No persistent volumes for chart dependencies PostgreSQL, Redis and/or MinIO]
These 3 dependencies requires Persistent Volumes to work. If you haven't a
default storage class or if you want to use a specific storage class you need to add an option in all of theses values:

    ```yaml
    minio:
      [...]
      global:
        storageClass: REPLACE_ME_BY_STORAGE_CLASS

    postgresql:
      [...]
      global:
        storageClass: REPLACE_ME_BY_STORAGE_CLASS
        [...]

    redis:
      [...]
      global:
        storageClass: REPLACE_ME_BY_STORAGE_CLASS
    ```
:::
## Support

:::info[Don't find what you're looking for ?]
Reach our support using the `#support` channel on [Discord](https://discord.r2devops.io)
You can also send an email to [support@r2devops.io](mailto:support@r2devops.io)
:::