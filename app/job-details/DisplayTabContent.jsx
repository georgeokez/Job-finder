import { Specifics } from '../../components';
import { TABS } from '../../constants/tabs';

export const displayTabContent = (data, activeTab) => {
  switch (activeTab) {
    case TABS.QUALIFICATIONS:
      return (
        <Specifics
          title={TABS.QUALIFICATIONS}
          points={data[0].job_highlights?.qualifications ?? ['N/A']}
        />
      );
    case TABS.ABOUT:
    case TABS.RESPONSIBILITIES:
    default:
      break;
  }
};
