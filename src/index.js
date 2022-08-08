import "./style.css"
import game from "./modules/game"
import { addNewPlayerGameboard, addNewComputerGameboard } from "./modules/dom"
main()

function main() {
  addNewPlayerGameboard()
  addNewComputerGameboard()
  // game()
}
