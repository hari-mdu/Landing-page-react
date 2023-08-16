import React from 'react'
import { RecordCircle, RecordCircleFill } from 'react-bootstrap-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <div>
    <VerticalTimeline layout={ '2-columns' } lineColor={ 'black' }>
    
  <VerticalTimelineElement 
    className="vertical-timeline-element--work display-5 mt-5"
    contentStyle={{  color: 'black' }}    
    iconStyle={{ background: 'rgb(11, 25, 211)', color: '#fff' }}
    icon={<RecordCircleFill/>}
    
  >
 

  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work display-5"
    contentStyle={{  color: 'black' }}    
    iconStyle={{ background: 'rgb(11, 25, 211)', color: '#fff' }}
    icon={<RecordCircleFill/>}
  >
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
     className="vertical-timeline-element--work display-5"
    contentStyle={{  color: 'black' }}    
    iconStyle={{ background: 'rgb(11, 25, 211)', color: '#fff' }}
    icon={<RecordCircleFill/>}
  >
   
  </VerticalTimelineElement>
  
  
  
</VerticalTimeline>
<div class="scroll-icon">
    <RecordCircle size={40}/>
    
    </div>
</div>
  )
}

export default Timeline