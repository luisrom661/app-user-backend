//TODO: Implementar la entidad User, Profile y Post

// model Post {
//   id        String   @id @default(uuid())
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   title     String   @db.VarChar(255)
//   content   String?
//   published Boolean  @default(false)
//   author    User     @relation(fields: [authorId], references: [id])
//   authorId  String
// }

// model Profile {
//   id     String  @id @default(uuid())
//   bio    String?
//   phone  String?
//   user   User    @relation(fields: [userId], references: [id])
//   userId String  @unique
// }

// model User {
//   id        String   @id @default(uuid())
//   email     String
//   firstName String?
//   lastName  String?
//   posts     Post[]
//   profile   Profile?
// }