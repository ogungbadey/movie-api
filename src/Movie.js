import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import instance from './instance'

export default function Movie({title, match}) {
    console.log(match)
    const {id} = useParams()
    console.log(id)
    const [movie, setMovie] = useState({})
    const [imgURL, setImgURL] = useState("")
    useEffect(() => {
        
        instance.get("movie/" + id).then(res => {
            // console.log(res.data);
            setMovie({
                title: res.data.title,
                overview: res.data.overview,
                imgPath: res.data.poster_path
            })
        }).catch(err => console.log(err))

        instance.get("configuration").then(res => {
            // console.log(res.data)
        setImgURL(res.data.images.base_url + "/" + res.data.images.backdrop_sizes[0] + "/" + movie.imgPath)
        }).catch(err => console.log(err))
    }, [id])
    console.log(imgURL)
    return (
        <div style={{display:"flexu"}}>
            <div>
                <img src={imgURL}/>
            </div>
            <div>
                {movie.title ? <h1>{movie.title}</h1>: null}
                {movie.overview ? <p style={{
                    fontSize: "20px"
            }}>{movie.overview}</p>:null}
            </div>
        </div>
    )
}
