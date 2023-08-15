class Planet {
  constructor(mass, volume, mainComposition) {
    this.mass = mass;
    this.volume = volume
    this.mainComposition = mainComposition;
    this.density = this.mass / this.volume;
  }

}

const earth = new Planet (5972000000000000000000000, 1083210000000000000, 'oxygyen')

console.log(earth);

class Star extends Planet {
  constructor(mass, volume, mainComposition, timeLeft) {
    super(mass, volume, mainComposition);
    this.timeLeft = timeLeft;
  }
}

const alphaCentauriA = new Star(242800000000000000000000000000, 300000000000000000000, 'hydrogen', '4b') 

console.log(alphaCentauriA)