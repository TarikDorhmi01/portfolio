import React  from 'react'
import './Profile.css'
import Footer from '../../Components/Footer/Footer'
import GlassMorphCard from '../../Components/GlassMorphCard/GlassMorphCard'
import { ReactComponent as GuyIcon } from '../../icons/Guy.svg';
import { ReactComponent as GirlIcon } from '../../icons/Girl.svg';

function Profile(props) {
    let { sex } = props;
    if(sex==="man"){
        return (
            <> 
            <div class="bg">    </div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
            <div className="Profile">
                <GlassMorphCard 
                    greetin="Hi!"
                    title="I'm Tarik"
                    paragraph="I am Software and Data Engineer "
                    isGM={false}
                    icon={<GuyIcon />}
                 />
            </div> 
    
                <Footer />
            </>)
    }else if(sex==="woman"){
        return (
            <> 
                <div class="bg">    </div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div className="Profile">
                    <GlassMorphCard 
                        greetin="Hi!"
                        title="I'm Imane"
                        paragraph="I am Software Engineer"
                        isGM={false}
                        icon={<GirlIcon />}
                    />
                </div> 
    
                <Footer />
            </>
        )
    }
}

export default Profile
