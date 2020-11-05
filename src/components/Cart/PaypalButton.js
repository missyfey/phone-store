import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.clearCart()
            this.props.history.push('/')
                }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD';
 
        const client = {
            sandbox:    'ATQn3SNYjhPG-xFqic6ytsxl0G2VTxLLI8dricO3YlBjAgE6dvh3Rtq_-3-daHXtthxn84Y1axL0yGUV',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <div className="paypal-btn-container">
                <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={this.props.total} onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel} />
            </div>
        );
    }
}