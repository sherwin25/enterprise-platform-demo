variable "tenant_name" {
  description = "Name of the tenant/team"
  type        = string
}

variable "quota_cpu" {
  description = "Max CPU limit"
  type        = string
  default     = "1"
}

variable "quota_memory" {
  description = "Max Memory limit"
  type        = string
  default     = "2Gi"
}

variable "allow_external_traffic" {
  description = "Whether to allow passing traffic from the internet (Ingress)"
  type        = bool
  default     = false
}
