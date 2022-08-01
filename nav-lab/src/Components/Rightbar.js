import React from "react";
import { Avatar } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProfilePic from './Ducks.JPG';
import ImageOne from './PostOne.webp';
import ImageTwo from './PostTwo.webp';
import ImageThree from './PostThree.webp';

const itemData = [
    {
      img: ImageOne,
      title: 'Breakfast',
    },
    {
      img: ImageTwo,
      title: 'Coffee',
    },
    {
      img: ImageThree,
      title: 'Basketball',
    },
  ];

export default function Rightbar() {
    return (
         <><div className="rightBar"><div>
            <p>Online Friends</p>
            <Avatar className = "onlineUsers" alt="Remy Sharp" src={ProfilePic}/>
        </div>
            <div>
                <p className="bottomPadRemove">Latest Photos</p>
                <ImageList className = "imageListPad" sx={{ width: 250, height: 75 }} cols={3} rowHeight={75}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
            <div>
                <p>Latest Conversations</p>
                <div className = "convoGrid">
                  <div>
                      <Avatar alt="Trevor" src=""/>
                  </div>
                  <div className = "removePadding">
                      <strong>Subject Line</strong>
                      <p>User Reply</p>
                      <small>Message Content</small>
                  </div>
                </div>

            </div></div></>
    )
}