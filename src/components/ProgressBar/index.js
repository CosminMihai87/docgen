import React from 'react';
import {
    ProgressIndicator,
    ProgressStep
} from 'carbon-components-react';
import './ProgressIndicator.scss';

const ProgressIndicator = () => {
    return (
        <div className="bx--row progress-indicator">
            <ProgressIndicator
                currentIndex={1}
            >
                <ProgressStep
                    description="Creditor"
                    label="Creditor"
                />
                <ProgressStep
                    description="Debitor"
                    label="Debitor"
                />
                <ProgressStep
                    description="Machete"
                    label="Machete"
                />
            </ProgressIndicator>
        </div>
    );
};

export default ProgressIndicator;
