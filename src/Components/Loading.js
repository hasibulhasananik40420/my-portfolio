import React from 'react';
import { Skeleton } from 'antd';
const Loading = () => {
    return (
        <div>
            <Skeleton
                avatar
                paragraph={{
                    rows: 4,
                }}
            />
        </div>
    );
};

export default Loading;