module.exports = {
    async afterCreate(event) {
        const { result } = event;

        const updateWebinar = async (webinar) => {
          try {
            await strapi.db.query('api::webinar.webinar').update({
              where: { id: { $eq: webinar.id }},
              data: {
                emailStep: 1
              }
            })
          } catch(err) {
            strapi.log.error("ERROR updateWebinar");
          }
        }

        /** Send email */
        try {
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'noreply@peurdelavion.fr',
                replyTo: 'noreply@peurdelavion.fr',
                template_id: "d-48c2af4d5cf2493ca2f002b62416d875",
            });
        } catch(err) {
            console.log(err);
        }
        updateWebinar(result);
    }
}