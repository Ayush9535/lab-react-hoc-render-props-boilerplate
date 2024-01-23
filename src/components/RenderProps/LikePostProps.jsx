import React from 'react'
import RenderProp from './RenderProp'

function LikePostProps() {
  return (
    <RenderProp>
        {
            ({count , handleCount}) => (
                <div>
                    <button onClick={handleCount}>Like Post Render {count}</button>
                </div>
            )
        }
    </RenderProp>
  )
}

export default LikePostProps
