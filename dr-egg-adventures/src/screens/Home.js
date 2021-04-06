import React from 'react'
import assets from '../dummy.json'

export const Home = () => {
    return (
        <Col>
            {assets.map((asset) => {
                return (
                    <img src ={asset.image} />

                )
            }
            )}
        </Col>
    )

}
