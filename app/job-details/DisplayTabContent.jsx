import { JobAbout, Specifics } from '../../components';
import { TABS } from '../../constants/tabs';

export const displayTabContent = (data, activeTab) => {
  switch (activeTab) {
    case TABS.QUALIFICATIONS:
      return (
        <Specifics
          title={TABS.QUALIFICATIONS}
          points={data[0].job_highlights?.Qualifications ?? ['N/A']}
        />
      );
    case TABS.ABOUT:
      return <JobAbout info={data[0].job_description ?? 'No data provided'} />;
    case TABS.RESPONSIBILITIES:
    default:
      return (
        <Specifics
          title={TABS.RESPONSIBILITIES}
          points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
        />
      );
      break;
  }
};
