import React from 'react'
import { academicsData } from '../data/academicsData'
import ProgramHero from '../components/academics/ProgramHero'
import ProgramOverview from '../components/academics/ProgramOverview'
import ProgramWhyChoose from '../components/academics/ProgramWhyChoose'
import ProgramWhatYouWillLearn from '../components/academics/ProgramWhatYouWillLearn'
import ProgramEligibility from '../components/academics/ProgramEligibility'
import ProgramAdmission from '../components/academics/ProgramAdmission'
import ProgramPractical from '../components/academics/ProgramPractical'
import ProgramScope from '../components/academics/ProgramScope'
import ProgramCareers from '../components/academics/ProgramCareers'

export default function AcademicsPage({ currentProgram = 'B.Ed', onProgramChange }) {
  const data = academicsData[currentProgram] || academicsData['B.Ed']

  return (
    <div className="space-y-0">
      <ProgramHero data={data.hero} />
      <ProgramOverview data={data.overview} />
      <ProgramWhyChoose data={data.whyChoose} />
      <ProgramWhatYouWillLearn data={data.whatYouWillLearn} />
      <ProgramEligibility data={data.eligibility} />
      <ProgramAdmission data={data.admission} />
      <ProgramPractical data={data.practical} />
      <ProgramScope data={data.scope} />
      <ProgramCareers data={data.careers} />
    </div>
  )
}
