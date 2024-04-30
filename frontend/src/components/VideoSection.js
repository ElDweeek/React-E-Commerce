
import '../Css/videoSection.css'

const VideoSection = () => {
  return (
    <>
      <div className="video">
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          src="../images/aboutUs.mp4"
          type="video/mp4"
        />
        <div className="text  text-center">
          <h3>Reading Benefits</h3>
          <p>
            "Writing and reading decrease our sense of isolation. They deepen and
            widen and expand our sense of life: They feed the soul. When writers
            make us shake our heads with the exactness of their prose and their
            truths, and even make us laugh about ourselves or life, our buoyancy is
            restored. We are given a shot at dancing with, or at least clapping
            along with, the absurdity of life, instead of being squashed by it over
            and over again. It's like singing on a boat during a terrible storm at
            sea. You can't stop the raging storm, but singing can change the hearts
            and spirits of the people who are together on that ship."
          </p>
          <div className="btn mt-4 ps-5 pe-5 pt-3 pb-3">See More</div>
        </div>
      </div>
    </>
  )
}

export default VideoSection;