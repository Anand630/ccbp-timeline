import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {timelineItem} = props
  const {
    tagsList,
    categoryId,
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
    title,
  } = timelineItem
  console.log(timelineItem)
  return (
    <div className="course-timeline-card-container">
      <img className="card-image" src={imageUrl} alt="project" />
      <div className="title-clock-icon-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="clock-icon-days-container">
          <AiFillCalendar className="clock-icon" />
          <p className="days-needed">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        rel="noreferrer"
        target="_blank"
        className="visit-link"
        href={projectUrl}
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
