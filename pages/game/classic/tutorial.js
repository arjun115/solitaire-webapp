import Klondike from '../../../content/game/klondike.md'

let config = {
    title: 'SOLITAIRE | How to Play Classic Solitaire',
    description: 'Classic Solitaire: How to play Classic Solitaire Turn 1 and Classic Solitaire Turn 3',
    keywords: 'solitaire, solitaire100, card, games, classic, klondike, tutorial'
}

let KlondikeTutorialPage = () => (<div className="container plain-content"><Klondike /></div>)
KlondikeTutorialPage.getInitialProps = () => config
export default KlondikeTutorialPage