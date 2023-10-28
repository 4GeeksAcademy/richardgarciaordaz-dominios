let pronouns = ["the", "our"];
let adjectives = ["great", "big"];
let nouns = ["jogger", "racoon"];
let extensions = [".com", ".net", ".us", ".io"];

for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      for (let extension of extensions) {
        let domain = pronoun + adjective + noun + extension;
        console.log(domain);
      }
    }
  }
}
