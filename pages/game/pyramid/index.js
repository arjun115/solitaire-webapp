import GameCanvas from "../../../components/GameCanvas"

let config = {
    title: 'SOLITAIRE | Pyramid Solitaire Online',
    description: 'Solitaire card games: Pyramid Solitaire, Spider Solitaire, and more fre solitaire!',
    keywords: 'solitaire, solitaire100, card, games, pyramid, game'
}

let PyramidGamePage = () => (<GameCanvas type="pyramid" />)
PyramidGamePage.getInitialProps = () => config
export default PyramidGamePage