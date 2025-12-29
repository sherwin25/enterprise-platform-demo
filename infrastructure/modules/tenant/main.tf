resource "kubernetes_namespace" "ns" {
  metadata {
    name = var.tenant_name
    labels = {
      managed_by = "terraform-module"
      security   = var.allow_external_traffic ? "public" : "strict"
    }
  }
}

resource "kubernetes_resource_quota" "quota" {
  metadata {
    name      = "${var.tenant_name}-quota"
    namespace = kubernetes_namespace.ns.metadata[0].name
  }
  spec {
    hard = {
      "requests.cpu"    = var.quota_cpu
      "requests.memory" = var.quota_memory
      "limits.cpu"      = var.quota_cpu
      "limits.memory"   = var.quota_memory
    }
  }
}

# ZERO TRUST SECURITY: Deny All Traffic by Default
resource "kubernetes_network_policy" "default_deny" {
  metadata {
    name      = "default-deny-all"
    namespace = kubernetes_namespace.ns.metadata[0].name
  }

  spec {
    pod_selector {} # Selects ALL pods
    policy_types = ["Ingress", "Egress"]
  }
}

# Optional: Allow Public Traffic (Only if requested)
resource "kubernetes_network_policy" "allow_public" {
  count = var.allow_external_traffic ? 1 : 0
  
  metadata {
    name      = "allow-public-ingress"
    namespace = kubernetes_namespace.ns.metadata[0].name
  }

  spec {
    pod_selector {}
    policy_types = ["Ingress"]
    ingress {
      from {
        ip_block {
          cidr = "0.0.0.0/0"
        }
      }
    }
  }
}
