import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | Free Solitaire Card Games – Classic Solitaire',
    description: 'Solitaire card games: Classic Solitaire/Klondike Solitaire, Spider Solitaire, Pyramid Solitaire, FreeCell Solitaire, and more free solitaire games coming soon!',
    keywords: 'solitaire, solitaire100, card, games, classic, klondike'
}

let ClassicGamePage = () => (<GameCanvas type="klondike" />)
ClassicGamePage.getInitialProps = () => config
export default ClassicGamePage