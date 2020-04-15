import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageA from '@/components/PageA'
import pageB from '@/components/PageB'
import pageC from '@/components/PageC'
import pageD from '@/components/PageD'
// import pageA from '../components/PageA.vue' //autre facon d'ecrire le chemin

Vue.use(Router)

export default new Router({
  
  mode: 'history', //pour aficher url sans le #

  routes: [
    {
		path: '/',
		name: 'root',
		component: HelloWorld
    }, {
		path: '/a',
    	name: 'a',
    	component: pageA,
    	children: [{
    		path: 'b',
    		name: 'a.b',
    		component: pageB
    	}, {
    		path: 'c',
    		name: 'a.c',
    		component: pageC

    	}]
    }, {
    	beforeEnter(route, redirect, next){
    		let confirm = window.confirm('voulez vous aller sur pageA')
    		if(confirm){
    			next()
    		}else {
    			redirect('/')
    		}
    	},
		path: '/d',
		name: 'd',
		component: pageD
    }, {
    	path: '/article/:id(\\d+)', //regex pour limiter les type de parametre correspondant a id dans l'url
    	name: 'post',
    	component: pageA
    }, 
    {
    	path: '*',
    	redirect: '/'
    }
  ]
})
