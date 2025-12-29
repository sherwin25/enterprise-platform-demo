module "payments_prod" {
  source       = "./modules/tenant"
  tenant_name  = "payments-prod"
  quota_cpu    = "4"
  quota_memory = "8Gi"
  allow_external_traffic = false # SECURE: Internal Only
}

module "storefront_public" {
  source       = "./modules/tenant"
  tenant_name  = "storefront-public"
  quota_cpu    = "2"
  quota_memory = "4Gi"
  allow_external_traffic = true # PUBLIC: User Traffic Allowed
}

module "data_science_dev" {
  source       = "./modules/tenant"
  tenant_name  = "data-science-dev"
  quota_cpu    = "8" # High Compute for AI
  quota_memory = "16Gi"
  allow_external_traffic = false # SECURE: Sandbox
}
