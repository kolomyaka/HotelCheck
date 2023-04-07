import React, { memo } from 'react';

export const typedMemo: <Component extends React.FC<any>>(
    component: Component,
    compare?: (
        prevProps: React.ComponentPropsWithoutRef<Component>,
        newProps: React.ComponentPropsWithoutRef<Component>
    ) => boolean
) => Component = memo;