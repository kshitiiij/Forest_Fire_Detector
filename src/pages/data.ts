import {forestFields} from '../types/objects'


const body = "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans West (Bangladesh), Sundarbans South (Bangladesh), Sundarbans East (Bangladesh) and Sundarbans National Park (India)"

export const forests:forestFields[] = [
 {
     id:1,
     title: "Gir National Park",
     location: "Gujarat",
     body: body,
     update_time: 1,
     coordinates : "(21.1243° N, 70.8242° E)"
 },
 {
    id:2,
    title: "Jim Corbett National Park",
    location: "Uttrakhand",
    body: body,
    update_time: 1,
    coordinates : "(29.5300° N, 78.7747° E)"
 },
 {
    id:3,
    title: "Kanha National Park",
    location: "Madhya Pradesh",
    body: body,
    update_time: 2,
    coordinates: "(22.3345° N, 80.6115° E)"
 },
 {
    id:4,
    title: "Jakanari Reserve Forest",
    location: "Uttrakhand",
    body: body,
    update_time: 2,
    coordinates: "(11.19° N, 77.56° E)"
 },
 {
    id:5,
    title: "Sundarbans",
    location: "West Bengal",
    body: body,
    update_time: 1,
    coordinates: "(21.9497° N, 89.1833° E)"
 }

]