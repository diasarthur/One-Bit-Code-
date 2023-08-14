const Author = require("./Author");

const arthur = new Author("Arthur D");

const post = arthur.writePost("Título do post", "Lorem ipsum dolor sic...");

post.addComment("John Doe", "Nice!");
post.addCommentI("Isaac", "Isso ai!")