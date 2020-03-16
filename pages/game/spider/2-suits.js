import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | Spider Solitaire 2 Suits',
    description: 'Solitaire card games: Spider Solitaire 1 Suit, Spider Solitaire 2 Suits, Spider Solitaire 4 Suits, and more free solitaire games!',
    keywords: 'solitaire, solitaire100, card, games, spider, game'
}

let SpiderGamePage = () => (<GameCanvas type="spider" mode="two" />)
SpiderGamePage.getInitialProps = () => config
export default SpiderGamePage