module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'noreply@peurdelavion.fr',
                replyTo: 'noreply@peurdelavion.fr',
                template_id: "d-7a4aeaddfb6e4e77aee447288b701044",
            }); 
        } catch(err) {
            console.log(err);
        }
    }
}