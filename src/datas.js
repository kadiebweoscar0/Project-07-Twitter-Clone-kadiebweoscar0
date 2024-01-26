import tweetProfilPhoto from "../public/images/tweet-profile-photo.png"
import tweetProfil2 from "../public/images/tweetProfil2.svg"
import tweetImage from "../public/images/tweet-image.png"
import iconTweeter from "../public/images/iconTweeter.svg"
import coverCNN from "../public/images/coverCNN.jpeg"
import coverNewYork from "../public/images/coverNewYork.jpeg"
import coverTweeter from "../public/images/coverTweeter.jpeg"
import coverXandTweeter from "../public/images/coverXandTweeter.png"

export const datas = {
    CNN:{
        credential_user:{
            id:1,
            tweetProfile: tweetProfilPhoto,
            titleAuthor: "CNN",
            titleAddress:"@CNN",
            dateHoursPublication:". 7min",
            tweetTextValue:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
            dateJoined : "joined December 2023",
            following : 6,
            followers: 0,
            posts: 0,
            cover: coverCNN
        },
        tweets: [
            {
                id_tweet : 1,
                tweetTextValue:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
                tweetActionValue1: 57,
                tweetActionValue2: 144,
                tweetActionValue3: 184,
                tweetActionValue4:"",
                imageTweet:""
            }
        ]
    },

    TheNewYorkTime:{
        credential_user:{
            id:2,
            tweetProfile: tweetProfil2,
            titleAuthor: "The New York Time",
            titleAddress:"@nytimes",
            dateHoursPublication:". 7min",
            tweetTextValue:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
            dateJoined : "joined December 2021",
            following : 16,
            followers: 10,
            posts: 20,
            cover: coverNewYork
        },
        tweets : [
            {
                id_tweet: 1,
                tweetTextValue:"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
                tweetActionValue1:19,
                tweetActionValue2:48,
                tweetActionValue3:482,
                tweetActionValue4:19,
                imageTweet: tweetImage
            }
        ]
    },

    Twitter:{
        credential_user:{
            id:3,
            tweetProfile: iconTweeter,
            titleAuthor: "Twitter",
            titleAddress:"@Twitter",
            dateHoursPublication:". OCT 29",
            tweetTextValue:"BIG NEWS lol jk still twitter",
            dateJoined : "joined December 2018",
            following : 61,
            followers: 80,
            posts: 23,
            cover: coverXandTweeter
        },
        tweets:[
            {
                id_twwet: 1,
                tweetTextValue:"BIG NEWS lol jk still twitter",
                tweetActionValue1:6.8,
                tweetActionValue2:36.6,
                tweetActionValue3:267.1,
                tweetActionValue4:"",
                imageTweet:"",
            },
            {
                id_twwet: 2,
                tweetTextValue :"BIG NEWS lol jk still twitter",
                tweetActionValue1:6.8,
                tweetActionValue2:36.6,
                tweetActionValue3:267.1,
                tweetActionValue4:"",
                imageTweet:"",
            },
            {
                id_twwet: 3,
                tweetTextValue :"BIG NEWS lol jk still twitter",
                tweetActionValue1:6.8,
                tweetActionValue2:36.6,
                tweetActionValue3:267.1,
                tweetActionValue4:"",
                imageTweet: tweetImage
            }
        ]
    }
}