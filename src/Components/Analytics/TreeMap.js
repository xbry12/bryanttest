import React, { PureComponent } from 'react'
import { Treemap, ResponsiveContainer } from 'recharts';

function TreeMap() {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <Treemap width={400} height={200} data='' dataKey="size" ratio={4 / 3} stroke="#fff" fill="#8884d8" />
        </ResponsiveContainer>
    );
}

export default TreeMap
