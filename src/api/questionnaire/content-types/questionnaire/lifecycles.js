module.exports = {
    async afterCreate(event) {
        const { result } = event;

        const checkResult = (value) => {
            if (!value)
                return "Champs vide";
            return value;
        }

        try {
            await strapi.plugins['email'].services.email.send({
                to: 'nicolas@peurdelavion.fr',
                from: 'noreply@peurdelavion.fr',
                replyTo: 'noreply@peurdelavion.fr',
                subject: "[Nouveau Questionnaire] peurdelavion.fr",
                html: `
                <html>
                <body>
                    <h3>Nouvelle réponse au questionnaire</h3>
                    <br/>
                    <p>Sexe: <strong>${result.sexe}</strong></p>
                    <p>Prenom: <strong>${result.firstName}</strong></p>
                    <p>Nom: <strong>${result.lastName}</strong></p>
                    <p>Email: <strong>${result.email}</strong></p>
                    <p>Mobile: <strong>${result.mobile}</strong></p>
                    <p>Code postal: <strong>${result.postalCode}</strong></p>
                    <br/>
                    <p>Comment avez-vous connu notre site internet ?: <strong>${result.comment_avez_vous_connu_notre_site}</strong></p>
                    <p>Avez-vous déja pris l'avion ?: <strong>${result.avez_vous_deja_pris_lavion}</strong></p>
                    <p>Depuis combien de temps n'avez-vous pas pris l'avion ?: <strong>${result.depuis_combie_de_temps_navez_vous_pas_pris_lavion}</strong></p>
                    <p>Votre peur a commencé: <strong>${result.votre_peur_a_commence}</strong></p>
                    <p>S'il y a eu un élément déclencheur, lequel ?: <strong>${checkResult(result.element_declencheur)}</strong></p>
                    <br/>
                    <p>Acheter un billet d'avion: <strong>${result.acheter_un_billet_davion}</strong></p>
                    <p>Voir un avion: <strong>${result.voir_un_avion}</strong></p>
                    <p>Amener quelqu'un à l'aéroport: <strong>${result.amener_quelquun_a_laeroport}</strong></p>
                    <p>Prendre l'avion: <strong>${result.prendre_lavion}</strong></p>
                    <p>Le décollage: <strong>${result.le_decollage}</strong></p>
                    <p>Des bruits dans l'avion: <strong>${result.des_bruits_dans_lavion}</strong></p>
                    <p>D'une panne de moteur: <strong>${result.dune_panne_de_moteur}</strong></p>
                    <p>Du crash: <strong>${result.du_crash}</strong></p>
                    <br/>
                    <p>Des turbulences: <strong>${result.des_turbulences}</strong></p>
                    <p>D'une rupture de la structure de l'avion / des ailes: <strong>${result.dune_rupture_de_la_structure_de_lavion_ou_des_ailes}</strong></p>
                    <p>Des orages: <strong>${result.des_orages}</strong></p>
                    <p>D'un vol de nuit: <strong>${result.dun_vol_de_nuit}</strong></p>
                    <p>De l'atterrissage: <strong>${result.de_latterrissage}</strong></p>
                    <p>D'un attentat: <strong>${result.dun_attentat}</strong></p>
                    <p>De la peur d'avoir peur: <strong>${result.de_la_peur_davoir_peur}</strong></p>
                    <p>De l'enfermement: <strong>${result.de_lenfermement}</strong></p>
                    <p>Si un autre élément, précisez: <strong>${checkResult(result.si_un_autre_element_precisez)}</strong></p>
                    <br/>
                    <p>D'une manière générale, avez-vous peur en altitude ?: <strong>${result.dune_maniere_generale_avez_vous_peur_en_altitude}</strong></p>
                    <p>D'une manière générale, avez-vous des problèmes dans les endroits confinés ?: <strong>${result.dans_les_endroits_confines}</strong></p>
                    <p>D'une manière générale, avez-vous le besoin de toujours garder le contrôle de chaque situation ?: <strong>${result.garder_le_controle_de_chaque_situation}</strong></p>
                    <p>Avez-vous déja fait une crise de panique ?: <strong>${result.avez_vous_deja_fait_une_crise_de_panique}</strong></p>
                    <p>Sélectionnez les moyens de transport dans lesquels vous ressentez une gêne importante: <strong>${result.ressentez_une_gene_importante}</strong></p>
                    <br/>
                    <p>Avez-vous un vol de prévu ?: <strong>${result.avez_vous_un_vol_de_prevu}</strong></p>
                    <p>Quelle ville vous interesserait le plus pour suivre notre stage ?: <strong>${result.quelle_ville_vous_interesserait_le_plus_pour_suivre_notre_stage}</strong></p>
                </body>
                </html>    
                    `,
            }); 
        } catch(err) {
            console.log(err);
        }
    }
}