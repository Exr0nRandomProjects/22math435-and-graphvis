import React from 'react';
import logo from './logo.png';
import Graphin, { Utils } from '@antv/graphin';
import { MiniMap } from '@antv/graphin-components';
import { graphData, defSpringLen } from './secret-data';

//const data = Utils.mock(10).random().graphin();
//console.log(Utils.mock(10).random().graphin())
const data = graphData;

const layout = {
    type: 'graphin-force',
    preset: {
        type: 'random',
    },
    defSpringLen: defSpringLen,
};

function App() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <Graphin
                data={data}
                theme={{ mode: 'dark' }}
                layout={layout}
            >
              <MiniMap style={{ background: "000" }} />
            </Graphin>
        </div>
    );
}

export default App;

