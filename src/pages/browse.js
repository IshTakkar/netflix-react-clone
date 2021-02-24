import React from 'react';
import { BrowseContainer } from '../containers/browse';

import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';

const Browse = () => {

    const { films } = useContent('films');
    const { series } = useContent('series');

    const slides = selectionFilter({ series, films });
    // console.log(slides);

    return (
        <BrowseContainer slides={slides}/>
    );
};

export default Browse;