import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | FreeCell Solitaire Online',
    description: 'Free solitaire card games: FreeCell Solitaire, Spider Solitaire, and other free solitaire games!',
    keywords: 'solitaire, solitaire100, card, games, freecell'
}

let FreecellGamePage = () => (<GameCanvas type="freecell" />)
FreecellGamePage.getInitialProps = () => config
export default FreecellGamePage