import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | Spider Solitaire',
    description: 'Solitaire card games: Free solitaire games including Spider Solitaire, Classic Solitaire, FreeCell Solitaire, and Pyramid Solitaire!',
    keywords: 'solitaire, solitaire100, card, games, spider, game'
}

let SpiderGamePage = () => (<GameCanvas type="spider" />)
SpiderGamePage.getInitialProps = () => config
export default SpiderGamePage