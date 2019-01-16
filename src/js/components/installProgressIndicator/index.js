// @flow

import * as React from 'react';
import ProgressIndicator from '@salesforce/design-system-react/components/progress-indicator';

const steps = [
  {
    id: 0,
    label: <i>Log in</i>,
    assistiveText: "You're logged in.",
  },
  {
    id: 1,
    label: <i>Start preflight</i>,
    assistiveText: "You've started the preflight check.",
  },
  {
    id: 2,
    label: <i>Preflight finished</i>,
    assistiveText: 'The preflight check has completed.',
  },
  {
    id: 3,
    label: <i>Start job</i>,
    assistiveText: "You've started the job.",
  },
  {
    id: 4,
    label: <i>Job finished</i>,
    assistiveText: 'The job has completed.',
  },
];

const InstallProgressIndicator = (): React.Node => {
  // TODO compute steps situation from the state?
  const completedSteps = [{ id: 0 }];
  const selectedStep = { id: 1 };
  return (
    <ProgressIndicator
      steps={steps}
      completedSteps={completedSteps}
      selectedStep={selectedStep}
    />
  );
};

export default InstallProgressIndicator;
