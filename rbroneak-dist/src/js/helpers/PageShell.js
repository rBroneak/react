import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const PageShell = Page => {
    return props =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
                transitionEnter={false}
                transitionLeave={false}
                transitionName={'SlideIn'}
            >
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>;
};

export default PageShell;