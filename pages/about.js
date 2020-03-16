import About from '../content/about.md'

let config = {
    title: 'SOLITAIRE100 | About',
    description: 'About SOLITAIRE100.com',
    keywords: ''
}

let AboutPage = () => (<div className="container plain-content"><About /></div>)
AboutPage.getInitialProps = () => config
export default AboutPage