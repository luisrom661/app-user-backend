# AWS Configuration using Terraform

resource "tls_private_key" "rsa-4096" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "key_pair" {
  key_name   = var.aws_key_name
  public_key = tls_private_key.rsa-4096.public_key_openssh
}

resource "local_file" "private_key" {
  content  = tls_private_key.rsa-4096.private_key_pem
  filename = var.aws_key_name
}

resource "aws_instance" "one_piece_server" {
  ami           = var.aws_ami # ID de la imagen de Ubuntu 22.04
  instance_type = var.aws_instance_type
  key_name      = aws_key_pair.key_pair.key_name # Cambia esto por el nombre de tu par de claves
  tags = {
    Name = "one-piece-server"
  }
}

# resource "aws_s3_bucket" "one_piece_bucket" {
#   bucket = var.aws_s3_bucket_name  # Cambia esto por el nombre que desees
# }