import React from 'react'
import {Link} from 'react-router-dom'
import {gql} from 'apollo-boost'
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
        toggleLikeMovie(id: $id, isLiked: $isLiked) @client
    }
`

export default function Movie({id, isLiked}) {

    const [toggleMovie] = useMutation(LIKE_MOVIE, {
        variables: {id: parseInt(id), isLiked}
    })

    return (
        <div>
            <Link to={`/${id}`}>{id}</Link>
            <button onClick={toggleMovie()}>{isLiked ? 'Unlike' : 'Like'}</button>
        </div>
    )
}
