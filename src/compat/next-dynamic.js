import React, { lazy, Suspense } from 'react';

const dynamic = (importFn, options) => {
    const Component = lazy(importFn);
    const Loading = options?.loading || (() => null);

    return (props) => (
        <Suspense fallback={<Loading />}>
            <Component {...props} />
        </Suspense>
    );
};

export default dynamic;
