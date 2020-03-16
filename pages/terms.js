import Terms from '../content/terms.md'

let config = {
    title: 'SOLITAIRE100 | Terms',
    description: 'SOLITAIRE100 Terms and Conditions',
    keywords: ''
}

let TermsPage = () => (<div className="container plain-content"><Terms /></div>)
TermsPage.getInitialProps = () => config
export default TermsPage