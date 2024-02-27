(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5C3C7D9A_4F22_9B4D_41BA_45E2213F7816",
  "this.overlay_5CB60759_4F21_97CF_41C9_91F1BEE9B913",
  "this.overlay_5AC7EB8B_4F61_7F4C_41D3_5D3309293BDB"
 ],
 "thumbnailUrl": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_t.jpg",
 "id": "panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC",
 "label": "eo 4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290",
   "yaw": -50.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 30.77
  },
  {
   "panorama": "this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE",
   "yaw": 19.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 72.23
  },
  {
   "panorama": "this.panorama_4461203F_4F23_8943_41B2_593E6866A533",
   "yaw": 119.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 104.38
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -0.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3DA5651_DB3E_4E0C_41E1_4084ABC0EBE7",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 26.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C31A45FF_DB3E_4DF4_41DE_652CAA3F0917",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -107.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3AE3685_DB3E_4E14_41E5_765BD642A415",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F0E3656_4F21_89C5_41CF_892018DC6FD7",
  "this.overlay_5F956648_4F2F_89CD_41A0_4C78BA264A36",
  "this.overlay_CAE9A770_DB32_CE0C_41E7_F5A5A2754086",
  "this.overlay_C8B4004C_DB4F_C214_41E6_759B56429885"
 ],
 "thumbnailUrl": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_t.jpg",
 "id": "panorama_44644934_4F23_7B45_41C9_46F1890794F8",
 "label": "sereh 5",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
   "yaw": -22.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 143.57
  },
  {
   "panorama": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
   "yaw": -21.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 143.57
  },
  {
   "panorama": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19",
   "yaw": 126.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 115.87
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5864FDAA_4F26_9B4D_41D1_7C0B3B429342",
  "this.overlay_58D3E82F_4F21_B944_41C8_51201B560659",
  "this.overlay_CDAE5A41_DB52_C60C_41BC_A5C86CBFF939",
  "this.overlay_CCC42BBC_DB52_4674_41E5_07F012B34AF6",
  "this.overlay_CEE1DDA0_DB52_420C_41CC_74BCD43CDCFD",
  "this.overlay_CD627E45_DB52_5E14_41C5_2E6E138E347B",
  "this.overlay_CD72477E_DB56_4EF4_41BA_BF6310AEFC5D",
  "this.overlay_CD0F6BAD_DB56_4614_41E0_0D9A00D13144"
 ],
 "thumbnailUrl": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_t.jpg",
 "id": "panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601",
 "label": "sereh 10",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
   "yaw": 159.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -144.33
  },
  {
   "panorama": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009",
   "yaw": -19.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 87.68
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -113.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3D5C65C_DB3E_4E34_41DE_19D2E409C987",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F918FE6_4F23_F6C4_41D0_7BB2AB87DFBC",
  "this.overlay_5F3522ED_4F22_8EC6_41CA_0BF416B8C79C",
  "this.overlay_59833DD8_4F23_9ACD_41C9_A1BFF1C7F53E",
  "this.overlay_C85CDB9B_DB5E_463C_41D5_CE8CDD06AAB3",
  "this.overlay_C90D8688_DB5E_4E1D_41C6_EA7CC41968E0",
  "this.overlay_C9C1A065_DB5F_C214_41BE_FAA1B642E2D4",
  "this.overlay_C805A3D1_DB5E_C60C_41DF_067615316616",
  "this.overlay_C93A77CC_DB5E_4E14_4198_12F625C43A6D",
  "this.overlay_C99CB5B1_DB52_420C_41DA_54B7B7B4C275",
  "this.overlay_C9DF8A4A_DB56_461C_41DA_D5229BE70631",
  "this.overlay_C99F628F_DB71_C614_41D1_DAD5FD45227E"
 ],
 "thumbnailUrl": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_t.jpg",
 "id": "panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
 "label": "sereh 4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
   "yaw": 103,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 154
  },
  {
   "panorama": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
   "yaw": 102.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 154
  },
  {
   "panorama": "this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C",
   "yaw": -0.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 0.93
  },
  {
   "panorama": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8",
   "yaw": 143.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -22.11
  },
  {
   "panorama": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8",
   "yaw": 143.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -22.11
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -176.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C756652B_DB3E_421C_41E7_CB724D1AE1A1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_42C95CA0_4F21_797D_41B4_948F4D29C4FD",
  "this.overlay_C9C3E643_DB52_4E0C_41E5_3BC8A317E0CF"
 ],
 "thumbnailUrl": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_t.jpg",
 "id": "panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE",
 "label": "sereh 1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64",
   "yaw": 6.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -176.36
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5EE056E8_4F2E_96CC_4192_6672FF899ED0",
  "this.overlay_5E31589C_4F22_9944_41AD_14F25F9FE2DA",
  "this.overlay_597FB91B_4F61_9B4C_41D0_7973931DCDDA"
 ],
 "thumbnailUrl": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_t.jpg",
 "id": "panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19",
 "label": "sereh 6",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
   "yaw": -125.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 66.82
  },
  {
   "panorama": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8",
   "yaw": 115.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 126.67
  },
  {
   "panorama": "this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4",
   "yaw": -2.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -170.58
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 179.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0C024D7_DB3E_4234_41EA_489ADC484787",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -56.02,
  "class": "PanoramaCameraPosition",
  "pitch": 11.02
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C009646B_DB3E_421C_41CA_1ED35C4B2367",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0D0B4C7_DB3E_4214_41E5_38B683F69074",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_446AF33C_4F23_8F45_41B2_5839597418F4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -20.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C003C47B_DB3E_42FC_41D1_130288774E62",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_44644934_4F23_7B45_41C9_46F1890794F8_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3177613_DB3E_4E0C_41D5_AB50688C3556",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C329C5D5_DB3E_4234_41E0_72E48BB648C9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -34.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0BFD4E4_DB3E_4214_41E6_D03BE294CE8F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 39.49,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0F634A1_DB3E_420C_41E1_54EDF8E75215",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5C344A36_4F62_B945_4191_31146C210AC5",
  "this.overlay_5CB07687_4F63_8944_41D3_6281F3CECBD6"
 ],
 "thumbnailUrl": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_t.jpg",
 "id": "panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE",
 "label": "eo 3",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290",
   "yaw": 145.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -24.49
  },
  {
   "panorama": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC",
   "yaw": 72.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 19.34
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5DCE61A0_4F26_8B7D_41C4_30BAE3F341B7",
  "this.overlay_5BC3CC0B_4F2E_994C_41B3_A259F9B41A21"
 ],
 "thumbnailUrl": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_t.jpg",
 "id": "panorama_4461203F_4F23_8943_41B2_593E6866A533",
 "label": "sereh 8",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4",
   "yaw": -89.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 1.44
  },
  {
   "panorama": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC",
   "yaw": 104.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 119.83
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 179.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0E284B6_DB3E_4274_41D4_0AA1CA580047",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 160.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C7583521_DB3E_420C_41D5_72B7C7C46965",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -53.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3CEC666_DB3E_4E14_41E0_F78F696F5E2E",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5D2EE43E_4F23_8944_41CD_473BA68A30F9",
  "this.overlay_5EA1446E_4F22_89C5_41C2_1E9D44160259"
 ],
 "thumbnailUrl": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_t.jpg",
 "id": "panorama_446AF33C_4F23_8F45_41B2_5839597418F4",
 "label": "sereh 7",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19",
   "yaw": -170.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -2.14
  },
  {
   "panorama": "this.panorama_4461203F_4F23_8943_41B2_593E6866A533",
   "yaw": 1.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -89.88
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 54.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0FCD491_DB3E_420C_41E0_49B6524226B4",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_4461203F_4F23_8943_41B2_593E6866A533_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 9.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3B8A670_DB3E_4E0C_41E7_68E0E3981841",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -36.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C32AB5E0_DB3E_420C_41E8_ECB3CD795BB9",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -160.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C725C54A_DB3E_421C_41E1_BB68DD7D80D8",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "loop": true,
 "audio": {
  "oggUrl": "media/audio_CDE27E0B_DB32_5E1C_41C5_4AE65244DA98.ogg",
  "mp3Url": "media/audio_CDE27E0B_DB32_5E1C_41C5_4AE65244DA98.mp3",
  "class": "AudioResource"
 },
 "id": "audio_CDE27E0B_DB32_5E1C_41C5_4AE65244DA98",
 "class": "MediaAudio",
 "data": {
  "label": "piano sound"
 }
},
{
 "initialPosition": {
  "yaw": 105.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C7F0F568_DB3E_421C_41A8_6D10D875E116",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_40470CD2_4F21_BADC_41CF_BDA348248821",
  "this.overlay_40D186CF_4F22_96C4_41B6_45F019335417",
  "this.overlay_C968C2B7_DB52_4674_41B8_DC09A7D384B9",
  "this.overlay_C84064A8_DB53_C21C_41D2_92A9CFF7F63C",
  "this.overlay_C841FF2E_DB52_5E14_41D2_5B91068DEEA9"
 ],
 "thumbnailUrl": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_t.jpg",
 "id": "panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C",
 "label": "sereh 3",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
   "yaw": 0.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -0.32
  },
  {
   "panorama": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64",
   "yaw": -175.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 1.13
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 97.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C7462535_DB3E_4274_41D1_1634433CFB19",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5A6F8D3A_4F61_BB4D_41C8_CF1E2CCEB33C",
  "this.overlay_5BB895EC_4F7E_8AC5_41B5_94FA5F9F1D1F",
  "this.overlay_5A05757D_4F66_8BC7_41B0_439715407631"
 ],
 "thumbnailUrl": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_t.jpg",
 "id": "panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290",
 "label": "eo 2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5C75BEA6_4F22_B945_41D1_6796B1719011",
   "yaw": 179.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -0.13
  },
  {
   "panorama": "this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE",
   "yaw": -24.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 145.64
  },
  {
   "panorama": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC",
   "yaw": 30.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -50.06
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -60.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C703755E_DB3E_4234_41DC_5F1978199448",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -64.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C321D5EA_DB3E_421C_41D9_DD851354323F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "id": "popup_CFE83E06_DB76_5E15_41BD_8C787C127175",
 "yaw": -28.95,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CFE83E06_DB76_5E15_41BD_8C787C127175_0_0.jpg",
    "width": 428,
    "class": "ImageResourceLevel",
    "height": 608
   },
   {
    "url": "media/popup_CFE83E06_DB76_5E15_41BD_8C787C127175_0_1.jpg",
    "width": 360,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "popupDistance": 100,
 "hfov": 8.18,
 "class": "PopupPanoramaOverlay",
 "pitch": 7.22
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "id": "popup_CFD03F86_DB7E_FE14_41D5_42F6562A045A",
 "yaw": -54.58,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CFD03F86_DB7E_FE14_41D5_42F6562A045A_0_0.jpg",
    "width": 521,
    "class": "ImageResourceLevel",
    "height": 761
   },
   {
    "url": "media/popup_CFD03F86_DB7E_FE14_41D5_42F6562A045A_0_1.jpg",
    "width": 350,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "popupDistance": 100,
 "hfov": 13.5,
 "class": "PopupPanoramaOverlay",
 "pitch": 15.04
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41E7A08C_4F27_8944_41A1_BBDA8838FE95",
  "this.overlay_402F988E_4F26_B945_41D3_97EE24FA4ECA",
  "this.overlay_57CF150F_4F2E_8B5F_41AA_5A92C454E686",
  "this.overlay_CAB85F4D_DB52_5E14_41B1_A505007D8C81"
 ],
 "thumbnailUrl": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_t.jpg",
 "id": "panorama_4415E098_4F22_894D_41A3_2A23FDC00B64",
 "label": "sereh 2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C",
   "yaw": 1.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -175.6
  },
  {
   "panorama": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009",
   "yaw": -82.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -153.12
  },
  {
   "panorama": "this.panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE",
   "yaw": -176.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 6.15
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -179.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3FDE633_DB3E_4E0C_41E2_F5AA632783E1",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 157.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3F6463D_DB3E_4E74_41E5_0B2D9C567307",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5851B194_4F61_8B45_41C8_DCF16E3EE302",
  "this.overlay_59785417_4F5F_8943_41CD_61C268EB35A9",
  "this.overlay_5852785D_4F26_99C7_417E_723AB212C2E9",
  "this.overlay_D5482BF0_DB36_C60C_41EA_2EA59B5175EE",
  "this.overlay_CFA66FF5_DB72_5DF7_419E_87247267F1AC",
  "this.overlay_C88E04D3_DB72_420C_41E7_ED997EF228AA",
  "this.overlay_C8148A78_DB73_C6FC_41DB_74FA4D927868",
  "this.overlay_C82A781A_DB72_423C_41EA_62F8ABCB1AF7",
  "this.overlay_CF2874A6_DB76_4214_41D1_FAD3D3092A2A",
  "this.overlay_C8FBEF4D_DB76_BE14_41E6_81ACC8E1FE89",
  "this.overlay_C8131097_DB7E_4234_41E2_B0EC44A55213",
  "this.popup_CFD03F86_DB7E_FE14_41D5_42F6562A045A",
  "this.overlay_CF4164E4_DB7E_4214_41DF_990061C300D3",
  "this.overlay_C89320CA_DB7E_421C_41D7_C250A34E74C8",
  "this.popup_CE055B05_DB73_C614_4171_A0AFD02620A0",
  "this.overlay_CE34D3F4_DB72_45F4_41D7_33F09E709E1C",
  "this.overlay_CE0EC381_DB72_460C_41CE_57190409875F",
  "this.overlay_CFB7383C_DB71_C274_41C5_7A0184D8296A",
  "this.popup_CFE83E06_DB76_5E15_41BD_8C787C127175",
  "this.popup_CF37F807_DB76_C214_41C3_81988B3D96A8",
  "this.overlay_CE937B36_DB72_4674_41DE_1EB166EFF9C9",
  "this.overlay_CD4E9E47_DB52_DE14_41E0_4065ECD1F721",
  "this.overlay_CEA11A64_DB5E_4614_41AC_02CC3015E055",
  "this.overlay_CEDD67DD_DB5F_CE37_41E3_889E8B7DA5F2"
 ],
 "thumbnailUrl": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_t.jpg",
 "id": "panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
 "label": "sereh 9",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
   "yaw": 154,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 103
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151"
  },
  {
   "panorama": "this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601",
   "yaw": -144.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 159.02
  },
  {
   "panorama": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19",
   "yaw": 66.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -125.23
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19"
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 177.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C09CD4F8_DB3E_43FC_41E9_A07ED4116C08",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C01ED455_DB3E_4233_41E5_ADFF38DAC7EE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 157.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3E19647_DB3E_4E14_41D1_C2842E813053",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C30D561E_DB3E_4E34_41CE_3C196BFA4178",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C08AC502_DB3E_420C_41E0_DE88E543AF18",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_44679B56_4F22_9FC5_41C0_EE251436B151_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 4.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C32635F4_DB3E_4DF4_419A_7D5370D3EAD2",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_58C761CB_4F22_8ACC_41C9_08997AA5CBA8",
  "this.overlay_58C9C4B5_4F23_8947_41A5_CC63EF59D4AF",
  "this.overlay_57F1B9AB_4F2F_9B43_41AB_90C6EFC78CE5",
  "this.overlay_CCC62482_DB56_420C_41C5_6C7F73D3C124",
  "this.overlay_CDC95491_DB52_420C_41E1_418CFC5E43E0",
  "this.overlay_CEA2FC78_DB52_42FC_41DB_E27505665783",
  "this.overlay_CDFC6DCF_DB52_4214_41E8_D42977DAFBD9"
 ],
 "thumbnailUrl": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_t.jpg",
 "id": "panorama_446DB723_4F23_9743_41B0_F79BBF4C5009",
 "label": "sereh 11",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601",
   "yaw": 87.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -19.81
  },
  {
   "panorama": "this.panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D",
   "yaw": -74.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 3.45
  },
  {
   "panorama": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64",
   "yaw": -153.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -82.53
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_58B95088_4F21_894D_41C1_99C5F5C5D665"
 ],
 "thumbnailUrl": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_t.jpg",
 "id": "panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D",
 "label": "sereh 12",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009",
   "yaw": 3.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": -74.24
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C300D628_DB3E_4E1C_41E3_40BD4C2BA272",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -173.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C310B609_DB3E_4E1C_41E1_22EF2005C556",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -75.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C399968F_DB3E_4E14_41E6_0822D913376F",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 35.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C77AA50C_DB3E_4214_41E6_CD9D9A9D6D5A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C768A516_DB3E_4234_41EA_B0E7F265B448",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 155.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C737453F_DB3E_4274_41DB_0DC0AD4C9BCC",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -149.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C3B5767A_DB3E_4EFC_41D7_B83225FC2F11",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/f/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/f/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/f/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/f/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/f/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/l/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/l/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/l/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/l/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/l/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/u/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/u/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/u/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/u/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/u/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/r/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/r/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/r/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/r/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/r/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/b/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/b/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/b/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/b/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/b/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/d/0/{row}_{column}.jpg",
      "colCount": 9,
      "rowCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 4608
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/d/1/{row}_{column}.jpg",
      "colCount": 5,
      "rowCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2560
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/d/2/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/d/3/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0/d/4/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5AEDEC47_4F61_99C3_41C8_A72B9E7F17BD"
 ],
 "thumbnailUrl": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_t.jpg",
 "id": "panorama_5C75BEA6_4F22_B945_41D1_6796B1719011",
 "label": "eo 1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290",
   "yaw": -0.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "backwardYaw": 179.87
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "media": "this.panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_camera"
  },
  {
   "media": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_camera"
  },
  {
   "media": "this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_camera"
  },
  {
   "media": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151_camera"
  },
  {
   "media": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8_camera"
  },
  {
   "media": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_camera"
  },
  {
   "media": "this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4_camera"
  },
  {
   "media": "this.panorama_4461203F_4F23_8943_41B2_593E6866A533",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4461203F_4F23_8943_41B2_593E6866A533_camera"
  },
  {
   "media": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_camera"
  },
  {
   "media": "this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_camera"
  },
  {
   "media": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_camera"
  },
  {
   "media": "this.panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_camera"
  },
  {
   "media": "this.panorama_5C75BEA6_4F22_B945_41D1_6796B1719011",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_camera"
  },
  {
   "media": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_camera"
  },
  {
   "media": "this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_camera"
  },
  {
   "media": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "id": "popup_CE055B05_DB73_C614_4171_A0AFD02620A0",
 "yaw": -38.21,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CE055B05_DB73_C614_4171_A0AFD02620A0_0_0.jpg",
    "width": 465,
    "class": "ImageResourceLevel",
    "height": 621
   },
   {
    "url": "media/popup_CE055B05_DB73_C614_4171_A0AFD02620A0_0_1.jpg",
    "width": 383,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "popupDistance": 100,
 "hfov": 11.25,
 "class": "PopupPanoramaOverlay",
 "pitch": 10.26
},
{
 "duration": 200,
 "id": "effect_75434EF9_50B8_BA1A_41D3_B334293832B6",
 "class": "FadeOutEffect",
 "easing": "quad_in"
},
{
 "initialPosition": {
  "yaw": 129.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C0AFB4EE_DB3E_4214_41E5_852D14167F10",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -178.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_C7156554_DB3E_4234_41C3_8228FB542BAE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_camera"
  },
  {
   "media": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_camera"
  },
  {
   "media": "this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_camera"
  },
  {
   "media": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151_camera"
  },
  {
   "media": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_44644934_4F23_7B45_41C9_46F1890794F8_camera"
  },
  {
   "media": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_camera"
  },
  {
   "media": "this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4_camera"
  },
  {
   "media": "this.panorama_4461203F_4F23_8943_41B2_593E6866A533",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4461203F_4F23_8943_41B2_593E6866A533_camera"
  },
  {
   "media": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_camera"
  },
  {
   "media": "this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_camera"
  },
  {
   "media": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_camera"
  },
  {
   "media": "this.panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_camera"
  },
  {
   "media": "this.panorama_5C75BEA6_4F22_B945_41D1_6796B1719011",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_camera"
  },
  {
   "media": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_camera"
  },
  {
   "media": "this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_camera"
  },
  {
   "media": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "id": "popup_CF37F807_DB76_C214_41C3_81988B3D96A8",
 "yaw": -27.41,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_CF37F807_DB76_C214_41C3_81988B3D96A8_0_0.jpg",
    "width": 428,
    "class": "ImageResourceLevel",
    "height": 608
   },
   {
    "url": "media/popup_CF37F807_DB76_C214_41C3_81988B3D96A8_0_1.jpg",
    "width": 360,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ]
 },
 "popupDistance": 100,
 "hfov": 1.17,
 "class": "PopupPanoramaOverlay",
 "pitch": 11.52
},
{
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "id": "MainViewer",
 "left": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "playbackBarRight": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 10,
 "transitionDuration": 500,
 "minWidth": 100,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingTop": 7,
 "borderSize": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "propagateClick": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#000000",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "toolTipFontStyle": "normal",
 "progressBottom": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipFontSize": 13,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBorderRadius": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBottom": 5,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "toolTipShadowOpacity": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10
},
{
 "children": [
  "this.Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
  "this.Label_0C5F23A8_3BA0_A6FF_419F_468451E37918"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 30,
 "width": 271,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "bottom": 20,
 "height": 97,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "--STICKER"
 },
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "scrollBarColor": "#000000",
 "width": 60,
 "scrollBarOpacity": 0.5,
 "right": 15,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": 62,
 "backgroundColorRatios": [
  0.02
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": 300,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 0,
 "paddingTop": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "vertical",
 "horizontalAlign": "center"
},
{
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 30,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": 115,
 "minWidth": 1,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "-button set container"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "---INFO photo"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "---LOCATION"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "---FLOORPLAN"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#04A3E1",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": true,
 "data": {
  "name": "---REALTOR"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_CE37CDB8_DB51_C27C_41D0_D046DDEA55CC"
 ],
 "id": "Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "TV"
 },
 "shadow": false,
 "overflow": "scroll",
 "visible": false,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B, false, 0, this.effect_75434EF9_50B8_BA1A_41D3_B334293832B6, 'hideEffect', false)",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "UIComponent44153"
 },
 "shadow": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.55
},
{
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "propagateClick": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage44154"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 1
},
{
 "fontColor": "#FFFFFF",
 "rollOverIconColor": "#666666",
 "id": "closeButtonPopupPanorama",
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "paddingRight": 5,
 "iconColor": "#000000",
 "paddingLeft": 5,
 "minHeight": 0,
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "iconLineWidth": 5,
 "minWidth": 0,
 "mode": "push",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 5,
 "label": "",
 "iconBeforeLabel": true,
 "paddingTop": 5,
 "gap": 5,
 "fontStyle": "normal",
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "fontSize": "1.29vmin",
 "propagateClick": false,
 "iconWidth": 20,
 "data": {
  "name": "CloseButton44155"
 },
 "borderColor": "#000000",
 "shadow": false,
 "visible": false,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "backgroundOpacity": 0.3,
 "fontWeight": "normal",
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "fontColor": "#FFFFFF",
 "gap": 5,
 "iconBeforeLabel": true,
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "borderRadius": 0,
 "width": 60,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "propagateClick": false,
 "iconWidth": 30,
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "fontWeight": "normal",
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings Fullscreen"
 }
},
{
 "fontColor": "#FFFFFF",
 "gap": 5,
 "iconBeforeLabel": true,
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "borderRadius": 0,
 "width": 60,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "propagateClick": false,
 "iconWidth": 30,
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "fontWeight": "normal",
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings Mute"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.8,
   "yaw": 119.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.19
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4461203F_4F23_8943_41B2_593E6866A533, this.camera_C399968F_DB3E_4E14_41E6_0822D913376F); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A86218C_4F7E_8B44_418D_5CF0756E170A",
   "pitch": -1.19,
   "hfov": 10.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 119.83
  }
 ],
 "id": "overlay_5C3C7D9A_4F22_9B4D_41BA_45E2213F7816",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.31,
   "yaw": 19.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.57
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE, this.camera_C3AE3685_DB3E_4E14_41E5_765BD642A415); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A86F18C_4F7E_8B44_419D_49D092C27600",
   "pitch": -1.57,
   "hfov": 12.31,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 19.34
  }
 ],
 "id": "overlay_5CB60759_4F21_97CF_41C9_91F1BEE9B913",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.26,
   "yaw": -50.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.58
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290, this.camera_C3B5767A_DB3E_4EFC_41D7_B83225FC2F11); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A86818C_4F7E_8B44_41C0_570D5B54B6A0",
   "pitch": -29.58,
   "hfov": 16.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -50.06
  }
 ],
 "id": "overlay_5AC7EB8B_4F61_7F4C_41D3_5D3309293BDB",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.36,
   "yaw": -22.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.93
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151, this.camera_C329C5D5_DB3E_4234_41E0_72E48BB648C9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F3A4D4_4F21_8AC5_41C5_B55539FA195B",
   "pitch": -24.93,
   "hfov": 19.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -22.11
  }
 ],
 "id": "overlay_5F0E3656_4F21_89C5_41CF_892018DC6FD7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.88,
   "yaw": 126.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.48
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19, this.camera_C321D5EA_DB3E_421C_41D9_DD851354323F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F3C4D4_4F21_8AC5_41CB_9B5743094F1D",
   "pitch": -35.48,
   "hfov": 17.88,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 126.67
  }
 ],
 "id": "overlay_5F956648_4F2F_89CD_41A0_4C78BA264A36",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.97,
   "yaw": 54.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -7.1
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_2_0.png",
      "width": 595,
      "class": "ImageResourceLevel",
      "height": 474
     }
    ]
   },
   "pitch": -7.1,
   "yaw": 54.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CAE9A770_DB32_CE0C_41E7_F5A5A2754086",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.35,
   "yaw": -21.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.64
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151, this.camera_C32AB5E0_DB3E_420C_41E8_ECB3CD795BB9); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.35,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_3_0.png",
      "width": 872,
      "class": "ImageResourceLevel",
      "height": 807
     }
    ]
   },
   "pitch": -18.64,
   "yaw": -21.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C8B4004C_DB4F_C214_41E6_759B56429885",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.81,
   "yaw": 159.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.07
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4, this.camera_C77AA50C_DB3E_4214_41E6_CD9D9A9D6D5A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F4D4D5_4F21_8AC7_41CB_38FA1DD74D11",
   "pitch": 1.07,
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.02
  }
 ],
 "id": "overlay_5864FDAA_4F26_9B4D_41D1_7C0B3B429342",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.25,
   "yaw": -19.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.18
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009, this.camera_C768A516_DB3E_4234_41EA_B0E7F265B448); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F454D5_4F21_8AC7_41AB_9676445C55CE",
   "pitch": -24.18,
   "hfov": 17.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -19.81
  }
 ],
 "id": "overlay_58D3E82F_4F21_B944_41C8_51201B560659",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.93,
   "yaw": 94.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_2_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.32
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.93,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_2_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ]
   },
   "pitch": -23.32,
   "yaw": 94.72,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CDAE5A41_DB52_C60C_41BC_A5C86CBFF939",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.84,
   "yaw": 171.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.57
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.84,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_3_0.png",
      "width": 400,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ]
   },
   "pitch": -24.57,
   "yaw": 171.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CCC42BBC_DB52_4674_41E5_07F012B34AF6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 8.71,
   "yaw": 138.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_4_1_0_map.gif",
      "width": 161,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": 8.46
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.71,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_4_0.png",
      "width": 322,
      "class": "ImageResourceLevel",
      "height": 319
     }
    ]
   },
   "pitch": 8.46,
   "yaw": 138.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CEE1DDA0_DB52_420C_41CC_74BCD43CDCFD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 3.1,
   "yaw": 142.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.1
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C77124EE_DB36_4214_41C7_033EB8092E22",
   "pitch": 11.1,
   "hfov": 3.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 142.69
  }
 ],
 "id": "overlay_CD627E45_DB52_5E14_41C5_2E6E138E347B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.02,
   "yaw": 10.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_6_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.34
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.02,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_6_0.png",
      "width": 322,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ]
   },
   "pitch": -23.34,
   "yaw": 10.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CD72477E_DB56_4EF4_41BA_BF6310AEFC5D",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.52,
   "yaw": -18.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.6
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_7_0.png",
      "width": 1095,
      "class": "ImageResourceLevel",
      "height": 1095
     }
    ]
   },
   "pitch": -15.6,
   "yaw": -18.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CD0F6BAD_DB56_4614_41E0_0D9A00D13144",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.89,
   "yaw": -0.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.79
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C, this.camera_C3FDE633_DB3E_4E0C_41E2_F5AA632783E1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A8A90A_4F3E_BB4C_41CD_E805919B84CC",
   "pitch": -20.79,
   "hfov": 18.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.32
  }
 ],
 "id": "overlay_5F918FE6_4F23_F6C4_41D0_7BB2AB87DFBC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.94,
   "yaw": 143.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.06
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44644934_4F23_7B45_41C9_46F1890794F8, this.camera_C3F6463D_DB3E_4E74_41E5_0B2D9C567307); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A9190B_4F3E_BB4C_41D1_55D02CE50997",
   "pitch": -25.06,
   "hfov": 20.94,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 143.57
  }
 ],
 "id": "overlay_5F3522ED_4F22_8EC6_41CA_0BF416B8C79C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.3,
   "yaw": 103,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.07
  }
 ],
 "data": {
  "label": "Circle Arrow 07"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4, this.camera_C30D561E_DB3E_4E34_41CE_3C196BFA4178); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F014D4_4F21_8AC5_41C9_FC3F5FAB49FD",
   "pitch": -2.07,
   "hfov": 12.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 103
  }
 ],
 "id": "overlay_59833DD8_4F23_9ACD_41C9_A1BFF1C7F53E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 90.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.65
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_3_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ]
   },
   "pitch": -18.65,
   "yaw": 90.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C85CDB9B_DB5E_463C_41D5_CE8CDD06AAB3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.37,
   "yaw": -86.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_4_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.62
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.37,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_4_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ]
   },
   "pitch": -16.62,
   "yaw": -86.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C90D8688_DB5E_4E1D_41C6_EA7CC41968E0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.34,
   "yaw": -29.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_5_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.46
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.34,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_5_0.png",
      "width": 275,
      "class": "ImageResourceLevel",
      "height": 208
     }
    ]
   },
   "pitch": -10.46,
   "yaw": -29.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9C1A065_DB5F_C214_41BE_FAA1B642E2D4",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.38,
   "yaw": -15.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_6_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.77
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_6_0.png",
      "width": 274,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ]
   },
   "pitch": -6.77,
   "yaw": -15.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C805A3D1_DB5E_C60C_41DF_067615316616",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.75,
   "yaw": 19.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_7_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": -6.87
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_7_0.png",
      "width": 288,
      "class": "ImageResourceLevel",
      "height": 196
     }
    ]
   },
   "pitch": -6.87,
   "yaw": 19.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C93A77CC_DB5E_4E14_4198_12F625C43A6D",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.1,
   "yaw": -143.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_8_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.81
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_8_0.png",
      "width": 378,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -9.81,
   "yaw": -143.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C99CB5B1_DB52_420C_41DA_54B7B7B4C275",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.83,
   "yaw": 143.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_9_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.44
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44644934_4F23_7B45_41C9_46F1890794F8, this.camera_C3E19647_DB3E_4E14_41D1_C2842E813053); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_9_0.png",
      "width": 928,
      "class": "ImageResourceLevel",
      "height": 668
     }
    ]
   },
   "pitch": -18.44,
   "yaw": 143.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9DF8A4A_DB56_461C_41DA_D5229BE70631",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.52,
   "yaw": 102.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_10_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.74
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4, this.camera_C300D628_DB3E_4E1C_41E3_40BD4C2BA272); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.52,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_10_0.png",
      "width": 389,
      "class": "ImageResourceLevel",
      "height": 354
     }
    ]
   },
   "pitch": 3.74,
   "yaw": 102.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C99F628F_DB71_C614_41D1_DAD5FD45227E",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.17,
   "yaw": 6.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.32
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64, this.camera_C3177613_DB3E_4E0C_41D5_AB50688C3556); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A71909_4F3E_BB4C_41BD_9C4EB3C1EB2B",
   "pitch": -26.32,
   "hfov": 21.17,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.15
  }
 ],
 "id": "overlay_42C95CA0_4F21_797D_41B4_948F4D29C4FD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.38,
   "yaw": -28.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.52
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.38,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_0_HS_1_0.png",
      "width": 1041,
      "class": "ImageResourceLevel",
      "height": 1004
     }
    ]
   },
   "pitch": -20.52,
   "yaw": -28.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9C3E643_DB52_4E0C_41E5_3BC8A317E0CF",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.56,
   "yaw": 115.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.39
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44644934_4F23_7B45_41C9_46F1890794F8, this.camera_C3CEC666_DB3E_4E14_41E0_F78F696F5E2E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59AA690B_4F3E_BB4C_41C8_315C6CA4A04B",
   "pitch": -42.39,
   "hfov": 19.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.87
  }
 ],
 "id": "overlay_5EE056E8_4F2E_96CC_4192_6672FF899ED0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.06,
   "yaw": -2.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.2
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4, this.camera_C3B8A670_DB3E_4E0C_41E7_68E0E3981841); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59AAD90B_4F3E_BB4C_41A7_9D776C14F5F5",
   "pitch": -2.2,
   "hfov": 15.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.14
  }
 ],
 "id": "overlay_5E31589C_4F22_9944_41AD_14F25F9FE2DA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.08,
   "yaw": -125.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.82
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4, this.camera_C3D5C65C_DB3E_4E34_41DE_19D2E409C987); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F284D4_4F21_8AC5_41A5_72F56E2D9602",
   "pitch": -0.82,
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -125.23
  }
 ],
 "id": "overlay_597FB91B_4F61_9B4C_41D0_7973931DCDDA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.56,
   "yaw": 72.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.57
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC, this.camera_C725C54A_DB3E_421C_41E1_BB68DD7D80D8); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A87E18B_4F7E_8B4C_41C0_861E5B7732AC",
   "pitch": 0.57,
   "hfov": 12.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 72.23
  }
 ],
 "id": "overlay_5C344A36_4F62_B945_4191_31146C210AC5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.06,
   "yaw": 145.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.22
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290, this.camera_C737453F_DB3E_4274_41DB_0DC0AD4C9BCC); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A87818C_4F7E_8B44_41D1_069770BAFF32",
   "pitch": -33.22,
   "hfov": 16.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 145.64
  }
 ],
 "id": "overlay_5CB07687_4F63_8944_41D3_6281F3CECBD6",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.24,
   "yaw": -89.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.18
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446AF33C_4F23_8F45_41B2_5839597418F4, this.camera_C7156554_DB3E_4234_41C3_8228FB542BAE); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59ABD90C_4F3E_BB44_41C1_B9F9DCEF9D1A",
   "pitch": -25.18,
   "hfov": 16.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -89.88
  }
 ],
 "id": "overlay_5DCE61A0_4F26_8B7D_41C4_30BAE3F341B7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.06,
   "yaw": 104.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.31
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC, this.camera_C703755E_DB3E_4234_41DC_5F1978199448); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A84018B_4F7E_8B4C_41D0_63BC65ACEC02",
   "pitch": -0.31,
   "hfov": 12.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 104.38
  }
 ],
 "id": "overlay_5BC3CC0B_4F2E_994C_41B3_A259F9B41A21",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.53,
   "yaw": 1.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.05
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4461203F_4F23_8943_41B2_593E6866A533, this.camera_C08AC502_DB3E_420C_41E0_DE88E543AF18); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59AAB90B_4F3E_BB4C_41C3_5DF6B31885BD",
   "pitch": -24.05,
   "hfov": 17.53,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.44
  }
 ],
 "id": "overlay_5D2EE43E_4F23_8944_41CD_473BA68A30F9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.28,
   "yaw": -170.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.21
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19, this.camera_C09CD4F8_DB3E_43FC_41E9_A07ED4116C08); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59AB690B_4F3E_BB4C_41D1_4A479D3FC8B7",
   "pitch": -4.21,
   "hfov": 15.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.58
  }
 ],
 "id": "overlay_5EA1446E_4F22_89C5_41C2_1E9D44160259",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.63,
   "yaw": -175.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.28
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64, this.camera_C0D0B4C7_DB3E_4214_41E5_38B683F69074); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A8390A_4F3E_BB4C_41D2_19D2C9504384",
   "pitch": -19.28,
   "hfov": 20.63,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -175.6
  }
 ],
 "id": "overlay_40470CD2_4F21_BADC_41CF_BDA348248821",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.42,
   "yaw": 0.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_1_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.79
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151, this.camera_C0E284B6_DB3E_4274_41D4_0AA1CA580047); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A8F90A_4F3E_BB4C_41A1_7A1526F473CD",
   "pitch": -20.79,
   "hfov": 18.42,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.93
  }
 ],
 "id": "overlay_40D186CF_4F22_96C4_41B6_45F019335417",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.24,
   "yaw": 63.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.43
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.24,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0_HS_2_0.png",
      "width": 446,
      "class": "ImageResourceLevel",
      "height": 363
     }
    ]
   },
   "pitch": -21.43,
   "yaw": 63.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C968C2B7_DB52_4674_41B8_DC09A7D384B9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.49,
   "yaw": -39.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.23
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0_HS_3_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ]
   },
   "pitch": -14.23,
   "yaw": -39.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C84064A8_DB53_C21C_41D2_92A9CFF7F63C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 7.97,
   "yaw": 27.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0_HS_4_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.58
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.97,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_0_HS_4_0.png",
      "width": 298,
      "class": "ImageResourceLevel",
      "height": 195
     }
    ]
   },
   "pitch": -9.58,
   "yaw": 27.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C841FF2E_DB52_5E14_41D2_5B91068DEEA9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.02,
   "yaw": 30.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.46
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC, this.camera_C0AFB4EE_DB3E_4214_41E5_852D14167F10); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A84A18B_4F7E_8B4C_41AD_6F076DB0A888",
   "pitch": 4.46,
   "hfov": 13.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 30.77
  }
 ],
 "id": "overlay_5A6F8D3A_4F61_BB4D_41C8_CF1E2CCEB33C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 13.52,
   "yaw": -24.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.96
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE, this.camera_C0BFD4E4_DB3E_4214_41E6_D03BE294CE8F); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5A87418B_4F7E_8B4C_41BE_BDC83F967B14",
   "pitch": 4.96,
   "hfov": 13.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -24.49
  }
 ],
 "id": "overlay_5BB895EC_4F7E_8AC5_41B5_94FA5F9F1D1F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.8,
   "yaw": 179.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.95
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5C75BEA6_4F22_B945_41D1_6796B1719011, this.camera_C0C024D7_DB3E_4234_41EA_489ADC484787); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_57FDD1DA_4F62_8ACC_41D1_3BC715D559F5",
   "pitch": 2.95,
   "hfov": 14.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.87
  }
 ],
 "id": "overlay_5A05757D_4F66_8BC7_41B0_439715407631",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "borderRadius": 0,
 "width": 60,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "propagateClick": false,
 "iconWidth": 30,
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadow": false,
 "iconBeforeLabel": true,
 "backgroundOpacity": 1,
 "fontWeight": "normal",
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button settings VR"
 }
},
{
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "gap": 5,
 "iconBeforeLabel": true,
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "borderRadius": 0,
 "width": 60,
 "rollOverIconHeight": 30,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "propagateClick": false,
 "iconWidth": 30,
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "fontWeight": "normal",
 "rollOverIconWidth": 30,
 "textDecoration": "none",
 "cursor": "hand",
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings HS"
 }
},
{
 "fontColor": "#FFFFFF",
 "layout": "horizontal",
 "gap": 5,
 "iconBeforeLabel": true,
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "borderRadius": 0,
 "width": 60,
 "rollOverIconHeight": 30,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "iconHeight": 30,
 "verticalAlign": "middle",
 "pressedIconWidth": 30,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedIconHeight": 30,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "toggle",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "propagateClick": false,
 "iconWidth": 30,
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "shadow": false,
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundOpacity": 1,
 "fontWeight": "normal",
 "rollOverIconWidth": 30,
 "textDecoration": "none",
 "cursor": "hand",
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "horizontalAlign": "center",
 "data": {
  "name": "Button Settings Gyro"
 }
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.75,
   "yaw": -176.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.27
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE, this.camera_C310B609_DB3E_4E1C_41E1_22EF2005C556); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A7990A_4F3E_BB4C_41C7_514C8AC60C4F",
   "pitch": -17.27,
   "hfov": 23.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -176.36
  }
 ],
 "id": "overlay_41E7A08C_4F27_8944_41A1_BBDA8838FE95",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.55,
   "yaw": 1.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.01
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C, this.camera_C32635F4_DB3E_4DF4_419A_7D5370D3EAD2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_59A8490A_4F3E_BB4C_41CE_919E5739895D",
   "pitch": -14.01,
   "hfov": 17.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.13
  }
 ],
 "id": "overlay_402F988E_4F26_B945_41D3_97EE24FA4ECA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.07,
   "yaw": -82.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.57
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009, this.camera_C31A45FF_DB3E_4DF4_41DE_652CAA3F0917); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F1D4D3_4F21_8AC3_41A3_4682C6E9C256",
   "pitch": 0.57,
   "hfov": 14.07,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -82.53
  }
 ],
 "id": "overlay_57CF150F_4F2E_8B5F_41AA_5A92C454E686",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 43.62,
   "yaw": -81.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0_HS_3_0_0_map.gif",
      "width": 25,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 29.32
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 43.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0_HS_3_0.png",
      "width": 1849,
      "class": "ImageResourceLevel",
      "height": 1180
     }
    ]
   },
   "pitch": 29.32,
   "yaw": -81.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CAB85F4D_DB52_5E14_41B1_A505007D8C81",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.84,
   "yaw": 66.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.31
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19, this.camera_C0FCD491_DB3E_420C_41E0_49B6524226B4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F524D5_4F21_8AC7_41C2_75BAF1152997",
   "pitch": 0.31,
   "hfov": 17.84,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 66.82
  }
 ],
 "id": "overlay_5851B194_4F61_8B45_41C8_DCF16E3EE302",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.26,
   "yaw": 154,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.09
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151, this.camera_C01ED455_DB3E_4233_41E5_ADFF38DAC7EE); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F564D5_4F21_8AC7_41CE_1A9B62B7A2AF",
   "pitch": 5.09,
   "hfov": 12.26,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 154
  }
 ],
 "id": "overlay_59785417_4F5F_8943_41CD_61C268EB35A9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.06,
   "yaw": -144.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.7
  }
 ],
 "data": {
  "label": "Circle Arrow 07"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601, this.camera_C003C47B_DB3E_42FC_41D1_130288774E62); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F494D5_4F21_8AC7_41AC_AD5B52DD4C34",
   "pitch": -1.7,
   "hfov": 14.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -144.33
  }
 ],
 "id": "overlay_5852785D_4F26_99C7_417E_723AB212C2E9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.89,
   "yaw": 6.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_3_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.98
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_3_0.png",
      "width": 440,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ]
   },
   "pitch": 2.98,
   "yaw": 6.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D5482BF0_DB36_C60C_41EA_2EA59B5175EE",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.12,
   "yaw": 38.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.94
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.12,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_4_0.png",
      "width": 446,
      "class": "ImageResourceLevel",
      "height": 363
     }
    ]
   },
   "pitch": -22.94,
   "yaw": 38.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CFA66FF5_DB72_5DF7_419E_87247267F1AC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.06,
   "yaw": -156.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_5_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.56
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_5_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ]
   },
   "pitch": -21.56,
   "yaw": -156.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C88E04D3_DB72_420C_41E7_ED997EF228AA",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 8.96,
   "yaw": -103.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_6_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.91
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_6_0.png",
      "width": 334,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ]
   },
   "pitch": -7.91,
   "yaw": -103.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C8148A78_DB73_C6FC_41DB_74FA4D927868",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.9,
   "yaw": -28.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_7_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.82
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.9,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_7_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ]
   },
   "pitch": -23.82,
   "yaw": -28.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C82A781A_DB72_423C_41EA_62F8ABCB1AF7",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.98,
   "yaw": 66.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_8_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.63
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19, this.camera_C0F634A1_DB3E_420C_41E1_54EDF8E75215); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_8_0.png",
      "width": 937,
      "class": "ImageResourceLevel",
      "height": 704
     }
    ]
   },
   "pitch": 9.63,
   "yaw": 66.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CF2874A6_DB76_4214_41D1_FAD3D3092A2A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.67,
   "yaw": 152.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 12.37
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_44679B56_4F22_9FC5_41C0_EE251436B151, this.camera_C009646B_DB3E_421C_41CA_1ED35C4B2367); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_9_0.png",
      "width": 668,
      "class": "ImageResourceLevel",
      "height": 706
     }
    ]
   },
   "pitch": 12.37,
   "yaw": 152.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C8FBEF4D_DB76_BE14_41E6_81ACC8E1FE89",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.93,
   "yaw": -54.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_10_1_0_map.gif",
      "width": 103,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 15.04
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CFD03F86_DB7E_FE14_41D5_42F6562A045A, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.93,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_10_0.png",
      "width": 405,
      "class": "ImageResourceLevel",
      "height": 782
     }
    ]
   },
   "pitch": 15.04,
   "yaw": -54.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C8131097_DB7E_4234_41E2_B0EC44A55213",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.64,
   "yaw": -49.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 21.93
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C775B4ED_DB36_4214_41BE_FF4A99F52590",
   "pitch": 21.93,
   "hfov": 3.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.45
  }
 ],
 "id": "overlay_CF4164E4_DB7E_4214_41DF_990061C300D3",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 5.93,
   "yaw": -38.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_12_1_0_map.gif",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 10.26
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CE055B05_DB73_C614_4171_A0AFD02620A0, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.93,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_12_0.png",
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 581
     }
    ]
   },
   "pitch": 10.26,
   "yaw": -38.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C89320CA_DB7E_421C_41D7_C250A34E74C8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 2.55,
   "yaw": -35.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.63
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C77414ED_DB36_4214_41E0_2D6D5E2AAA3A",
   "pitch": 15.63,
   "hfov": 2.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -35.55
  }
 ],
 "id": "overlay_CE34D3F4_DB72_45F4_41D7_33F09E709E1C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.76,
   "yaw": -28.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_14_1_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 7.22
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CFE83E06_DB76_5E15_41BD_8C787C127175, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.76,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_14_0.png",
      "width": 138,
      "class": "ImageResourceLevel",
      "height": 447
     }
    ]
   },
   "pitch": 7.22,
   "yaw": -28.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CE0EC381_DB72_460C_41CE_57190409875F",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 1.8,
   "yaw": -27.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.52
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_CF37F807_DB76_C214_41C3_81988B3D96A8, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','backgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'rollOverIconHeight':20,'pressedIconHeight':20,'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'iconHeight':20,'rollOverBorderSize':0,'rollOverIconWidth':20,'paddingRight':5,'pressedIconColor':'#888888','iconColor':'#000000','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'paddingLeft':5,'paddingTop':5,'pressedBorderSize':0,'iconWidth':20,'rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C77484ED_DB36_4214_41E7_8499117A9889",
   "pitch": 11.52,
   "hfov": 1.8,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -27.41
  }
 ],
 "id": "overlay_CFB7383C_DB71_C274_41C5_7A0184D8296A",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "maps": [
  {
   "hfov": 11.66,
   "yaw": -101.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_16_1_0_map.gif",
      "width": 155,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 13.34
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.66,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_16_0.png",
      "width": 432,
      "class": "ImageResourceLevel",
      "height": 555
     }
    ]
   },
   "pitch": 13.34,
   "yaw": -101.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CE937B36_DB72_4674_41DE_1EB166EFF9C9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.65,
   "yaw": -95.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 21.4
  }
 ],
 "data": {
  "label": "Info Red 05"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_C77764ED_DB36_4214_41E6_C3585EBEE3F2",
   "pitch": 21.4,
   "hfov": 3.65,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.15
  }
 ],
 "id": "overlay_CD4E9E47_DB52_DE14_41E0_4065ECD1F721",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.61,
   "yaw": -143.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_18_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.95
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.61,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_18_0.png",
      "width": 727,
      "class": "ImageResourceLevel",
      "height": 397
     }
    ]
   },
   "pitch": 4.95,
   "yaw": -143.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CEA11A64_DB5E_4614_41AC_02CC3015E055",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 5.75,
   "yaw": -115.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_19_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.4
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.75,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_19_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 126
     }
    ]
   },
   "pitch": -3.4,
   "yaw": -115.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CEDD67DD_DB5F_CE37_41E3_889E8B7DA5F2",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.48,
   "yaw": -74.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.31
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D, this.camera_C756652B_DB3E_421C_41E7_CB724D1AE1A1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F794D5_4F21_8AC7_41D3_62FADDDC070A",
   "pitch": -24.31,
   "hfov": 16.48,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -74.24
  }
 ],
 "id": "overlay_58C761CB_4F22_8ACC_41C9_08997AA5CBA8",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.81,
   "yaw": 87.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.69
  }
 ],
 "data": {
  "label": "Circle Arrow 06"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601, this.camera_C7583521_DB3E_420C_41D5_72B7C7C46965); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F704D6_4F21_8AC5_417D_D903208FB0B8",
   "pitch": 0.69,
   "hfov": 11.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 87.68
  }
 ],
 "id": "overlay_58C9C4B5_4F23_8947_41A5_CC63EF59D4AF",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 11.56,
   "yaw": -153.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.44
  }
 ],
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4415E098_4F22_894D_41A3_2A23FDC00B64, this.camera_C7462535_DB3E_4274_41D1_1634433CFB19); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F754D6_4F21_8AC5_41BF_8D394E858D55",
   "pitch": -0.44,
   "hfov": 11.56,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -153.12
  }
 ],
 "id": "overlay_57F1B9AB_4F2F_9B43_41AB_90C6EFC78CE5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.95,
   "yaw": 42.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.07
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.openLink('https://gofood.link/u/k5MAw', '_blank')",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_3_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ]
   },
   "pitch": -23.07,
   "yaw": 42.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CCC62482_DB56_420C_41C5_6C7F73D3C124",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.82,
   "yaw": 87.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ]
   },
   "pitch": 8.62
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.82,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_4_0.png",
      "width": 853,
      "class": "ImageResourceLevel",
      "height": 797
     }
    ]
   },
   "pitch": 8.62,
   "yaw": 87.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CDC95491_DB52_420C_41E1_418CFC5E43E0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.16,
   "yaw": -24.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_5_1_0_map.gif",
      "width": 117,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -37.45
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.16,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_5_0.png",
      "width": 639,
      "class": "ImageResourceLevel",
      "height": 1082
     }
    ]
   },
   "pitch": -37.45,
   "yaw": -24.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CEA2FC78_DB52_42FC_41DB_E27505665783",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 6.09,
   "yaw": -24.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_6_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.56
  }
 ],
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "if(this.getGlobalAudio(this.audio_CDE27E0B_DB32_5E1C_41C5_4AE65244DA98).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_CDE27E0B_DB32_5E1C_41C5_4AE65244DA98); } else { var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_CDE27E0B_DB32_5E1C_41C5_4AE65244DA98); }",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_6_0.png",
      "width": 254,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ]
   },
   "pitch": -27.56,
   "yaw": -24.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_CDFC6DCF_DB52_4214_41E8_D42977DAFBD9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.08,
   "yaw": 3.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.81
  }
 ],
 "data": {
  "label": "Arrow 05c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_446DB723_4F23_9743_41B0_F79BBF4C5009, this.camera_C7F0F568_DB3E_421C_41A8_6D10D875E116); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_55F6E4D6_4F21_8AC5_41B9_B43126C35B38",
   "pitch": -24.81,
   "hfov": 21.08,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.45
  }
 ],
 "id": "overlay_58B95088_4F21_894D_41C1_99C5F5C5D665",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.03,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.96
  }
 ],
 "data": {
  "label": "Circle Arrow 07"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290, this.camera_C3DA5651_DB3E_4E0C_41E1_4084ABC0EBE7); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_57FCD1D9_4F62_8ACC_41CA_62F8C12B21C4",
   "pitch": -3.96,
   "hfov": 14.03,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.13
  }
 ],
 "id": "overlay_5AEDEC47_4F61_99C3_41C8_A72B9E7F17BD",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "fontFamily": "Montserrat",
 "textShadowBlurRadius": 10,
 "textShadowColor": "#000000",
 "id": "Label_0C5F13A8_3BA0_A6FF_41BD_E3D21CFCE151",
 "left": 0,
 "width": 271,
 "fontColor": "#FFFFFF",
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "paddingLeft": 0,
 "text": "SEREH CAFE",
 "minHeight": 1,
 "top": 5,
 "height": 67,
 "minWidth": 1,
 "fontSize": "40px",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "propagateClick": false,
 "data": {
  "name": "text 1"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "fontWeight": "bold",
 "textDecoration": "none",
 "horizontalAlign": "left"
},
{
 "fontFamily": "Montserrat",
 "textShadowBlurRadius": 10,
 "textShadowColor": "#000000",
 "id": "Label_0C5F23A8_3BA0_A6FF_419F_468451E37918",
 "left": 1,
 "width": 236,
 "fontColor": "#FFFFFF",
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "paddingRight": 0,
 "textShadowHorizontalLength": 0,
 "textShadowVerticalLength": 0,
 "paddingLeft": 0,
 "text": "BANDUNG",
 "minHeight": 1,
 "bottom": 10,
 "height": 32,
 "minWidth": 1,
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "propagateClick": false,
 "data": {
  "name": "text 2"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "fontWeight": "normal",
 "textDecoration": "none",
 "horizontalAlign": "left"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 0,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 0,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowVerticalLength": 0,
 "horizontalAlign": "left"
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "10%",
 "contentOpaque": false,
 "paddingRight": 20,
 "bottom": "80%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 20,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "layout": "vertical",
 "horizontalAlign": "right"
},
{
 "borderRadius": 0,
 "children": [
  "this.Container_CE37DDB8_DB51_C27C_41E5_99C8F83297E8",
  "this.WebFrame_CE378DB8_DB51_C27C_41E3_3DE1811F70B3"
 ],
 "id": "Container_CE37CDB8_DB51_C27C_41D0_D046DDEA55CC",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowOpacity": 0.3,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 4,
 "class": "Container",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "propagateClick": false,
 "shadow": true,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowVerticalLength": 0,
 "horizontalAlign": "center"
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5A86218C_4F7E_8B44_418D_5CF0756E170A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5A86F18C_4F7E_8B44_419D_49D092C27600",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D9C499D_4F21_9B47_41C5_745F0CEE3DCC_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5A86818C_4F7E_8B44_41C0_570D5B54B6A0",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_55F3A4D4_4F21_8AC5_41C5_B55539FA195B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_44644934_4F23_7B45_41C9_46F1890794F8_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_55F3C4D4_4F21_8AC5_41CB_9B5743094F1D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F4D4D5_4F21_8AC7_41CB_38FA1DD74D11",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_55F454D5_4F21_8AC7_41AB_9676445C55CE",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_447639E5_4F23_FAC7_41D3_18EBA45FC601_0_HS_5_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_C77124EE_DB36_4214_41C7_033EB8092E22",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_59A8A90A_4F3E_BB4C_41CD_E805919B84CC",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_59A9190B_4F3E_BB4C_41D1_55D02CE50997",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_44679B56_4F22_9FC5_41C0_EE251436B151_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F014D4_4F21_8AC5_41C9_FC3F5FAB49FD",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_432A01AA_4F22_8B4C_41A9_58781A3BD3EE_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_59A71909_4F3E_BB4C_41BD_9C4EB3C1EB2B",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_59AA690B_4F3E_BB4C_41C8_315C6CA4A04B",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59AAD90B_4F3E_BB4C_41A7_9D776C14F5F5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446145F3_4F23_8AC3_41AC_F61715AF8A19_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F284D4_4F21_8AC5_41A5_72F56E2D9602",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5A87E18B_4F7E_8B4C_41C0_861E5B7732AC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5DA8BC13_4F21_7943_41BE_9EC1DD56BECE_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_5A87818C_4F7E_8B44_41D1_069770BAFF32",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_59ABD90C_4F3E_BB44_41C1_B9F9DCEF9D1A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4461203F_4F23_8943_41B2_593E6866A533_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5A84018B_4F7E_8B4C_41D0_63BC65ACEC02",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_59AAB90B_4F3E_BB4C_41C3_5DF6B31885BD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446AF33C_4F23_8F45_41B2_5839597418F4_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_59AB690B_4F3E_BB4C_41D1_4A479D3FC8B7",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_59A8390A_4F3E_BB4C_41D2_19D2C9504384",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4476FDEC_4F22_BAC4_41A8_900F7429A81C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_59A8F90A_4F3E_BB4C_41A1_7A1526F473CD",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5A84A18B_4F7E_8B4C_41AD_6F076DB0A888",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_5A87418B_4F7E_8B4C_41BE_BDC83F967B14",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D85AE59_4F22_99CF_41C8_E876D8EC9290_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_57FDD1DA_4F62_8ACC_41D1_3BC715D559F5",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_59A7990A_4F3E_BB4C_41C7_514C8AC60C4F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_59A8490A_4F3E_BB4C_41CE_919E5739895D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4415E098_4F22_894D_41A3_2A23FDC00B64_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F1D4D3_4F21_8AC3_41A3_4682C6E9C256",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F524D5_4F21_8AC7_41C2_75BAF1152997",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F564D5_4F21_8AC7_41CE_1A9B62B7A2AF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F494D5_4F21_8AC7_41AC_AD5B52DD4C34",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_11_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_C775B4ED_DB36_4214_41BE_FF4A99F52590",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_13_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_C77414ED_DB36_4214_41E0_2D6D5E2AAA3A",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_15_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_C77484ED_DB36_4214_41E7_8499117A9889",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4462EC73_4F23_99C3_41CC_AAC7C4BC51C4_0_HS_17_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "id": "AnimatedImageResource_C77764ED_DB36_4214_41E6_C3585EBEE3F2",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_55F794D5_4F21_8AC7_41D3_62FADDDC070A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F704D6_4F21_8AC5_417D_D903208FB0B8",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_446DB723_4F23_9743_41B0_F79BBF4C5009_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_55F754D6_4F21_8AC5_41BF_8D394E858D55",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4474454B_4F23_8BC3_41BE_D10D0A59272D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "id": "AnimatedImageResource_55F6E4D6_4F21_8AC5_41B9_B43126C35B38",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C75BEA6_4F22_B945_41D1_6796B1719011_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_57FCD1D9_4F62_8ACC_41CA_62F8C12B21C4",
 "rowCount": 6,
 "frameCount": 24
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "85%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "horizontalAlign": "center"
},
{
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "scrollBarColor": "#000000",
 "width": 8,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "orange line"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "width": "50%",
 "verticalAlign": "top",
 "paddingRight": 50,
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "gap": 0,
 "paddingTop": 20,
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "vertical",
 "horizontalAlign": "left"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "paddingTop": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "center"
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 140,
 "paddingBottom": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "gap": 10,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "borderRadius": 5,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemMaxWidth": 1000,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#F7931E",
 "itemThumbnailOpacity": 1,
 "verticalAlign": "middle",
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemPaddingRight": 3,
 "width": "100%",
 "paddingLeft": 70,
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "minHeight": 1,
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "height": "92%",
 "itemMaxHeight": 1000,
 "minWidth": 1,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemOpacity": 1,
 "itemHorizontalAlign": "center",
 "borderSize": 0,
 "itemBackgroundOpacity": 0,
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemLabelFontColor": "#F7931E",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemThumbnailBorderRadius": 0,
 "class": "ThumbnailGrid",
 "propagateClick": false,
 "itemBackgroundColor": [],
 "backgroundOpacity": 0,
 "shadow": false,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailHeight": 125,
 "itemLabelTextDecoration": "none",
 "rollOverItemLabelFontColor": "#F7931E",
 "paddingRight": 70,
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadow": true,
 "scrollBarMargin": 2,
 "itemHeight": 160,
 "bottom": -0.2,
 "itemThumbnailWidth": 220,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 13,
 "itemThumbnailScaleMode": "fit_outside",
 "itemMinWidth": 50,
 "paddingBottom": 70,
 "gap": 26,
 "paddingTop": 10,
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "itemLabelGap": 7,
 "itemThumbnailShadow": false,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarWidth": 10,
 "itemPaddingBottom": 3,
 "horizontalAlign": "center"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollEnabled": true,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame48191"
 },
 "propagateClick": false,
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 1
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "paddingTop": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "center"
},
{
 "playbackBarHeadWidth": 6,
 "id": "MapViewer",
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "toolTipShadowVerticalLength": 0,
 "playbackBarRight": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 6,
 "transitionDuration": 500,
 "toolTipShadowHorizontalLength": 0,
 "minWidth": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingTop": 4,
 "borderSize": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontFamily": "Arial",
 "progressOpacity": 1,
 "propagateClick": false,
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "toolTipFontStyle": "normal",
 "progressBottom": 2,
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipFontSize": 12,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarLeft": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "toolTipShadowOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderRadius": 0,
 "playbackBarHeight": 10
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": 140,
 "minWidth": 1,
 "contentOpaque": false,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "Container photo"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "55%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "horizontalAlign": "center"
},
{
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "scrollBarColor": "#000000",
 "width": 8,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "orange line"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.51,
 "width": "45%",
 "verticalAlign": "top",
 "paddingRight": 60,
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "gap": 0,
 "paddingTop": 20,
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "vertical",
 "horizontalAlign": "left"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "paddingTop": 0,
 "propagateClick": false,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "center"
},
{
 "children": [
  "this.HTMLText_CE37ADB8_DB51_C27C_41BB_6C5CE7940D11",
  "this.IconButton_CE37BDB8_DB51_C27C_41E8_461D14B8FD87"
 ],
 "id": "Container_CE37DDB8_DB51_C27C_41E5_99C8F83297E8",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "height": 80,
 "paddingBottom": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "gap": 10,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "layout": "absolute",
 "horizontalAlign": "left"
},
{
 "id": "WebFrame_CE378DB8_DB51_C27C_41E3_3DE1811F70B3",
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollEnabled": true,
 "url": "//www.youtube.com/embed/MSQhwpYQbtQ",
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FFFFFF"
 ],
 "insetBorder": false,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame52781"
 },
 "propagateClick": false,
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 1
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "photo"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "gap": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "horizontalAlign": "right"
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "Container text"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "horizontalAlign": "left"
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarColor": "#000000",
 "width": 370,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "horizontalAlign": "left"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "borderRadius": 0,
 "width": "100%",
 "right": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "right"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "borderRadius": 0,
 "width": "100%",
 "right": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "right"
},
{
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarBackgroundColorDirection": "vertical",
 "width": "100%",
 "toolTipShadowVerticalLength": 0,
 "playbackBarRight": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingLeft": 6,
 "transitionDuration": 500,
 "toolTipShadowHorizontalLength": 0,
 "minWidth": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "toolTipPaddingTop": 4,
 "borderSize": 0,
 "playbackBarBorderSize": 0,
 "height": "100%",
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "propagateClick": false,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontFamily": "Arial",
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressHeight": 10,
 "toolTipFontStyle": "normal",
 "progressBottom": 2,
 "toolTipShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipBorderSize": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "vrPointerColor": "#FFFFFF",
 "toolTipFontSize": 12,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipFontWeight": "normal",
 "progressBorderRadius": 0,
 "top": "0%",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderColor": "#0066FF",
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowSpread": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "toolTipShadowOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "class": "IconButton",
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "data": {
  "name": "IconButton <"
 },
 "propagateClick": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "cursor": "hand",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "borderRadius": 0,
 "width": "14.22%",
 "right": 10,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "class": "IconButton",
 "transparencyActive": false,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "data": {
  "name": "IconButton >"
 },
 "propagateClick": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "borderRadius": 0,
 "width": "10%",
 "right": 20,
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "top": 20,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "data": {
  "name": "IconButton X"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "right"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "paddingLeft": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "propagateClick": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "contentOpaque": false,
 "paddingTop": 20,
 "gap": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "horizontalAlign": "right"
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.79,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "Container text"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "horizontalAlign": "left"
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarColor": "#000000",
 "width": 370,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_CE37ADB8_DB51_C27C_41BB_6C5CE7940D11",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 0,
 "top": "0%",
 "height": 80,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "paddingTop": 17,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.8vh;font-family:'Oswald';\"><B>NET TV LIVE</B></SPAN></SPAN></DIV></div>",
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 },
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_CE37BDB8_DB51_C27C_41E8_461D14B8FD87",
 "borderRadius": 0,
 "width": 70,
 "right": 15,
 "verticalAlign": "top",
 "paddingRight": 0,
 "pressedRollOverIconURL": "skin/IconButton_CE37BDB8_DB51_C27C_41E8_461D14B8FD87_pressed_rollover.jpg",
 "paddingLeft": 0,
 "minHeight": 40,
 "top": 15,
 "height": 70,
 "minWidth": 40,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_CE37BDB8_DB51_C27C_41E8_461D14B8FD87_pressed.jpg",
 "rollOverIconURL": "skin/IconButton_CE37BDB8_DB51_C27C_41E8_461D14B8FD87_rollover.jpg",
 "class": "IconButton",
 "transparencyActive": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_CE37BDB8_DB51_C27C_41E8_461D14B8FD87.jpg",
 "data": {
  "name": "X"
 },
 "shadow": false,
 "backgroundOpacity": 0,
 "cursor": "hand",
 "click": "this.setComponentVisibility(this.Container_CE376DB8_DB51_C27C_41E9_16F1C727B80B, false, 0, null, null, false)",
 "horizontalAlign": "right"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#F7931E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.54vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.86vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.73vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "fontColor": "#FFFFFF",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "borderRadius": 0,
 "width": 180,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "fontFamily": "Montserrat",
 "iconHeight": 32,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "mode": "push",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "height": 50,
 "paddingBottom": 0,
 "label": "LOREM IPSUM",
 "rollOverBackgroundOpacity": 1,
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "1.96vh",
 "propagateClick": false,
 "iconWidth": 32,
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "borderColor": "#000000",
 "shadow": false,
 "iconBeforeLabel": true,
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.8,
 "fontWeight": "bold",
 "layout": "horizontal",
 "textDecoration": "none",
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "45%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.54vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18899"
 },
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
},
{
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "borderSize": 0,
 "height": "80%",
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "data": {
  "name": "- content"
 },
 "propagateClick": false,
 "shadow": false,
 "overflow": "scroll",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "horizontalAlign": "left"
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "paddingLeft": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Image",
 "paddingTop": 0,
 "propagateClick": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "shadow": false,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "scrollBarColor": "#F7931E",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "width": "75%",
 "paddingRight": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.97vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.64vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.09vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.09vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "paddingTop": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText19460"
 },
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0
}],
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "existsKey": function(key){  return key in window; },
  "getKey": function(key){  return window[key]; },
  "registerKey": function(key, value){  window[key] = value; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "minWidth": 20,
 "contentOpaque": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 10,
 "class": "Player",
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "data": {
  "name": "Player468"
 },
 "propagateClick": true,
 "shadow": false,
 "overflow": "visible",
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
