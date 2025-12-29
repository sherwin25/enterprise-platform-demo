# 🚀 Enterprise Platform Demo Script

This guide explains how to show off your "Infrastructure as Code" skills.

## 1. The Setup (Why?)
You are simulating a **Platform Engineer**. Your job is to create a safe space for developers ("tenants") to work.
Instead of clicking around in a web console, you use **Terraform** to define the rules.

## 2. The Commands (How?)
Open your terminal to this folder:
```bash
cd ~/Documents/ai-projects/enterprise-platform-demo
```

### Step A: Check the State
See that Terraform has already created the namespace:
```bash
kubectl get ns marketing-demo
```
*Why:* This proves your code works.

### Step B: Prove the Limits (The "Cool Part")
We set a limit of **2 CPUs** and **4GB RAM**. Let's try to break it.

1. **Deploy a "Good" App:**
   This app requests small resources (0.1 CPU). It should succeed.
   ```bash
   kubectl apply -f verification/success-pod.yaml
   ```
   Check it: `kubectl get pod -n marketing-demo` (Status should be Running)

2. **Deploy a "Greedy" App:**
   This app tries to verify 4 CPUs (which is more than the limit). It should **FAIL**.
   ```bash
   kubectl apply -f verification/fail-pod.yaml
   ```
   *Expectation:* You will see an error saying `forbidden: exceeded quota`.

   **This is the "Money Shot".** You just proved your platform prevents a bad developer from crashing the cluster.

### Step C: Terraform Workflow
If you want to change the limits (e.g., upgrade them to 8GB):
1. Key open `variables.tf` and change `memory_quota` to `"8Gi"`.
2. Run `terraform plan` (It shows you what *will* happen).
3. Run `terraform apply` (It makes it happen).

## 3. Cleanup
When you are done, you can destroy everything with one command:
```bash
terraform destroy
```
