import React from 'react';
import {
    ContentSwitcher
} from 'carbon-components';
// import { InfoSection, InfoCard } from '../../components/Info';

// `#my-content-switcher` is an element with `[data-content-switcher]` attribute
var contentSwitcherInstance = ContentSwitcher.create(
    document.getElementById('my-content-switcher')
);
// `#my-content-switcher-btn-1` is one of the `<button>`s with `bx--content-switcher-btn` class
contentSwitcherInstance.setActive(
    document.getElementById('my-content-switcher-btn-1')
);

const AppContent = () => {
    return (
        <div className="bx--grid bx--grid--full-width appContent">
            <div className="bx--row landing-page__banner">
                <div data-content-switcher className="bx--content-switcher" role="tablist" aria-label="Demo switch content">
                    <button className="bx--content-switcher-btn bx--content-switcher--selected"
                            data-target=".demo--panel--opt-1" role="tab" aria-selected="true">
                        <span>First section</span>
                    </button>
                    <button className="bx--content-switcher-btn" data-target=".demo--panel--opt-2" role="tab">
                        <span>Second section</span>
                    </button>
                    <button className="bx--content-switcher-btn" data-target=".demo--panel--opt-3" role="tab">
                        <span>Third section</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppContent;