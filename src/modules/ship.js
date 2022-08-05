class Ship {
  constructor(length) {
    this.length = length
    this.hits = []
  }

  hit(position) {
    this.hits.push(position)
  }

  isSunk() {
    return this.hits.length >= this.length
  }
}

export default Ship
