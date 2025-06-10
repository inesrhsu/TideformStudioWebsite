import './Pages.css'

const About = () => {
  return (
    <section className = "page">
      <div className="title">
        Who we are
      </div>
      <div className="body">
        Tideform studio is a multimedia arts and creative technology studio led 
        by multimedia artist Inés Rodríguez Hsu. We specialize in crafting 
        interactive and immersive experiences that engage audiences across 
        museums, public spaces and branded environments. 
        Our work blends new media arts, storytelling and emerging technologies 
        to create memorable digital experiences.
      </div>
      <div className="subtitle">
        Founder and Multimedia Artist
      </div>
      <div className="body">
        Inés Rodríguez Hsu is a visual artist and creative technologist with a 
        multidisciplinary background in physics and art. She has created 
        interactive visualization tools and experiences alongside scientists and 
        engineers at Carnegie Mellon University, and has previously interned at
        teamLab developing an immersive installation. View Inés' 
        <a href="https://inesrh.com" target="_blank" rel="noopener noreferrer"> <i>Artist Portfolio</i></a>.
      </div>
    </section>
  )
}

export default About