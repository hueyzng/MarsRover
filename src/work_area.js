export default class WorkArea {
  constructor(text) {
    const coordinates = text.split(' ')
    this.x = Number(coordinates[0])
    this.y = Number(coordinates[1])
  }
}
