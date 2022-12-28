import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {timelineItem} = props
  const {
    tagsList,
    categoryId,
    courseTitle,
    description,
    duration,
  } = timelineItem
  console.log(timelineItem)
  return (
    <div className="course-timeline-card-container">
      <div className="title-clock-icon-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="clock-icon-days-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="days-needed">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="elements-container">
        {tagsList.map(eachTag => (
          <p className="element" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
