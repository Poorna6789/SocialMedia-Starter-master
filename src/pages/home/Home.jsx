import React from 'react'
import ProfileSide from '../../components/profileside/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
import TrendCard from '../../components/TrendCard/TrendCard'

const Home= () =>{
    return (
        <div className="Home">
            <ProfileSide/>
           <PostSide/>
            <RightSide/>
            <TrendCard/>
    </div>
    )
}

    export default Home