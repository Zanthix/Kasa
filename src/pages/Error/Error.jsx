import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div className="kasa_error">
                <h1>404</h1>
                <p>Oups! La page demandée n'existe pas</p>
                <Link to='/'>Retourner sur la page d'acceuil</Link>
            </div>
        </div>
    )
}

export default Error