import Pyramid from '../../../content/game/pyramid.md'

let config = {
    title: 'SOLITAIRE | How to Play Pyramid Solitaire',
    description: 'Pyramid Solitaire: How to play Pyramid Solitaire',
    keywords: 'solitaire, solitaire100, card, games, pyramid, game, tutorial'
}

let PyramidTutorialPage = () => (<div className="container plain-content"><Pyramid /></div>)
PyramidTutorialPage.getInitialProps = () => config
export default PyramidTutorialPage