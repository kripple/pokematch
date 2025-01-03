class Card {
  constructor(symbol) {
    this.symbol = symbol;
    this.faceUp = false;
    this.matched = false;
  }

  flip() {
    this.faceUp = !this.faceUp;
  }

  match() {
    this.matched = true;
    this.faceUp = false;
  }

  toString(index) {
    const src = `images/${this.symbol}.png`;
    const tag = (className) =>
      `<div id="${index}" class="${className}"><div class="background-image" style="background-image: url(${src})" nopin="nopin" ></div></div>`;

    if (this.matched) {
      return tag(`${CARD} ${HIDDEN}`);
    } else if (!this.faceUp) {
      return tag(`${CARD} ${FACE_DOWN}`);
    } else {
      return tag(CARD);
    }
  }

  isMatch(card) {
    return this.symbol === card.symbol;
  }
}
