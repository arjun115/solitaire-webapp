import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | Free Solitaire – Classic Solitaire Turn 3',
    description: 'Solitaire card games: Classic Solitaire Turn 3, Classic Solitaire Turn 1, and more free solitaire games!',
    keywords: 'solitaire, solitaire100, card, games, classic, klondike'
}

let ClassicGamePage = () => (<GameCanvas type="klondike" mode="three" />)
ClassicGamePage.getInitialProps = () => config
export default ClassicGamePage