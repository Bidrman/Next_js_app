import React from 'react'

const Jasno = ({ width, height }) => {
    return (
        <div className={'icon'}>
            <svg
                width={width}
                height={height}
                viewBox='0 0 64 64'
                xmlns='http://www.w3.org/2000/svg'
                shapeRendering='geometricPrecision'
                textRendering='geometricPrecision'
                fillRule='evenodd'
            >
                <circle r='22.97' transform='rotate(15 -105.53 137.532) scale(.56228)' fill='#FFC106' />
                <path
                    d='M32 12.4v2m-9.8.63c.76 1.32 1 1.73 1 1.73m-8.17 5.44c1.32.76 1.73 1 1.73 1M12.4 32h2m.63 9.8c1.32-.76 1.73-1 1.73-1m5.44 8.17c.76-1.32 1-1.73 1-1.73M32 51.6v-2m9.8-.63c-.76-1.32-1-1.73-1-1.73m8.17-5.44c-1.32-.76-1.73-1-1.73-1M51.6 32h-2m-.63-9.8c-1.32.76-1.73 1-1.73 1m-5.44-8.17c-.76 1.32-1 1.73-1 1.73'
                    fill='none'
                    stroke='#FFC106'
                    strokeWidth='2.5'
                />
            </svg>
        </div>
    )
}

export default Jasno
