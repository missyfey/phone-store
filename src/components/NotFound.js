import React from 'react'

export default function NotFound(props) {
    return (
        <div className="page-container notfound">
            <section>
                <h1>404</h1>
                <h1>ERROR</h1>
                <h3>Page Not Found</h3>
    <h4>The requested URL <span className="error-msg">{props.location.pathname}</span> was not found</h4>
            </section>
        </div>
    )
}
