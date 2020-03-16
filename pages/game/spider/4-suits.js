import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | Spider Solitaire 4 Suits',
    description: 'Free solitaire games including Spider Solitaire 1 Suit, Spider Solitaire 2 Suits, Spider Solitaire 4 Suits, and other free online solitaire games!',
    keywords: 'solitaire, solitaire100, card, games, spider, game'
}

let SpiderGamePage = () => (<GameCanvas type="spider" mode="four" />)
SpiderGamePage.getInitialProps = () => config
export default SpiderGamePage