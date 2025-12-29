# Enterprise Platform Demo
## 🚀 Overview
An Automated Multi-Tenant Kubernetes Platform demonstrating **Infrastructure-as-Code**, **Zero Trust Security**, and **GitOps** principles.

> **Live Demo:** [https://enterprise-platform-demo.vercel.app/](https://enterprise-platform-demo.vercel.app/)

## 🏗 Architecture
This project uses **Terraform** to provision a mock Enterprise Environment on Kubernetes (Minikube/OpenShift) with strict governance:

*   **Storefront Tenant:** Public access allowed. Standard quotas.
*   **Payments Tenant:** Zero Trust (Deny-All Network Policy). High security.
*   **Data Science Tenant:** High CPU/Memory quotas. Isolated network.

## 📂 Project Structure

### 1. Frontend (Showcase Site)
**Location:** `Root Directory` (`/`)
A Next.js application that visualizes the infrastructure and explains the business value.
*   **Deploy:** Simply import this repo into Vercel. It will auto-detect the app.

### 2. Backend (Infrastructure)
**Location:** `infrastructure/`
The Terraform code that actually enforces the rules.
*   `modules/tenant`: The reusable logic for Namespace/Quota/NetworkPolicy.
*   `main.tf`: The root configuration spawning the 3 tenants.

## 🛠 Local Setup (Infrastructure)
To run the Terraform code locally:

1.  Move to the infrastructure folder:
    ```bash
    cd infrastructure
    ```
2.  Initialize and Apply:
    ```bash
    terraform init
    terraform apply
    ```
3.  Verify:
    ```bash
    kubectl get networkpolicies -A
    ```

## 📄 License
MIT License.
