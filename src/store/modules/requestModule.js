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
        addLike(state, payload) {
            const cardId = payload.id;
            const card = state.requests.find(item => item.id === cardId);
            payload.liked ? card.like++ : card.like--;
            card.isLiked = payload.liked;
        }
    },
    actions: {
        async loadExperience(context) {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                context.commit('setRequests', response.data)
            } catch (e) {
                console.error(e);
            }
        },
        async saveChanges(context, payload) {
            try {
                const cardId = payload.id;
                const requests = context.rootGetters['request/requests'];
                const card = requests.find(item => item.id === cardId);
                await axios.patch(`http://localhost:3000/posts/` + cardId, { ...card });
            } catch (e) {
                console.error(e);
            }
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