import Freecell from '../../../content/game/freecell.md'

let config = {
    title: 'SOLITAIRE | How to Play FreeCell Solitaire',
    description: 'FreeCell Solitaire: How to play FreeCell Solitaire',
    keywords: 'solitaire, solitaire100, card, games, freecell, tutorial'
}

let FreecellTutorialPage = () => (<div className="container plain-content"><Freecell /></div>)
FreecellTutorialPage.getInitialProps = () => config
export default FreecellTutorialPage