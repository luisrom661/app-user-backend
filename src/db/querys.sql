CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    role VARCHAR(20) NOT NULL DEFAULT 'USER_ROLE' CHECK (role IN ('ADMIN_ROLE', 'USER_ROLE')),
    state BOOLEAN DEFAULT true,
    google BOOLEAN DEFAULT false
);

CREATE TABLE roles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    role VARCHAR(255) NOT NULL
);

ALTER TABLE users
  ADD COLUMN role_id UUID REFERENCES roles(id);

insert into users (name, email, password) values ('Luis', 'luis@google.com', 'hola12345');