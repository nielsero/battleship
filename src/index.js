import "./style.css"
import game from "./game_logic/game"
import {
  loadNewComputerGameboard,
  loadNewPlayerGameboard,
} from "./dom_manipulation/loadGameboard"

main()

function main() {
  loadNewComputerGameboard()
  loadNewPlayerGameboard()
  game()
}
