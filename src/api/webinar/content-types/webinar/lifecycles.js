module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'noreply@peurdelavion.fr',
                replyTo: 'noreply@peurdelavion.fr',
                template_id: "d-9c48ef7f3d48497fb72d0e059944d583",
            }); 
        } catch(err) {
            console.log(err);
        }
    }
}