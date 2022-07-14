module.exports = {
  async afterCreate(event) {
    const { result } = event;

    const cancelEmailCampaign = async (webinar) => {
      try {
        await strapi.db.query('api::webinar.webinar').update({
          where: { id: { $eq: webinar.id }},
          data: {
            emailStep: 5
          }
        })
      } catch(err) {
        strapi.log.error("ERROR updateWebinar");
      }
    }

    try {
      const webinars = await strapi.db.query('api::webinar.webinar').findMany({
        where: {
          email: {
            $eq: result.email,
          },
        },
      });

      if (!webinars.length) {
        console.log("There are no webinars to process");
        return;
      }

      for (const e of webinars) {
        cancelEmailCampaign(e);
      }


    } catch(err) {
      strapi.log.error("ERROR GET WEBINARS => ", err);
    }
    console.log("EVENT RESERVATION => ", result);
  }
}