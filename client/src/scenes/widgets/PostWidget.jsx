import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlines,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPost } from "state";

const PostWidget = ({
postId,
postUserId,
name,
location,
picturePath,
userPicturePath,
likes,
comments,
}) => {
    
     const dispatch = useDispatch();
     const { _id } = useSelector((state) => state.user);
     const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;

     const { palette } = useTheme();
     const primary = palette.primary.main;
     const main = palette.neutral.main;

    const patchLike = async () => {
        const res = await fetch(`http://localhost:5001/posts/${postId}/like`, {
            method:"PATCH"
        })
    }
    
}

export default Friend;