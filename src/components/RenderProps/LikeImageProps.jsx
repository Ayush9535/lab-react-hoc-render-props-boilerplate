import React from 'react'
import RenderProp from './RenderProp'

function LikeImageProps() {
  return (
    <RenderProp>
        {
            ({count , handleCount}) => (
                <div>
                    <button onClick={handleCount}>Like Image Render {count}</button>
                </div>
            )
        }
    </RenderProp>
  )
}

export default LikeImageProps
