import "./Error.css";

function Error() {
    return (
        <main>
            <div className="container container-error">
                <span>404</span>
                <p id="error-message">Oups! La page que vous demandez n'existe pas.</p>
            </div>
        </main>
    );
}

export default Error;
