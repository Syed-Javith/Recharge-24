import { UserProfileSchema } from '@/types/models'
import { Calendar, GraduationCapIcon, MailIcon, PhoneCall, SchoolIcon } from 'lucide-react';
import React from 'react'

const DesktopProfile = ({ profile } : { profile : UserProfileSchema }) => {
    console.log(profile);
    
    return (
        <div className="layout">
            <div className="profile md:w-[90vw] p-[20px] w-screen max-[500px]:p-[10px] max-[500px]:m-[5px]">

                <div className="profile__picture">
                    <img src={profile.profile_photo+""} alt={profile.first_name} />
                </div>

                <div className="profile__header items-start">
                    <div className="profile__account">
                        <h4 className="profile__username">{profile.first_name + " " + profile.last_name}</h4>
                    </div>

                    <div className="profile__edit">
                        <a href="#" className="profile__button">Edit Profile</a>
                    </div>
                </div>

                <div className="profile__stats flex flex-col">
                    <div className="profile__stat flex gap-4">
                        <div>
                        <div className="profile__icon">
                           <PhoneCall className="text-red-400" />
                        </div>
                        <div className="profile__value">{profile.mobile_number}</div>
                        </div>
                        <div>
                        <div className="profile__icon">
                           <GraduationCapIcon className="text-red-400" />
                        </div>
                        <div className="profile__value">{profile.year}</div>
                        </div>
                    </div>
                    <div className="profile__stat">
                        <div className="profile__icon profile__icon--pink">
                            <MailIcon />
                        </div>
                        <div className="profile__value">{profile.email}</div>
                    </div>
                    <div className="profile__stat">
                        <div className="profile__icon">
                            <SchoolIcon />
                        </div>
                        <div className="profile__value">Rajalaksmi Engineering College</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DesktopProfile
