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
## 🚀 Deployment

### Backend (Infrastructure)
The Terraform code lives in the root directory. To run it locally:
1. Install Minikube & Terraform.
2. Run `minikube start --driver=podman`.
3. Run `terraform init && terraform apply`.

### Frontend (Showcase Site)
The visual showcase lives in the `web/` directory.
**To Deploy to Vercel:**
1. Import this repository.
2. **Important:** Change the "Root Directory" to `web`.
3. Click Deploy.
