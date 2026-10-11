import { legal } from '../data/legal'

const Block = ({ title, children }) => (
  <section className="card p-6 md:p-8">
    <h2 className="text-2xl mb-3">{title}</h2>
    <div className="space-y-2 text-ink-soft leading-relaxed">{children}</div>
  </section>
)

function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <a href="/" className="font-display font-extrabold text-2xl">
        lafortconseil<span className="text-tomato">.</span>
      </a>
      <p className="eyebrow mt-10">le côté sérieux</p>
      <h1 className="section-title mt-1 mb-10">Mentions légales</h1>

      <div className="space-y-6">
        <Block title="Éditeur du site">
          <p>
            <strong className="text-ink">{legal.owner}</strong> — {legal.tradeName} ({legal.brand})
          </p>
          <p>{legal.legalForm}</p>
          <p>SIRET : {legal.siret}</p>
          <p>Adresse : {legal.address}</p>
          <p>
            Contact : <a className="underline" href={`mailto:${legal.email}`}>{legal.email}</a> · {legal.phone}
          </p>
          <p>Directeur de la publication : {legal.owner}</p>
        </Block>

        <Block title="Hébergement">
          <p>
            {legal.host.name} — {legal.host.address} —{' '}
            <a className="underline" href={legal.host.url} target="_blank" rel="noopener noreferrer">
              {legal.host.url.replace('https://', '')}
            </a>
          </p>
        </Block>

        <Block title="Données personnelles">
          <p>
            {"Ce site n'utilise pas de cookies de suivi et ne stocke aucune donnée. Le formulaire « maquette gratuite » ouvre simplement WhatsApp ou votre messagerie avec un message prérempli : les informations ne sont transmises que si vous choisissez de l'envoyer."}
          </p>
          <p>
            Les données reçues (nom, activité, coordonnées) servent uniquement à répondre à votre demande et ne sont
            jamais revendues. Conformément au RGPD, vous pouvez demander leur consultation, rectification ou
            suppression à <a className="underline" href={`mailto:${legal.email}`}>{legal.email}</a>. Vous pouvez aussi
            adresser une réclamation à la CNIL (cnil.fr).
          </p>
        </Block>

        <Block title="Propriété intellectuelle">
          <p>
            Les textes, visuels et le design de ce site sont la propriété de {legal.owner}. Les sites clients présentés
            (captures, noms, logos) restent la propriété de leurs titulaires respectifs.
          </p>
        </Block>
      </div>

      <p className="mt-10 text-sm text-ink-muted">Dernière mise à jour : {legal.updated}</p>
      <a href="/" className="btn-white mt-6">← Retour au site</a>
    </main>
  )
}

export default LegalPage
