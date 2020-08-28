import Tooltip from '@salesforce/design-system-react/components/tooltip';
import i18n from 'i18next';
import React from 'react';

import { ScratchOrgSpinning } from '@/store/plans/actions';
import { getDuration } from '@/utils/dates';

const Intro = ({
  averageDuration,
  isProductionOrg,
  results,
  cta,
  preMessage,
  postMessage,
}: {
  averageDuration: string | null;
  isProductionOrg: boolean;
  results: React.ReactNode;
  cta: React.ReactNode;
  clickThroughAgreement?: string | null;
  preMessage?: React.ReactNode;
  postMessage?: React.ReactNode;
  // backLink?: React.ReactNode;
  planId?: string;
  isSpinningOrg?: boolean;
  isRunningInstall?: boolean;
  doSpinOrg?: (planId: string, email: string) => Promise<ScratchOrgSpinning>;
}) => {
  const duration = getDuration(averageDuration);

  return (
    <div
      className="slds-p-around_medium
        slds-size_1-of-1
        slds-medium-size_1-of-2"
    >
      <div className="slds-text-longform">
        {duration ? (
          <div className="slds-m-bottom_small">
            <strong>{i18n.t('Average Install Time:')}</strong> {duration}.
            {isProductionOrg ? (
              <Tooltip
                content={i18n.t(
                  'Install times in production orgs will vary depending on how many tests need to be run.',
                )}
                assistiveText={{ triggerLearnMoreIcon: 'Disclaimer' }}
                position="overflowBoundaryElement"
                triggerClassName="slds-p-left_xx-small"
              />
            ) : null}
          </div>
        ) : null}
        {preMessage}
        {results}
        {postMessage}
      </div>
      <div>{cta}</div>
    </div>
  );
};

export default Intro;
