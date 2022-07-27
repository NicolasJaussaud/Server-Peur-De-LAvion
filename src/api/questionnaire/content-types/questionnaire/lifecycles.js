module.exports = {
    async afterCreate(event) {
        const { result } = event;

        console.log("result => ", result);
        try {
            await strapi.plugins['email'].services.email.send({
                to: 'manucoccolo@gmail.com',
                from: 'noreply@peurdelavion.fr',
                replyTo: 'noreply@peurdelavion.fr',
                subject: "[Nouveau Questionnaire] peurdelavion.fr",
                html: `
                <html>
                <body>
                    <h3>Nouvelle réponse au questionnaire</h3>
                    <br/>
                    <p>Sexe: ${result.sexe}</p>
                    <p>Prenom: ${result.firstName}</p>
                    <p>Nom: ${result.lastName}</p>
                    <p>Email: ${result.email}</p>
                    <p>Mobile: ${result.mobile}</p>
                    <p>Code postal: ${result.postalCode}</p>
                    <br/>
                    <p>Comment avez-vous connu notre site internet ?: ${result.comment_avez_vous_connu_notre_site}</p>
                    <p>Avez-vous déja pris l'avion ?: ${result.avez_vous_deja_pris_lavion}</p>
                    <p>Depuis combien de temps n'avez-vous pas pris l'avion ?: ${result.depuis_combie_de_temps_navez_vous_pas_pris_lavion}</p>
                    <p>Votre peur a commencé: ${result.votre_peur_a_commence}</p>
                    <p>S'il y a eu un élément déclencheur, lequel ?: ${result.element_declencheur}</p>
                    <br/>
                    <p>Acheter un billet d'avion: ${result.acheter_un_billet_davion}</p>
                    <p>Voir un avion: ${result.voir_un_avion}</p>
                    <p>Amener quelqu'un à l'aéroport: ${result.amener_quelquun_a_laeroport}</p>
                    <p>Prendre l'avion: ${result.prendre_lavion}</p>
                    <p>Le décollage: ${result.le_decollage}</p>
                    <p>Des bruits dans l'avion: ${result.des_bruits_dans_lavion}</p>
                    <p>D'une panne de moteur: ${result.dune_panne_de_moteur}</p>
                    <p>Du crash: ${result.du_crash}</p>
                    <br/>
                    <p>Des turbulences: ${result.des_turbulences}</p>
                    <p>D'une rupture de la structure de l'avion / des ailes: ${result.dune_rupture_de_la_structure_de_lavion_ou_des_ailes}</p>
                    <p>Des orages: ${result.des_orages}</p>
                    <p>D'un vol de nuit: ${result.dun_vol_de_nuit}</p>
                    <p>De l'atterrissage: ${result.de_latterrissage}</p>
                    <p>D'un attentat: ${result.dun_attentat}</p>
                    <p>De la peur d'avoir peur: ${result.de_la_peur_davoir_peur}</p>
                    <p>De l'enfermement: ${result.de_lenfermement}</p>
                    <p>Si un autre élément, précisez: ${result.si_un_autre_element_precisez}</p>
                    <br/>
                    <p>D'une manière générale, avez-vous peur en altitude ?: ${result.dune_maniere_generale_avez_vous_peur_en_altitude}</p>
                    <p>D'une manière générale, avez-vous des problèmes dans les endroits confinés ?: ${result.dune_maniere_generale_avez_vous_des_problemes_dans_les_endroits_confines}</p>
                    <p>D'une manière générale, avez-vous le besoin de toujours garder le contrôle de chaque situation ?: ${result.dune_maniere_generale_avez_vous_le_besoin_de_toujours_garder_le_controle_de_chaque_situation}</p>
                    <p>Avez-vous déja fait une crise de panique ?: ${result.avez_vous_deja_fait_une_crise_de_panique}</p>
                    <p>Sélectionnez les moyens de transport dans lesquels vous ressentez une gêne importante: ${result.moyens_de_transport_dans_lesquels_vous_ressentez_une_gene_importante}</p>
                    <br/>
                    <p>Avez-vous un vol de prévu ?: ${result.avez_vous_un_vol_de_prevu}</p>
                    <p>Quelle ville vous interesserait le plus pour suivre notre stage ?: ${result.quelle_ville_vous_interesserait_le_plus_pour_suivre_notre_stage} />
                </body>
                </html>    
                    `,
            }); 
        } catch(err) {
            console.log(err);
        }
    }
}