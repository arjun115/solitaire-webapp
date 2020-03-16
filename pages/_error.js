let config = {
    title: 'SOLITAITRE100 | Page not found',
    description: '404 - page not found',
    keywords: ''
}

let ErrorPage = () => {
    return (
        <h1 className="centered-header">404 Page Not Found</h1>
    )
}
  
ErrorPage.getInitialProps = () => config
  
export default ErrorPage