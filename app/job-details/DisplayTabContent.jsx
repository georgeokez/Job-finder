import { Specifics } from '../../components';
import { TABS } from '../../constants/tabs';

const DisplayTabContent = (activeTab) => {
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

export default DisplayTabContent;
