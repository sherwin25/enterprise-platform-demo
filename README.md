# Enterprise Platform Demo

## Project Goal
To simulate the role of a **Platform Engineer** in an enterprise environment.
We will use **Terraform** to manage **Kubernetes/OpenShift** resources, enforcing governance and best practices through code.

## Tech Stack
*   **Terraform:** Infrastructure as Code (IaC).
*   **Kubernetes:** The target platform (simulating OpenShift).
*   **Local Environment:** Using `minikube` or `CodeReady Containers` to run the cluster locally.

## Modules
1.  **Namespace Provisioning:** Automating the creation of team workspaces.
2.  **Resource Quotas:** Preventing teams from using too many resources.
3.  **Access Control:** Managing who can do what via Code.
