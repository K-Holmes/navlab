import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { blueGrey } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Navigation() {
    return (
        <div class="container">
            <div class="box1"><HomeIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Homepage</div>

            <div class="box1"><PersonIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Friends</div>

            <div class="box1"><SettingsIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Settings</div>

            <div class="box1"><StorefrontIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Marketplace</div>

            <div class="box1"><AccountBoxIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Profile</div>

            <div class="box1"><GroupIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Groups</div>

            <div class="box1"><ArticleIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box2">Pages</div>

            <div class="box1"><ModeNightIcon sx={{ color: blueGrey[500] }}/></div>
            <div class="box3"><Switch {...label} size="small"/></div>
            {/* <Container className="emptySpacing"></Container> */}
            <IconButton aria-label="pluscircle" className="addButton">
            <AddCircleIcon fontSize="large" color ="primary" />
        </IconButton>
        </div>
    )
}