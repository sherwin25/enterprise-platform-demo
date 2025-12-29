variable "tenant_name" {
  description = "The name of the team or tenant (e.g., 'finance', 'backend-api')"
  type        = string
  default     = "marketing-demo"
}

variable "cpu_quota" {
  description = "Max CPU cores the tenant can use"
  type        = string
  default     = "2"
}

variable "memory_quota" {
  description = "Max RAM the tenant can use"
  type        = string
  default     = "4Gi"
}
