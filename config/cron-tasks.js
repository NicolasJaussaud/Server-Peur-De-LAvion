module.exports = {
  // '*/1 * * * *' 1 minute
  // '0/10 * * * * *' 10 secondes

  '0/20 * * * * *': async () => {

    const emails = [
      "d-44c611b8d86c4b79bc2dfed0eb8be507",
      "d-9ed77070a62f47db86c8bb1854b31d61",
      "d-a09b0e2a9d35493b9c71710566426f85",
      "d-d0169120903f40cb92aadfe96d3becd1",
    ]

    const updateWebinar = async (id, nextStep) => {
      try {
        await strapi.db.query('api::webinar.webinar').update({
          where: { id: { $eq: id }},
          data: {
            emailStep: nextStep
          }
        })
      } catch(err) {
        strapi.log.error("ERROR updateWebinar");
      }
    }

    
    const sendEmail = async (webinar) => {
      try {
        await strapi.plugins['email'].services.email.send({
            to: webinar.email,
            from: 'noreply@peurdelavion.fr',
            replyTo: 'noreply@peurdelavion.fr',
            template_id: emails[webinar.emailStep],
        });
      } catch(err) {
          console.log(err);
      }
      console.log(`Send email n°${webinar.emailStep} to ${webinar.email}`);
      updateWebinar(webinar.id, webinar.emailStep + 1);
    }

    try {
      const webinars = await strapi.db.query('api::webinar.webinar').findMany({
        where: {
          $and: [
            {
              emailStep: {
                $lt: 5, // Strictement inférieur à 5
              },
            },
            {
              isProcessed: {
                $eq: false,
              },
            },
          ],
        },
      });
      if (!webinars.length) {
        console.log("There are no webinars to process");
        return;
      }

      for (const e of webinars) {
        sendEmail(e);
      }


    } catch(err) {
      strapi.log.error("ERROR => ", err);
    }
  },
};