import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../Infocard/InfoCard'

const ProfileLeft =() => {
    return (
        <div className="ProfileLeft">
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </div>
    )
}
export default ProfileLeft