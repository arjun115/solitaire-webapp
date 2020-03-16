import Privacy from '../content/privacy.md'

let config = {
    title: 'SOLITAIRE100 | Privacy',
    description: 'SOLITAIRE100 Privacy Notice',
    keywords: ''
}

let PrivacyPage = () => (<div className="container plain-content"><Privacy /></div>)
PrivacyPage.getInitialProps = () => config
export default PrivacyPage