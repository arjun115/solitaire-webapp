import React, { Component } from 'react'

export default class GameCanvas extends Component {

    _games = {
        klondike: {
            howToUrl: '/game/classic/tutorial',
            baseURL: '/assets/klondike',
            splash: '/splash/klondike.jpg',
            srcPath: '/klondike-shared.js',
            mode: {
                1: '/game/classic',
                3: '/game/classic/turn-3'
            }
        },
        spider: {
            howToUrl: '/game/spider/tutorial',
            baseURL: '/assets/spider',
            splash: '/splash/spider.jpg',
            srcPath: '/spider-shared.js',
            mode: {
                1: '/game/spider',
                2: '/game/spider/2-suits',
                4: '/game/spider/4-suits'
            }
        },
        freecell: {
            howToUrl: '/game/freecell/tutorial',
            baseURL: '/assets/freecell',
            splash: '/splash/freecell.jpg',
            srcPath: '/freecell-shared.js'
        },
        pyramid: {
            howToUrl: '/game/pyramid/tutorial',
            baseURL: '/assets/pyramid',
            splash: '/splash/pyramid.jpg',
            srcPath: '/pyramid-shared.js'
        }
    }

    selected = null
    state = {
        rendered: false
    }

    run() {
        const loadJS = require('load-js')
        let { howToUrl, baseURL, srcPath } = this.selected
        loadJS(['/phaser.js', srcPath]).then(() => {
            let { runGame } = window
            this.setState({ rendered: true }, () => {
                runGame({ onHowTo: this.openTutorial(howToUrl), baseURL, type: this.props.mode, openGame: (mode) => this.openGame(mode) })
            })
        })
    }

    openTutorial = (url) => {
        return () => {
            window.open(url, '_blank')
        }
    }

    openGame(mode) {
        let url = this.selected.mode[mode]
        window.open(url, '_self')
    }

    componentWillMount() {
        let { type } = this.props
        this.selected = this._games[type]
    }

    render() {
        const { splash } = this.selected

        let splashDOM = (<>
            <div className="splash">
                <img alt="game splash" src={splash} />
            </div>
            <div className="play-button" onClick={() => this.run()}>
                Play Now
            </div>
        </>)

        return (
            <>
                <div id="game" className={this.state.rendered ? 'game-playground' : 'game-canvas'}>
                    {this.state.rendered ? '' : splashDOM}
                </div>
            </>
        )
    }
}