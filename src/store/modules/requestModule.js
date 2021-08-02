import axios from 'axios';

export default {
    namespaced: true,
    state() {
        return {
            requests: [],
            checkPosts: false
        }
    },
    mutations: {
        setRequests(state, payload) {
            state.requests = payload;
        },
        addCheckPosts(state, payload) {
            state.checkPosts = payload
        }
    },
    actions: {
        async loadExperience(context) {
            try {
                const res = await axios.get('http://localhost:3000/posts');
                context.commit('setRequests', res.data)
            } catch (e) {
                console.error(e);
            }
        },
        checkPosts(context) {
            const arr = localStorage.getItem('posts');
            if (arr) {
                context.commit('setRequests', JSON.parse(arr))
                context.commit('addCheckPosts', true);
            }
        },
        addLike(context, payload) {
            const cardId = payload.id;
            const requests = context.rootGetters['request/requests'];
            const card = requests.find(item => item.id === cardId);
            payload.liked ? card.like++ : card.like--;
            card.isLiked = payload.liked;

            localStorage.setItem('posts', JSON.stringify(requests));
            context.commit('setRequests', requests);
            context.commit('addCheckPosts', true);
        }
    },
    getters: {
        requests(state) {
            return state.requests
        },
        checkPosts(state) {
            return state.checkPosts
        }
    }
}