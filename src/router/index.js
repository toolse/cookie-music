import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Find from '../components/Find.vue'
import Rank from '../components/Rank.vue'
import SongSheet from '../components/SongSheet.vue'
import Singer from '../components/Singer.vue'
import Video from '../components/Video.vue'
import MV from '../components/MV.vue'
import Search from '../components/Search.vue'
import SongDetail from '../components/detail/SongDetail.vue'
import AlbumDetail from '../components/detail/AlbumDetail.vue'
import VideoDetail from '../components/detail/VideoDetail.vue'

const routes = [
    { path: '/', name: 'Find', component: Find },
    { path: '/rank', name: 'Rank', component: Rank },
    { path: '/songsheet', name: 'SongSheet', component: SongSheet },
    { path: '/singer', name: 'Singer', component: Singer },
    { path: '/video', name: 'Video', component: Video },
    { path: '/mv', name: 'MV', component: MV },
    { path: '/search', name: 'Search', component: Search },
    { path: '/songdetail', name: 'SongDetail', component: SongDetail },
    { path: '/albumdetail', name: 'AlbumDetail', component: AlbumDetail },
    { path: '/videodetail', name: 'VideoDetail', component: VideoDetail }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router
