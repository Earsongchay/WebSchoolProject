import React from 'react';
import Cover from '../components/Cover';
import SchoolDetails from '../container/SchoolDetails';
import ApplyDetails from '../container/ApplyDetails';
import MajorContainer from '../container/MajorContainer';
import Message from '../container/message';
import NewsContainer from '../container/NewsContainer';
import Youtube from '../container/youtube';
function HomeScreen() {
  return (
    <div>
      <Cover />
      <SchoolDetails title='SETEC INSTITUTE' desc='At SETEC INSTITUTE, we conduct up-to-date degree programs to equip our students with skills that companies nowadays are looking for. Other then designing the programs with important Management units like Public Relations, Marketing and Accounting, we also place emphasis on Business English. In summary, our programs will not only provide specialization in the respective majors, we also prepare our students for their career after graduation.'></SchoolDetails>
      <ApplyDetails></ApplyDetails>
      <MajorContainer/>
      <Message></Message>
      <NewsContainer></NewsContainer>
      <Youtube></Youtube>
    </div>
  )
}

export default HomeScreen
