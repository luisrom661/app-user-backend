terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }
  }
}

provider "aws" {
  region     = var.aws_region # Cambia esta región según tus necesidades
  access_key = var.aws_access_key
  secret_key = var.aws_secret_key
}