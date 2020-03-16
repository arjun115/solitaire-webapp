import Cookies from '../content/cookies.md'

let config = {
    title: 'SOLITAIRE100 | Cookies',
    description: 'SOLITAIRE100 Cookie Policy',
    keywords: ''
}

let CookiesPage = () => (<div className="container plain-content"><Cookies /></div>)
CookiesPage.getInitialProps = () => config
export default CookiesPage