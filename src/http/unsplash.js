import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Accept: 'application/json',
        'Accept-Version': 'v1',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        Authorization:
            'Client-ID f05ee6ae45d2efe2d3fc96e4ff4c9b0b387d799d04cc07266a98bdae93c07db7'
    }
});
