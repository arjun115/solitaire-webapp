import Spider from '../../../content/game/spider.md'

let config = {
    title: 'SOLITAIRE | How to Play Spider Solitaire',
    description: 'Spider Solitaire: How to play Spider Solitaire 1 Suit, Spider Solitaire 2 Suit, and Spider Solitaire 4 Suit',
    keywords: 'solitaire, solitaire100, card, games, spider, game, tutorial'
}

let SpiderTutorialPage = () => (<div className="container plain-content"><Spider /></div>)
SpiderTutorialPage.getInitialProps = () => config
export default SpiderTutorialPage