import React  from 'react'
import './Profile.css'
import Footer from '../../Components/Footer/Footer'
import GlassMorphCard from '../../Components/GlassMorphCard/GlassMorphCard'
import { ReactComponent as GuyIcon } from '../../icons/Guy.svg';


function Profile() {
    return (
        <> 
            <div class="bg">    </div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div className="Profile">
                <GlassMorphCard 
                    greetin="Hi!"
                    title="i'm Tarik"
                    paragraph="I do software Engineering"
                    isGM={false}
                    icon={<GuyIcon />}
                />
            </div> 

            <Footer />
        </>
    )
}

export default Profile
