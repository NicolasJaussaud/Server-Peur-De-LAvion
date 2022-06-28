module.exports = {
    async afterCreate(event) {
        const { result } = event;

        console.log("result => ", result);
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'jaussaudnc@gmail.com',
                from: 'noreply@peurdelavion.fr',
                replyTo: 'annesophiepic@strapi.io',
                subject: 'Use strapi email provider successfully',
                text: 'Hello world!',
                html: 'Hello world!',
            }); 
        } catch(err) {
            console.log(err);
        }
    }
}