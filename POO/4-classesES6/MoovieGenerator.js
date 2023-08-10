class MoovieGenerator {
  constructor(title, theme, ageGroup) {
    this.title = title;
    this.theme = theme;
    this.ageGroup = ageGroup;
    this.published = false;
    this.soldTickets = 0;
  };

  publish() {
    this.published = true;
  };

  adSoldTickets(quantity) {
    this.soldTickets += quantity;
  };
}

const themeHowl = ["Animation", "Fantasy", "Japanese"];
const howlMovie = new MoovieGenerator("Howl Movie Castle", themeHowl, "+10");
howlMovie.publish();
howlMovie.adSoldTickets(16500000);
console.log(howlMovie);