module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'manucoccolo@gmail.com',
                from: 'noreply@peurdelavion.fr',
                replyTo: 'noreply@peurdelavion.fr',
                subject: "[Nouveau partenaire] peurdelavion.fr",
                html: `
                <html>
                <body>
                    <h3>Nouvelle réponse au formulaire de partenariat</h3>
                    <br/>
                    <p>Message de: ${result.firstName}  ${result.lastName} </p>
                    <p>Envoyé depuis: ${result.email}</p>
                    <p>Numéro de téléphone: ${result.phone}</p>
                    <br/>
                    <p>Message:<br/>${result.message}</p>
                </body>
                </html>    
                    `,
            }); 
        } catch(err) {
            console.log(err);
        }
    }
}