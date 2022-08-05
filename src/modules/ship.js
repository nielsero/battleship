class Ship {
  constructor(length) {
    this.length = length
    this.hits = []
  }

  hit(position) {
    if (position < 0 || position >= this.length) return
    if (this.hits.includes(position)) return
    this.hits.push(position)
  }

  isSunk() {
    return this.hits.length === this.length
  }
}

export default Ship
