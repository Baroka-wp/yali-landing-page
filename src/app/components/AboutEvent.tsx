import YouTubeEmbed from './YouTubeEmbed'

const AboutEvent = () => {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              À Propos de l&apos;Événement
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Le YALI Alumni Summit 2025-Bénin est un rassemblement exceptionnel de leaders africains émergents, 
                visant à catalyser le changement positif à travers le continent. Cet événement de trois jours 
                offre une plateforme unique pour le partage d&apos;idées, le réseautage et la collaboration entre 
                les alumni du programme YALI et d&apos;autres acteurs clés du développement africain.
              </p>
              <p className="mb-4">
                Notre objectif est de stimuler l&apos;innovation, promouvoir un leadership inclusif, et développer 
                des solutions durables aux défis pressants de l&apos;Afrique. Le sommet s&apos;adresse aux jeunes leaders, 
                entrepreneurs, activistes et professionnels engagés dans la transformation positive de leurs communautés.
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <YouTubeEmbed videoId="Yx3enAhcz2s"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutEvent
