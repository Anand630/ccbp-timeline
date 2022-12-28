import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  return (
    <div className="home-container">
      <h1 className="my-journey-text">
        MY JOURNEY OF
        <br />
        <span className="ccbp-heading-text"> CCBP 4.0</span>
      </h1>

      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: '#ffffff',

            titleColor: '#0967d2',
            titleColorActive: 'red',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard timelineItem={eachItem} key={eachItem.id} />
              )
            }
            return (
              <ProjectTimelineCard timelineItem={eachItem} key={eachItem.id} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
